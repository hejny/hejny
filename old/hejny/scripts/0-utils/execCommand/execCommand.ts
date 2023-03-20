import chalk from 'chalk';
import { spawn } from 'child_process';
import spaceTrim from 'spacetrim';
import { forTime } from 'waitasecond';
import { IExecCommandOptions } from './IExecCommandOptions';
import { execCommandNormalizeOptions } from './execCommandNormalizeOptions';

export function execCommand(options: IExecCommandOptions): Promise<string> {
    return new Promise((resolve, reject) => {
        const normalizedOptions = execCommandNormalizeOptions(options);
        let { command } = normalizedOptions;
        const { humanReadableCommand, args, cwd, crashOnError, timeout } = normalizedOptions;

        if (timeout !== Infinity) {
            // TODO: In waitasecond forTime(Infinity) should be equivalent to forEver()
            forTime(timeout).then(() => {
                if (crashOnError) {
                    reject(new Error(`Command "${humanReadableCommand}" exceeded time limit of ${timeout}ms`));
                } else {
                    console.warn(
                        `Command "${humanReadableCommand}" exceeded time limit of ${timeout}ms but continues running`,
                    );
                    resolve('Command exceeded time limit');
                }
            });
        }

        if (/^win/.test(process.platform) && ['npm', 'npx'].includes(command)) {
            command = `${command}.cmd`;
        }

        console.info(chalk.yellow(cwd) + ' ' + chalk.green(command) + ' ' + chalk.blueBright(args.join(' ')));

        try {
            const commandProcess = spawn(command, args, { cwd });

            commandProcess.on('message', (message) => {
                console.info({ message });
            });

            const output: string[] = [];

            commandProcess.stdout.on('data', (stdout) => {
                output.push(stdout.toString());
                console.info(stdout.toString());
            });

            commandProcess.stderr.on('data', (stderr) => {
                output.push(stderr.toString());
                if (stderr.toString().trim()) {
                  console.warn(stderr.toString());
                }
            });

            const finishWithCode = (code: number) => {
                if (code !== 0) {
                    if (crashOnError) {
                        reject(
                            new Error(
                                output.join('\n').trim() ||
                                    `Command "${humanReadableCommand}" exited with code ${code}`,
                            ),
                        );
                    } else {
                        console.warn(`Command "${humanReadableCommand}" exited with code ${code}`);
                        resolve(spaceTrim(output.join('\n')));
                    }
                } else {
                    resolve(spaceTrim(output.join('\n')));
                }
            };

            commandProcess.on('close', finishWithCode);
            commandProcess.on('exit', finishWithCode);
            commandProcess.on('disconnect', () => {
                // Note: Unexpected disconnection should always result in rejection
                reject(new Error(`Command "${humanReadableCommand}" disconnected`));
            });
            commandProcess.on('error', (error) => {
                if (crashOnError) {
                    reject(new Error(`Command "${humanReadableCommand}" failed: \n${error.message}`));
                } else {
                    console.warn(error);
                    resolve(spaceTrim(output.join('\n')));
                }
            });
        } catch (error) {
            // Note: Unexpected error in sync code should always result in rejection
            reject(error);
        }
    });
}

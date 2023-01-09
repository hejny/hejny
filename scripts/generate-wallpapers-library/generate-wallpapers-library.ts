#!/usr/bin/env ts-node

import chalk from 'chalk';
import commander from 'commander';
import { writeFile } from 'fs/promises';
import glob from 'glob-promise';
import { normalizeTo_camelCase, normalizeTo_snake_case } from 'n12';
import { capitalize } from 'n12/dist/capitalize';
import { basename, dirname, join, relative } from 'path';
import { commit } from '../utils/autocommit/commit';
import { isWorkingTreeClean } from '../utils/autocommit/isWorkingTreeClean';
import { prettify } from '../utils/prettify';

const program = new commander.Command();
program.option('--commit', `Autocommit changes`);
program.parse(process.argv);
const { commit: isCommited } = program.opts();

generateWallpapersLibrary({ isCommited })
    .catch((error) => {
        console.error(chalk.bgRed(error.name));
        console.error(error);
        process.exit(1);
    })
    .then(() => {
        process.exit(0);
    });

async function generateWallpapersLibrary({ isCommited }: { isCommited: boolean }) {
    console.info(`🖼️  Generating wallpapers library`);

    const rootDirectory = join(__dirname, '../../');
    const wallpapersFilePath = join(rootDirectory, 'public/wallpapers/index.tsx');

    if (isCommited && !(await isWorkingTreeClean(process.cwd()))) {
        throw new Error(`Working tree is not clean`);
    }

    const wallpapersDirectory = join(rootDirectory, 'public/wallpapers');
    const wallpapersPaths = await glob(
        join(wallpapersDirectory, '*.png' /* <- TODO: Maybe do not hardcode PNGs */).split('\\').join('/'),
    );

    const namesRegistry: Record<string, number> = {};

    const wallpapers = wallpapersPaths.map((wallpaperPath) => {
        let name = basename(wallpaperPath);

        const jobUuidMatch = name.match(/_(?<jobUuid>[^_]*?)(\.png)?$/);
        const jobUuid = jobUuidMatch?.groups?.jobUuid;

        if (!jobUuid) {
            throw new Error(`Can not find jobUuid in "${name}"`);
        }

        const jobUrl = new URL(`https://www.midjourney.com/app/jobs/${jobUuid}`);

        name = name.replace(/^Pavol_Hejn_/, '');
        name = name.replace('_' + jobUuid, '');
        name = name.replace(/\.png$/, '');

        const index = namesRegistry[name] || 0;
        namesRegistry[name] = index + 1;

        const indexSuffix = index === 0 ? '' : (index + 1).toString();

        return {
            componentName: capitalize(normalizeTo_camelCase(name)) + 'Image' + indexSuffix,
            entityName: normalizeTo_snake_case(name) + indexSuffix,
            importPath: ('./' + relative(dirname(wallpapersFilePath), wallpaperPath).split('\\').join('/')).replace(
                /^\.\/\.\.\//,
                '../',
            ),
            title: name.split('_').join(' '),
            jobUrl,
        };
    });

    const wallpapersFileContent = await prettify(`

        /**
         * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
         * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
         */
    
          import Image from 'next/image';
          ${wallpapers.map(({ entityName, importPath }) => `import ${entityName} from '${importPath}';`).join('\n')}

          ${wallpapers
              .map(
                  ({ componentName, entityName, title, jobUrl }) => `

                        /**
                         * Image of ${title}
                         * 
                         * @see ${jobUrl.href}
                         */
                        export function ${componentName}() {
                            return <Image alt="${title}" src={${entityName}} draggable="false" />;
                        }
                    
                    
                    `,
              )
              .join('\n')}
        `);

    await writeFile(wallpapersFilePath, wallpapersFileContent, 'utf-8');

    if (isCommited) {
        await commit(wallpapersFilePath, `🖼️  Generate wallpapers library`);
    }

    console.info(`[ Done 🖼️  Generating wallpapers library ]`);
    process.exit(0);
}

/**
 * TODO: !!! Persistency and uniqueness of the names
 */

#!/usr/bin/env ts-node

import chalk from 'chalk';
import commander from 'commander';
import { writeFile } from 'fs/promises';
import glob from 'glob-promise';
import { normalizeToCamelCase } from 'n12';
import { capitalize } from 'n12/dist/capitalize';
import { basename, join, relative } from 'path';
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
    const wallpapersFilePath = join(rootDirectory, 'components/wallpapers.tsx');

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

        const jobUuidMatch = name.match(/_(?<jobUuid>[^_]*?)$/);
        const jobUuid = jobUuidMatch?.groups?.jobUuid;

        if (!jobUuid) {
            throw new Error(`Can not find jobUuid in "${name}"`);
        }

        const jobUrl = new URL(`https://www.midjourney.com/app/jobs/${jobUuid}`);

        name = name.replace(/^Pavol_Hejn_/, '');
        name = name.replace('_' + jobUuid, '');

        const index = namesRegistry[name] || 0;
        namesRegistry[name] = index + 1;

        const indexSuffix = index === 0 ? '' : (index + 1).toString();

        return {
            componentName: capitalize(normalizeToCamelCase(name)) + 'Image' + indexSuffix,
            entityName: normalizeToCamelCase(name /* <- !!! normalize_imported_names_like_this */) + indexSuffix,
            importPath: './' + relative(wallpapersFilePath, wallpaperPath).split('\\').join('/'),
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
                            return <Image alt="${title}" src={${entityName}} />;
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

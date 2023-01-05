#!/usr/bin/env ts-node

import chalk from 'chalk';
import commander from 'commander';
import { writeFile } from 'fs/promises';
import glob from 'glob-promise';
import { normalizeToKebabCase } from 'n12';
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
        console.error(chalk.red(error));
        process.exit(1);
    })
    .then(() => {
        process.exit(0);
    });

async function generateWallpapersLibrary({ isCommited }: { isCommited: boolean }) {
    console.info(`🖼️ Generating wallpapers library`);

    const rootDirectory = join(__dirname, '../../');

    if (isCommited && !(await isWorkingTreeClean(process.cwd()))) {
        throw new Error(`Working tree is not clean`);
    }

    const wallpapersDirectory = join(rootDirectory, 'public/wallpapers');
    const wallpapersPaths = await glob(join(wallpapersDirectory, '*.png' /* <- TODO: Maybe do not hardcode PNGs */));
    const wallpapers = wallpapersPaths.map((wallpaperPath) => ({
        componentName: capitalize(normalizeToKebabCase(basename(wallpaperPath))) + 'Image',
        entityName: normalizeToKebabCase(basename(wallpaperPath)),
        importPath: './' + relative(wallpapersFilePath, wallpaperPath).split('\\').join('/'),
        title: '!!!',
    }));

    const wallpapersFilePath = join(__dirname, '../../components/wallpapers.tsx');
    const wallpapersFileContent = await prettify(`

        /**
         * 🏭 GENERATED WITH 🖼️ Generate wallpapers library
         * ⚠️ Warning: Do not edit by hand, all changes will be lost on next execution!
         */
    
          ${wallpapers.map(({ entityName, importPath }) => `import ${entityName} from '${importPath}';`).join('\n')}

          ${wallpapers
              .map(
                  ({ componentName, entityName, title }) => `

                        /**
                         * Image of ${title}
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
        await commit(wallpapersFilePath, `🖼️ Generate wallpapers library`);
    }

    console.info(`[ Done 🖼️ Generating wallpapers library ]`);
    process.exit(0);
}

/**
 * TODO: normalize_imported_names_like_this
 */

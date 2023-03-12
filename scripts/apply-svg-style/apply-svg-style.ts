#!/usr/bin/env ts-node

import chalk from 'chalk';
import { readFile, writeFile } from 'fs/promises';
import glob from 'glob-promise';
import { JSDOM } from 'jsdom';
import { join, relative } from 'path';
import { prettify } from '../utils/prettify';
import { unwrapSvgInHtml } from './utils/unwrapSvgInHtml';
import { wrapSvgInHtml } from './utils/wrapSvgInHtml';

if (process.cwd() !== join(__dirname, '../..')) {
    console.error(chalk.red(`CWD must be root of the project`));
    process.exit(1);
}

applySvgStyle()
    .catch((error) => {
        console.error(chalk.bgRed(error.name));
        console.error(error);
        process.exit(1);
    })
    .then(() => {
        process.exit(0);
    });

async function applySvgStyle() {
    console.info(`🎨  Apply style on SVGs`);

    const rootDir = join(__dirname, '../../');
    const svgDir = join(rootDir, 'public/projects');

    for (const svgPath of await glob(join(svgDir, '/**/*.svg').split('\\').join('/'))) {
        const svgContent = await readFile(svgPath, 'utf-8');
        const htmlContent = wrapSvgInHtml(svgContent);

        const dom = new JSDOM(htmlContent);
        const { window } = dom;

        await writeFile(
            svgPath,
            await Promise.resolve(dom.serialize())
                .then((htmlContent) => unwrapSvgInHtml(htmlContent))
                .then((htmlContent) =>
                    prettify(
                        htmlContent,
                        'html' /* <- Note: Formatter for svg is not available so using html which works fine */,
                    ),
                ),
            'utf-8',
        );
        console.info(`💾 ${relative(process.cwd(), svgPath).split('\\').join('/')}`);

        // !!! break;
    }

    // TODO: !!! Iterate through every SVG
    // TODO: !!! Check same SVG size
    // TODO: !!! Change <defs/>
    // TODO: !!! Change  vector-effect="non-scaling-stroke" style= on each <path/>
    // TODO: !!! Format the file

    console.info(`[ Done 🖼️  Generating patterns library ]`);
}

/**
 * TODO: !!! Remove rootDir from ACRY scripts and use process.cwd()
 */

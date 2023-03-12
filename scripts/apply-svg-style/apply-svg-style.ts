#!/usr/bin/env ts-node

import chalk from 'chalk';
import { join } from 'path';

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

    // TODO: !!! Iterate through every SVG
    // TODO: !!! Change <defs/>
    // TODO: !!! Change  vector-effect="non-scaling-stroke" style= on each <path/>
    // TODO: !!! Format the file

    console.info(`[ Done 🖼️  Generating patterns library ]`);
}

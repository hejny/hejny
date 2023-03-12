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

    const svgDir = join(process.cwd(), 'public/projects');

    svg: for (const svgPath of await glob(join(svgDir, '/**/*.svg').split('\\').join('/'))) {
        const svgName = relative(process.cwd(), svgPath).split('\\').join('/');
        const svgContent = await readFile(svgPath, 'utf-8');
        const htmlContent = wrapSvgInHtml(svgContent);

        const dom = new JSDOM(htmlContent);
        const svgElement = dom.window.document.body.querySelector('svg');

        if (!svgElement) {
            console.info({ svgContent, htmlContent });
            console.warn(`⚠ ${svgName} can not find svgElement`);
            continue svg;
        }

        // Note: Checking that the SVG is the supported one
        const width = parseFloat(svgElement.getAttribute('width')!);
        const height = parseFloat(svgElement.getAttribute('height')!);
        const viewBox = svgElement.getAttribute('viewBox')!;
        if (width !== 3000 || height !== 2000 || viewBox != '0 0 3000 2000') {
            console.info({ width, height, viewBox });
            console.warn(`⏩ ${svgName} has unexpected width, height or viewBox`);
            continue svg;
        }

        // Note: Normalize <defs/> - Remove existing <defs>
        for (const defsElement of svgElement.querySelectorAll('defs')) {
            if (defsElement.innerHTML.trim() === '') {
            } else if (defsElement.children.length === 1 && defsElement.children[0].getAttribute('id') === 'glow') {
            } else {
                console.info({ defsElement: defsElement.outerHTML });
                console.warn(`⏩ ${svgName} has unexpected <defs/>`);
                continue svg;
            }

            defsElement.parentElement?.removeChild(defsElement);
        }

        // Note: Normalize <defs/> - Add <defs> with glow effect
        const glowDefsElement = dom.window.document.createElementNS('http://www.w3.org/2000/svg', 'defs');
        // !!! What is x="-0.012046945" y="-0.012603763" width="1.0240937" height="1.0252078"
        // !!! id="defs429" id="feGaussianBlur416" id="feMergeNode418" ...
        glowDefsElement.innerHTML = `
            <filter id="glow" x="-0.012046945" y="-0.012603763" width="1.0240937" height="1.0252078">
                <feGaussianBlur
                    class="blur"
                    result="coloredBlur"
                    stdDeviation="4"
                    vector-effect="non-scaling-stroke"
                    id="feGaussianBlur416"
                ></feGaussianBlur>
                <feMerge id="feMerge426">
                    <feMergeNode in="coloredBlur" id="feMergeNode418"></feMergeNode>
                    <feMergeNode in="coloredBlur" id="feMergeNode420"></feMergeNode>
                    <feMergeNode in="coloredBlur" id="feMergeNode422"></feMergeNode>
                    <feMergeNode in="SourceGraphic" id="feMergeNode424"></feMergeNode>
                </feMerge>
            </filter>
        `;
        svgElement.insertBefore(glowDefsElement, svgElement.children[0]);

        // Note: Apply same style on each <path/>
        // !!!
        // TODO: !!! Change  vector-effect="non-scaling-stroke" style= on each <path/>

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
        console.info(`💾 ${svgName}`);
    }

    console.info(`[ Done 🖼️  Generating patterns library ]`);
}

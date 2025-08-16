/**
 * Generate PDFs from all markdown files under /documents into /public/documents
 * preserving the relative folder structure.
 *
 * Example:
 *  documents/ai-skoleni/varianta-1-vyvoj-pomoci-ai.md
 * becomes
 *  public/documents/ai-skoleni/varianta-1-vyvoj-pomoci-ai.pdf
 *
 * The PDFs are then served statically by Next.js at:
 *  https://<domain>/documents/ai-skoleni/varianta-1-vyvoj-pomoci-ai.pdf
 *
 * This script is invoked via the npm "prebuild" script so it runs automatically
 * before `next build`.
 */

const fs = require('fs');
const path = require('path');
const showdown = require('showdown');
const puppeteer = require('puppeteer');

const projectRoot = path.join(__dirname, '..');
const SOURCE_DIR = path.join(projectRoot, 'documents');
const TARGET_DIR = path.join(projectRoot, 'public', 'documents');

const converter = new showdown.Converter({
    noHeaderId: true,
});

/**
 * Recursively collect markdown files (.md) under a directory
 * @param {string} dir
 * @returns {string[]}
 */
function collectMarkdownFiles(dir) {
    const out = [];
    if (!fs.existsSync(dir)) {
        return out;
    }
    for (const entry of fs.readdirSync(dir)) {
        const full = path.join(dir, entry);
        const stat = fs.statSync(full);
        if (stat.isDirectory()) {
            out.push(...collectMarkdownFiles(full));
        } else if (stat.isFile() && entry.toLowerCase().endsWith('.md')) {
            out.push(full);
        }
    }
    return out;
}

/**
 * Convert markdown to HTML string.
 * @param {string} markdown
 * @returns {string}
 */
function markdownToHtml(markdown) {
    return converter.makeHtml(markdown);
}

/**
 * Generate a single PDF file using Puppeteer to render HTML.
 * @param {string} sourcePath
 * @param {string} targetPath
 */
async function generatePdf(sourcePath, targetPath) {
    const md = fs.readFileSync(sourcePath, 'utf8');
    fs.mkdirSync(path.dirname(targetPath), { recursive: true });

    const html = `
        <html>
        <head>
            <meta charset="utf-8">
            <title>${path.basename(sourcePath, '.md')}</title>
            <style>
                body { font-family: Arial, sans-serif; margin: 40px; }
                h1, h2, h3, h4, h5, h6 { font-weight: bold; }
                pre, code { background: #f5f5f5; font-family: monospace; }
                ul, ol { margin-left: 20px; }
                blockquote { border-left: 3px solid #ccc; margin-left: 0; padding-left: 10px; color: #555; }
            </style>
        </head>
        <body>
            ${markdownToHtml(md)}
        </body>
        </html>
    `;

    const browser = await puppeteer.launch({ headless: true });
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: 'load' });
    await page.pdf({
        path: targetPath,
        format: 'A4',
        margin: { top: '56px', bottom: '56px', left: '56px', right: '56px' },
    });
    await browser.close();

    log('OK   ', path.relative(projectRoot, targetPath));
}

function log(...args) {
    // Prefix for clarity during CI logs
    console.info('[documents-pdf]', ...args);
}

async function main() {
    log('Starting PDF generation');
    const files = collectMarkdownFiles(SOURCE_DIR);
    if (files.length === 0) {
        log('No markdown files found; nothing to do.');
        return;
    }
    log('Found', files.length, 'markdown files');

    let success = 0;
    const pdfPromises = [];
    for (const file of files) {
        const rel = path.relative(SOURCE_DIR, file);
        const out = path.join(TARGET_DIR, rel.replace(/\.md$/i, '.pdf'));
        pdfPromises.push(
            generatePdf(file, out).then(() => {
                success++;
            }),
        );
    }
    await Promise.all(pdfPromises);
    log(`Completed: ${success}/${files.length} PDFs generated/updated`);
}

main()
    .then(() => {
        console.info('PDF generation completed successfully');
        process.exit(0);
    })
    .catch((err) => {
        console.error(err);
        console.error('PDF generation failed');
        process.exit(1);
    });

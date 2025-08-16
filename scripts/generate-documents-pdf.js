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
const PDFDocument = require('pdfkit');
const showdown = require('showdown');

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
 * Simple markdown-to-PDF rendering.
 * We parse line by line and apply rudimentary formatting for headings and lists.
 * @param {string} markdown
 * @param {PDFKit.PDFDocument} doc
 */
function renderMarkdownToPdf(markdown, doc) {
    const lines = markdown.replace(/\r\n/g, '\n').split('\n');
    for (let i = 0; i < lines.length; i++) {
        let line = lines[i];

        // Trim trailing spaces
        line = line.replace(/\s+$/g, '');

        if (line.trim() === '') {
            doc.moveDown(0.6);
            continue;
        }

        // Headings
        const headingMatch = line.match(/^(#{1,6})\s+(.*)$/);
        if (headingMatch) {
            const level = headingMatch[1].length;
            const text = headingMatch[2].trim();
            const size = Math.max(24 - (level - 1) * 2, 12);
            doc.moveDown(0.4);
            doc.fontSize(size).font('Helvetica-Bold').text(text, {
                paragraphGap: 2,
            });
            doc.moveDown(0.2);
            continue;
        }

        // Bullet list
        const bulletMatch = line.match(/^(\s*)([-*+])\s+(.*)$/);
        if (bulletMatch) {
            const indent = bulletMatch[1].replace(/\t/g, '    ').length;
            const bulletText = bulletMatch[3];
            doc.fontSize(12)
                .font('Helvetica')
                .text('• ' + bulletText, {
                    indent: indent * 4,
                    paragraphGap: 2,
                });
            continue;
        }

        // Numbered list
        const orderedMatch = line.match(/^(\s*)(\d+)\.\s+(.*)$/);
        if (orderedMatch) {
            const indent = orderedMatch[1].replace(/\t/g, '    ').length;
            const num = orderedMatch[2];
            const itemText = orderedMatch[3];
            doc.fontSize(12)
                .font('Helvetica')
                .text(num + '. ' + itemText, {
                    indent: indent * 4,
                    paragraphGap: 2,
                });
            continue;
        }

        // Code block fences - very naive handling: monospaced until closing ```
        if (line.trim().startsWith('```')) {
            // Collect fenced code
            const codeLines = [];
            i++;
            while (i < lines.length && !lines[i].trim().startsWith('```')) {
                codeLines.push(lines[i]);
                i++;
            }
            doc.moveDown(0.2);
            doc.fontSize(11).font('Courier').text(codeLines.join('\n'), {
                paragraphGap: 4,
            });
            doc.moveDown(0.2);
            continue;
        }

        // Paragraph
        doc.fontSize(12).font('Helvetica').text(line, {
            paragraphGap: 4,
        });
    }
}

/**
 * Generate a single PDF file
 * @param {string} sourcePath
 * @param {string} targetPath
 */
function generatePdf(sourcePath, targetPath) {
    const md = fs.readFileSync(sourcePath, 'utf8');

    /*
    // Skip generation if up-to-date
    try {
        const targetStat = fs.statSync(targetPath);
        const sourceStat = fs.statSync(sourcePath);
        if (targetStat.mtimeMs >= sourceStat.mtimeMs) {
            log('SKIP (up-to-date)', path.relative(projectRoot, targetPath));
            return;
        }
    } catch {
        // proceed
    }
    */

    fs.mkdirSync(path.dirname(targetPath), { recursive: true });

    const doc = new PDFDocument({
        autoFirstPage: true,
        margins: { top: 56, bottom: 56, left: 56, right: 56 },
        info: {
            Title: path.basename(sourcePath, '.md'),
            Author: 'Generated from markdown',
        },
    });
    const writeStream = fs.createWriteStream(targetPath);
    doc.pipe(writeStream);

    // Remove DejaVu font registration to prevent ENOENT errors
    // Use only built-in fonts (Helvetica, Courier)

    // Title (first non-empty line)
    const firstLine = md
        .replace(/\r\n/g, '\n')
        .split('\n')
        .find((l) => l.trim().length > 0);
    if (firstLine) {
        const title = firstLine.replace(/^#\s+/, '').trim();
        doc.font('Helvetica-Bold').fontSize(26).text(title, { align: 'left' });
        doc.moveDown(1);
    }

    renderMarkdownToPdf(md, doc);

    doc.end();

    return new Promise((resolve, reject) => {
        writeStream.on('finish', () => {
            log('OK   ', path.relative(projectRoot, targetPath));
            resolve();
        });
        writeStream.on('error', (err) => {
            log('ERR  ', path.relative(projectRoot, targetPath), err.message);
            reject(err);
        });
    });
}

function log(...args) {
    // Prefix for clarity during CI logs
    console.log('[documents-pdf]', ...args);
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
            generatePdf(file, out)
                .then(() => { success++; })
                .catch(() => { /* ignore errors */ })
        );
    }
    await Promise.all(pdfPromises);
    log(`Completed: ${success}/${files.length} PDFs generated/updated`);
}

main().catch((err) => {
    console.error(err);
    process.exitCode = 1;
});

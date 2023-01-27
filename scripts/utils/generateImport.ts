import { dirname, relative } from 'path';

interface ImportOptions {
    entityName: string;
    entityPath: string;
    itselfPath: string;
}

export function generateImport(options: ImportOptions): string {
    const { entityName, entityPath, itselfPath } = options;

    let importPath = relative(dirname(itselfPath), entityPath).replace(/\\/g, '/');

    if (!/^\.\.?\//.test(importPath)) {
        importPath = './' + importPath;
    }

    importPath = importPath.replace(/\.(ts|js)x?$/i, '');

    const importStatement = `import ${entityName} from '${importPath}';`;

    return importStatement;
}

/**
 * Note: entityPath and itselfPath are intentionally same length to be nicely alignet when used
 * TODO: Also allow named imports with discriminated import
 * TODO: Use in BPE
 * TODO: Use in Collboard
 */

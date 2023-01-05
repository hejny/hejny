import { readFile } from 'fs';
import { join } from 'path';
import prettier from 'prettier';
import { promisify } from 'util';

export async function prettify(fileContents: string, parser = 'typescript'): Promise<string> {
    return prettier.format(fileContents, {
        parser,
        ...JSON.parse(await promisify(readFile)(join(__dirname, '../../.prettierrc'), 'utf8')),
    });
}

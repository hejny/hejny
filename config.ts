import { ConfigChecker } from 'configchecker';
import packageJson from './package.json';

export const VERSION = packageJson.version;
export const DEBUG = {
    backgroundPatternPicker: true,
    showGrid: false,
};

const config = ConfigChecker.from(process.env);

export const VERCEL_GIT_COMMIT_MESSAGE = config.get('VERCEL_GIT_COMMIT_MESSAGE').value;

/**
 * TODO: !!! Is this working
 */

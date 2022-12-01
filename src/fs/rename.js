import fsPromises from 'node:fs/promises';
import { found, __dirname } from './common.js';

const rename = async () => {
    const src = __dirname+"/files/wrongFilename.txt";
    const dest = __dirname+"/files/properFilename.md";
    if ( await found(src) && !(await found(dest)) ) {
        await fsPromises.rename(src, dest);
    } else {
        throw Error ('FS operation failed');
    }
};

await rename();
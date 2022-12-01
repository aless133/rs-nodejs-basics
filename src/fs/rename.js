import fsPromises from 'node:fs/promises';
import { found, __dirname } from './common.js';

const rename = async () => {
    const src = __dirname+"/wrongFilename.txt";
    const dest = __dirname+"/properFilename.md";
    if ( await found(src) && !(await found(dest)) ) {
        await fsPromises.rename(src, dest);
    } else {
        throw Error ('FS operation failed');
    }
};

await rename();
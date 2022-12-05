import fsPromises from 'node:fs/promises';
import { found, __dirname } from './common.js';

const remove = async () => {
    const filename = __dirname+"/files/fileToRemove.txt";
    if ( await found(filename) ) {
        await fsPromises.unlink(filename);
    } else {
        throw Error ('FS operation failed');
    }
};

await remove();
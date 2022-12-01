import fsPromises from 'node:fs/promises';
import { found, __dirname } from './common.js';

const read = async () => {
    const filename = __dirname+"/files/fileToRead.txt";
    if ( await found(filename) ) {
        console.log(await fsPromises.readFile(filename, {encoding:'utf8'}));
    } else {
        throw Error ('FS operation failed');
    }
};

await read();
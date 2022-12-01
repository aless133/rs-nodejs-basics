import fsPromises from 'node:fs/promises';
import { found, __dirname } from './common.js';

const list = async () => {
    const dir = __dirname+"/files";
    if ( await found(dir) ) {
        const files = await fsPromises.readdir(dir);
        files.forEach((file)=>{
            console.log(file);
        })
    } else {
        throw Error ('FS operation failed');
    }
};

await list();
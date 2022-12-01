import fsPromises from 'node:fs/promises';
import { found, __dirname } from './common.js';

const copy = async () => {
    const src = __dirname+"/files";
    const dest = __dirname+"/files_copy";
    if ( await found(src) && !(await found(dest)) ) {
        await fsPromises.mkdir(dest);
        const files = await fsPromises.readdir(src);
        files.forEach((file)=>{
            fsPromises.copyFile(src+"/"+file,dest+"/"+file);
        })
    } else {
        throw Error ('FS operation failed');
    }
};

copy();
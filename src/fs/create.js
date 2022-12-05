import fsPromises from 'fs/promises';
import { found, __dirname } from './common.js';

const create = async () => {
  const filename=__dirname+"/files/fresh.txt";
  if ( !(await found(filename)) ) {
    await fsPromises.writeFile(filename,"I am fresh and young");
  } else {
    throw Error ('FS operation failed');
  }
};

await create();
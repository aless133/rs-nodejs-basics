import fsPromises from 'fs/promises';

const create = async () => {
  const filename="./src/fs/files/fresh.txt";
  let error = false;
  try {
    await fsPromises.access(filename);
    error = true;
  } catch (e) {
    await fsPromises.writeFile(filename,"I am fresh and young");
  }
  if (error) {
    throw Error('FS operation failed');
  }
};

await create();
import crypto from 'crypto';
import fs from 'fs/promises';

const calculateHash = async () => {
    const data = await fs.readFile('./src/hash/files/fileToCalculateHashFor.txt');
    const hex = crypto.createHash('sha256').update(data).digest('hex');
    console.log(hex)
};

await calculateHash();
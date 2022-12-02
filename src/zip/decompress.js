import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import zlib from "node:zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";

const decompress = async () => {
    const gunzip = zlib.createGunzip();
    const inp = createReadStream(__dirname + "/files/archive.gz");
    const out = createWriteStream(__dirname + "/files/fileToCompress.txt");
    pipeline(inp, gunzip, out, (err) => {
        if (err) {
            console.error("An error occurred:", err);
            process.exitCode = 1;
        }
    });
};

await decompress();

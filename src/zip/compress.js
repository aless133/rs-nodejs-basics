import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import zlib from "node:zlib";
import { createReadStream, createWriteStream } from "fs";
import { pipeline } from "stream";

const compress = async () => {
    const gzip = zlib.createGzip();
    const inp = createReadStream(__dirname + "/files/fileToCompress.txt");
    const out = createWriteStream(__dirname + "/files/archive.gz");
    pipeline(inp, gzip, out, (err) => {
        if (err) {
            console.error("An error occurred:", err);
            process.exitCode = 1;
        }
    });
};

await compress();

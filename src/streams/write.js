import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import { createWriteStream } from "fs";
import { pipeline } from "stream";

const write = async () => {
    pipeline(
        process.stdin,
        createWriteStream(__dirname + "/files/fileToWrite.txt"),
        (err) => {
            if (err) {
                console.error("Pipeline failed.", err);
            }
        }
    );
};

await write();
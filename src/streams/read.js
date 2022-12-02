import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import { createReadStream } from "fs";
import { pipeline } from "stream";

const read = async () => {
    pipeline(
        createReadStream(__dirname + "/files/fileToRead.txt"),
        process.stdout,
        (err) => {
            if (err) {
                console.error("Pipeline failed.", err);
            }
        }
    );
};

await read();

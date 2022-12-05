import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import { pipeline, Transform } from "stream";
import os from "os";

const transform = async () => {
    const reverse = new Transform({
        transform(chunk, encoding, callback) {
            let strs = chunk.toString();
            if (strs.endsWith(os.EOL)) strs = strs.slice(0, -os.EOL.length);
            strs.split(os.EOL).forEach((str) => {
                const rev = str.split("").reverse().join("");
                this.push(rev + os.EOL);
            });
            callback();
        },
    });

    pipeline(process.stdin, reverse, process.stdout, (err) => {
        if (err) {
            console.error("Pipeline failed.", err);
        }
    });
};

await transform();

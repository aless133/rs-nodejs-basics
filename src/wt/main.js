import { dirname } from "path";
import { fileURLToPath } from "url";
const __dirname = dirname(fileURLToPath(import.meta.url));

import { cpus } from "node:os";
import { Worker } from "node:worker_threads";

const performCalculations = async () => {
    const datas = [];
    const promises = [];
    for (let i = 0; i < cpus().length; i++) {
        promises.push(
            new Promise((resolve, reject) => {
                const worker = new Worker(__dirname + "/worker.js", {
                    workerData: { id: i, num: i + 10 },
                });
                worker.on("message", (data) => {
                    datas[data.id] = { status: data.status, data: data.data };
                    resolve();
                });
            })
        );
    }
    Promise.allSettled(promises).then(() => {
        console.log(datas);
    });
};

await performCalculations();

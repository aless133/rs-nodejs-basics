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
                    workerData: { num: i + 10 },
                });
                worker.on("message", (data) => {
                    datas[i] = { status: "resolved", data };
                    resolve();
                });
                worker.on("error", (err) => {
                    datas[i] = { status: "error", data: null };
                    reject();
                });
            })
        );
    }
    Promise.allSettled(promises).then(() => {
        console.log(datas);
    });
};

await performCalculations();

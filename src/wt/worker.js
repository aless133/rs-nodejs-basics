import { workerData, parentPort } from "node:worker_threads";

const nthFibonacci = (n) =>
    n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

//uncomment for test error
// if (workerData.id % 2)
// console.log(q);

const sendResult = () => {
    parentPort.postMessage(nthFibonacci(workerData.num));
};

sendResult();

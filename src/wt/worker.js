import { workerData, parentPort } from "node:worker_threads";

const nthFibonacci = (n) =>
    n < 2 ? n : nthFibonacci(n - 1) + nthFibonacci(n - 2);

const sendResult = () => {
    let error = false;
    //uncomment for test
    // error = workerData.id % 2 === 0;

    const result = error
        ? { status: "error", data: null }
        : { status: "resolved", data: nthFibonacci(workerData.num) };
    result.id = workerData.id;

    parentPort.postMessage(result);
};

sendResult();

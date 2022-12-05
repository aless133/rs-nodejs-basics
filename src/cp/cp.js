import { spawn } from "node:child_process";
import { dirname } from 'path';
import { fileURLToPath } from 'url';
export const __dirname = dirname(fileURLToPath(import.meta.url));

const spawnChildProcess = async (args) => {
    spawn('node',[__dirname+'/files/script.js', ...args], {stdio: 'inherit'});
};

spawnChildProcess(process.argv.slice(2));
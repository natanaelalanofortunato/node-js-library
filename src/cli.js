import chalk from 'chalk';
import fs from 'fs';
import getFile from './index.js';

const path = process.argv;

function printList(result) {
    console.log(chalk.yellow('Links list'), result);
}

async function textProcess(arg) {
    const path = arg[2];

    if(fs.lstatSync(path).isFile()) {
        const result = await getFile(path);
        printList(result);
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (fileName) => {
            const list = await getFile(`${path}/${fileName}`);
            printList(list);
        })
    }
}
 
textProcess(path);
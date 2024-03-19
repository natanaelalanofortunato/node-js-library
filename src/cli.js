import chalk from 'chalk';
import fs from 'fs';
import getFile from './index.js';

const path = process.argv;

function printList(result, identifier = '') {
    console.log(
        chalk.white.bgBlue('Links list'), 
        chalk.white.bgMagenta(identifier),
        result);
}

async function textProcess(arg) {
    const path = arg[2];

    try {
        fs.lstatSync(path);
    } catch (err) {
        if(err.code === 'ENOENT') {
            console.log(chalk.red('File or directory dont exist.'));
            return;
        }
    }

    if(fs.lstatSync(path).isFile()) {
        const result = await getFile(path);
        printList(result);
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (fileName) => {
            const list = await getFile(`${path}/${fileName}`);
            printList(list, fileName);
        })
    }
}
 
textProcess(path);
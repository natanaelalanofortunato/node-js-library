import chalk from 'chalk';
import fs from 'fs';
import getFile from './index.js';
import validatedList from './http-validate.js';

const path = process.argv;

async function printList(validate, result, identifier = '') {
    console.log(chalk.white.blueBright('Validated? ') 
    + chalk.white.bgBlue(validate));

    if (validate) {
        console.log(
            chalk.white.blueBright('Validated list:'), 
            chalk.white.bgBlueBright(identifier),
            await validatedList(result));
    } else {

    console.log(
        chalk.white.bgBlue('Links list'), 
        chalk.white.bgMagenta(identifier),
        result);
    }
}

async function textProcess(args) {
    const path = args[2];
    const validate = args[3] === '--validate';

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
        printList(validate, result);
    } else if (fs.lstatSync(path).isDirectory()) {
        const files = await fs.promises.readdir(path);
        files.forEach(async (fileName) => {
            const list = await getFile(`${path}/${fileName}`);
            printList(validate, list, fileName);
        })
    }
}
 
textProcess(path);
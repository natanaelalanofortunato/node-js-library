import chalk from 'chalk';
import fs from 'fs';

function errorDeal (erro) {
    console.log(chalk.blue(erro));
    throw new Error(chalk.red(erro.code, 'Theres no file in this directory.'));
}

/* Async - Await */
async function getFile(filePath) {
    try {
        const encode = 'utf-8';
        const text = await fs.promises
        .readFile(filePath, encode)
        extractLinks(text);
    }   catch (erro) {
        errorDeal(erro);
    }
}

/* Some times chalk cant return the correct value while using on some cases */

function extractLinks (value) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const captures = [...value.matchAll(regex)];
    const results = captures.map(capture => ({[capture[1]]: capture[2]}));
    console.log(results);
}

/* Promises with then
function getFile(filePath) {
    const encode = 'utf-8';
    fs.promises
    .readFile(filePath, encode)
    .then((text) => console.log(chalk.green(text)))
    .catch((erro) => errorDeal(erro))
}
*/

getFile('./arquivos/texto.md');
import chalk from 'chalk';
import fs from 'fs';

function errorDeal (erro) {
    console.log(chalk.blue(erro));
    throw new Error(chalk.red(erro.code, 'Theres no file in this directory.'));
}

async function getFile(filePath) {
    try {
        const encode = 'utf-8';
        const text = await fs.promises.readFile(filePath, encode)
        return extractLinks(text);
    }   catch (erro) {
        errorDeal(erro);
    }
}

/* Some times chalk cant return the correct data. So if your console is not displaying the value it should, try without it */
function extractLinks (value) {
    const regex = /\[([^[\]]*?)\]\((https?:\/\/[^\s?#.].[^\s]*)\)/gm;
    const captures = [...value.matchAll(regex)];
    const results = captures.map(capture => ({[capture[1]]: capture[2]}));
    return results.length !== 0 ? results : 'There are no links in the file.';
}

getFile('./arquivos/texto.md');

export default getFile;
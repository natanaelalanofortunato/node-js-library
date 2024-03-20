import chalk from 'chalk';

function extractLinks (arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}

function errValidate (erro) {
    console.log(chalk.red('Something went wrong: '), erro.cause.code)
    console.log(chalk.red('Hostname: '), erro.cause.hostname)
    return 'Unable to process';
}

async function chackStatus (URLs) {
    const arrStatus = await Promise
    .all(
        URLs.map(async (url) => {
            try {
                const response = await fetch(url)
                return response.status;
            } catch (erro) {
                return errValidate(erro);
            }
        })
    )
    return arrStatus;
}

export default async function validatedList (linksList) {
    const links = extractLinks(linksList);
    const status = await chackStatus(links);

    return linksList.map((obj, index, code) => ({
        ...obj,
        status: status[index]
    }));
}

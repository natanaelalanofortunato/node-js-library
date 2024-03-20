function extractLinks (arrLinks) {
    return arrLinks.map((objetoLink) => Object.values(objetoLink).join());
}

async function chackStatus (URLs) {
    const arrStatus = await Promise
    .all(
        URLs.map(async (url) => {
            const response = await fetch(url)
            return response.status;
        })
    )
    return arrStatus;
} 

export default async function validatedList (listaDeLinks) {
    const links = extractLinks(listaDeLinks);
    const status = await chackStatus(links);
    console.log(status);
    return status;
}

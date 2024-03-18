# Biblioteca de Busca de Arquivos com Regex

Esta biblioteca foi desenvolvida para buscar em arquivos e, através de expressões regulares, retornar as informações solicitadas. Por padrão, a biblioteca foca na busca de hyperlinks, mas pode ser ajustada para qualquer padrão desejado utilizando expressões regulares.

## Requisitos

- Node.js versão 18.7.0

## Instalação

Para utilizar esta biblioteca, primeiro, certifique-se de ter a versão correta do Node.js instalada. Após confirmar, clone o repositório para sua máquina local.

## Guia de Uso no Terminal

Para executar a busca, navegue até o diretório do projeto no terminal e execute o seguinte comando: `node src/cli.js files`

Onde `files` deve ser substituído pelo caminho dos arquivos nos quais a busca será realizada. A ferramenta processará os arquivos e retornará todas as correspondências encontradas com base na expressão regular definida.

## Configuração

Por padrão, a biblioteca busca por hyperlinks. No entanto, você pode customizar a expressão regular para atender às suas necessidades específicas. Para isso, edite o arquivo de configuração da biblioteca conforme necessário.

## Versão

- v1.0.0

Para mais informações e atualizações, visite o repositório oficial da biblioteca

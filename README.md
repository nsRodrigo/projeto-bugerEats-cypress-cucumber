# projeto-bugerEats-cypress-cucumber
Projeto na Uber Eats com cypress e cucumber

Instalar o cypress:
1. No terminal executar o comando 'npm i -D cypress'

Iniciar o cypress:
1. Executar o comando 'npx cypress open' 
2. Clicar em E2E Testing
3. Clicar em 'continuar' em Configuration files

Criar arquivo package.json
1. Executar o comando 'npm init -y'

Intalar cucumber-preprocessor -> https://github.com/badeball/cypress-cucumber-preprocessor
1. Executar o comando 'npm i -D @badeball/cypress-cucumber-preprocessor'

Instalar esbuild-preprocessor -> https://github.com/bahmutov/cypress-esbuild-preprocessor
1. Executar o comando 'npm i -D @bahmutov/cypress-esbuild-preprocessor esbuild'
2. Adicionar no arquivo cypress.config.js

const createBundler = require('@bahmutov/cypress-esbuild-preprocessor')
module.exports = (on, config) => {
  on('file:preprocessor', createBundler())
}

Intalar plugin real-events -> https://github.com/dmtrKovalenko/cypress-real-events
1. Executar comando 'npm i -D cypress-real-events'
2. Adiconar no arquivo E2E.js o import:

import "cypress-real-events"

Instalar o json-formatter -> https://github.com/cucumber/json-formatter
1. Efetuar o download do arquivo de acordo com a plataforma 'https://github.com/cucumber/json-formatter/releases/tag/v19.0.0'
2. Renomear o arquivo para 'cucumber-json-formatter'
3. Adicionar em uma pasta com Path ou incluir nas variavéis de ambiente
4. Verificar você pode executar com o comando 'cucumber-json-formatter --help'

Instalar plugin para teste de API
1. Executar o comando 'npm i -D cypress-plugin-api'
2. Adicionar no arquivo E2E.js o import:

import 'cypress-plugin-api';

Instalar plugin cucumber-xpath
1. Executar o comando 'npm i -D @cypress/xpath'
2. Adicionar no arquivo E2E.js o import:

require('@cypress/xpath');

Instalar multiple-cucumber-html-reporter
1. Executar o comando 'npm i -D @types/multiple-cucumber-html-reporter'
2. Criar cucumber-html-report.js
3. 
const report = require("multiple-cucumber-html-reporter");

report.generate({

    jsonDir: "jsonlogs",
    reportPath: "./reports/cucumber-htmlreport.html",
    metadata: {
        browser: {
            name: "chrome",
            version: "XX",
        },
        device: "Local test machine",
        platform: {
            name: "Windows",
            version: "11",
        },
    },
});

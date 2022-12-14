<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="200" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

  <p align="center">Um framework <a href="http://nodejs.org" target="_blank">Node.js</a> progressivo para construção de aplicações server-side escaláveis e eficientes.</p>
    <p align="center">
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/v/@nestjs/core.svg" alt="NPM Version" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/l/@nestjs/core.svg" alt="Package License" /></a>
<a href="https://www.npmjs.com/~nestjscore" target="_blank"><img src="https://img.shields.io/npm/dm/@nestjs/common.svg" alt="NPM Downloads" /></a>
<a href="https://circleci.com/gh/nestjs/nest" target="_blank"><img src="https://img.shields.io/circleci/build/github/nestjs/nest/master" alt="CircleCI" /></a>
<a href="https://coveralls.io/github/nestjs/nest?branch=master" target="_blank"><img src="https://coveralls.io/repos/github/nestjs/nest/badge.svg?branch=master#9" alt="Coverage" /></a>
<a href="https://discord.gg/G7Qnnhy" target="_blank"><img src="https://img.shields.io/badge/discord-online-brightgreen.svg" alt="Discord"/></a>
<a href="https://opencollective.com/nest#backer" target="_blank"><img src="https://opencollective.com/nest/backers/badge.svg" alt="Backers on Open Collective" /></a>
<a href="https://opencollective.com/nest#sponsor" target="_blank"><img src="https://opencollective.com/nest/sponsors/badge.svg" alt="Sponsors on Open Collective" /></a>
  <a href="https://paypal.me/kamilmysliwiec" target="_blank"><img src="https://img.shields.io/badge/Donate-PayPal-ff3f59.svg"/></a>
    <a href="https://opencollective.com/nest#sponsor"  target="_blank"><img src="https://img.shields.io/badge/Support%20us-Open%20Collective-41B883.svg" alt="Support us"></a>
  <a href="https://twitter.com/nestframework" target="_blank"><img src="https://img.shields.io/twitter/follow/nestframework.svg?style=social&label=Follow"></a>
</p>
  <!--[![Backers on Open Collective](https://opencollective.com/nest/backers/badge.svg)](https://opencollective.com/nest#backer)
  [![Sponsors on Open Collective](https://opencollective.com/nest/sponsors/badge.svg)](https://opencollective.com/nest#sponsor)-->

## Descrição

Desafio técnico envolvendo a criação de APIs Restful em Nest.js. <br />
Feito por [Paulo Nobre Junior](https://github.com/juniorcodexx)

## Instalação

Certifique-se de possuir uma instalação de um banco MySQL operando; <br />
Caminho para configuração das credenciais do banco: <br />

```bash
src/database/database.providers.ts
```

Clone o repositório e execute: 
```bash
$ npm install
```

## Iniciando a aplicação

```bash
# desenvolvimento
$ npm run start

# modo watch
$ npm run start:dev

# produção
$ npm run start:prod
```

## APIs

- Veículos 

[GET]    /veiculo 		- Lista todos os veículos <br />
[GET] 	 /veiculo/:id 	- Busca um Veículo por id <br />
[POST] 	 /veiculo 		- Cria um Veículo <br />
[PATCH]  /veiculo/:id 	- Edita um Veículo <br />
[DELETE] /veiculo/:id	- Deleta um Veículo (e seu estoque) <br /> <br />

- Categorias

[GET] 	 /categorias 		- Lista todas as Categorias <br />
[GET] 	 /categorias/:id 	- Busca uma Categoria por id <br />
[POST] 	 /categorias 		- Cria uma Categoria <br />
[PATCH]  /categorias/:id 	- Edita uma Categoria <br />
[DELETE] /categorias/:id	- Deleta uma Categoria (deve atualizar o veiculo setando idCategoria como NULL para veiculos que utilizam essa categoria) <br />
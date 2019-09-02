## Integração Contínua (Travis - Docker - Docker-Compose)

No arquivo .travis.yml é necessário configurar o docker e o docker-compose.

* Passo 1: Defina os serviços utilizados, no caso o docker:

```
services:
  - docker
```

* Passo 2: Defina a versão do docker-compose a ser instalada:

```
env:
  - DOCKER_COMPOSE_VERSION=1.15.0
```

* Passo 3: Instale o docker-compose na integração contínua:

```
before_install:
  - sudo rm /usr/local/bin/docker-compose
  - curl -L https://github.com/docker/compose/releases/download/${DOCKER_COMPOSE_VERSION}/docker-compose-`uname -s`-`uname -m` > docker-compose
  - chmod +x docker-compose
  - sudo mv docker-compose /usr/local/bin
```

* Passo 4: Crie os containers e execute os scripts necessários de build/testes:

```
script:
	- docker-compose up --build -d
		...
```
## Deploy (Heroku)

Após ter feito as configurações de integração contínua, caso deseje utilizar o heroku para deploy, é necessário, primeiramente, criar uma conta no heroku. Com isso feito é preciso criar uma aplicação.

* Passo 1: Na dashboard do heroku selecione a opção "New" e depois "Create new App":

![Image](https://raw.githubusercontent.com/wiki/fga-gpp-mds/00-Disciplina/img/automacao/heroku-01.png)

* Passo 2: Digite o nome do seu app e selecione a região, por default será United States

![Image](https://raw.githubusercontent.com/wiki/fga-gpp-mds/00-Disciplina/img/automacao/heroku-02.png)

* Passo 3: Verifique qual a api-key do usuário, selecione "Account Settings" e clique em "Reveal"

![Image](https://raw.githubusercontent.com/wiki/fga-gpp-mds/00-Disciplina/img/automacao/heroku-03.png)

* Passo 4: Agora no travis.ci, entre no local onde a integração contínua está configurada e selecione a opção "More Options" e depois "Settings".

![Image](https://raw.githubusercontent.com/wiki/fga-gpp-mds/00-Disciplina/img/automacao/travis-01.png)

* Passo 5: Adicione a api-key do heroku como uma variável de ambiente, "Environment Variables":

![Image](https://raw.githubusercontent.com/wiki/fga-gpp-mds/00-Disciplina/img/automacao/travis-02.png)

* Passo 6: Configure o arquivo .travis.yml com deploy, onde o provider é o heroku que já é integrado com o travis, a api-key é a variável de ambiente do usuário criador do app, o app é aquele criado no heroku e a branch a ser executada o deploy, normalmente a master. Exemplo:

```
deploy:
  provider: heroku
  api_key: $SECRET_USER_KEY
  app: exemplo-gpp-mds
  on: master
```

Observações:

* Existem particularidades de linguagens específicas, e essas nuâncias não foram abordadas nesse documento.

### Gulp

O Gulp é uma ferramenta de automação de tarefas feita em JavaScript e rodando em cima do Node.js. Como o core da execução é o Node, precisamos começar nossos trabalhos definindo o arquivo de vai gerenciar os módulos gulp que você utilizará no seu projeto(Caelum).

#### Sincronização com o *Browser*

Os arquivos estáticos mudam constantemente e existe uma dificuldade de atualização dos arquivos no *browser*, simplesmente para modificações de arquivos html, js e css é necessário um dar *reload* na página utilizada. Normalmente, os arquivos se mantém em cache e é comum que estes continuem na versão anterior. O gulp juntamente com o browser-sync oferece uma solução para isso. Onde arquivos ou pastas são observadas e quando são atualizadas a página em questão é recarregada. Portanto, é mais simples para em ambiente de desenvolvimento, principalmente, com a utilização de frameworks web como o rails e o django. Não se preocupando com atualização dos arquivos estáticos no navegador. Abaixo existe um exemplo de como configurar arquivos a serem observados e auto-sincronizar com o gulp.

**gulpfile.js**

```
'use strict';

// Indica as dependências necessárias
var gulp = require('gulp');
var browserSync = require('browser-sync').create();

// Define o diretório a ser utilizado
var directoryjs = './*.js'

// Por padrão, o gulp executa um server utilizando a porta 3000
// Abaixo existe a definição das configurações do servidor, sendo que  o proxy será incluido no localhost:3000
// Onde a porta 8000 é o padrão do django
gulp.task('browserSync', function() {
  browserSync.init({
    open: false,
    notify: false,
    proxy: 'localhost:8000'
  })
});

// Define os arquivos a serem observados e caso haja modificação nesses arquivos,
// o browser será recarregado
gulp.task('watch', function() {
  gulp.watch(directoryjs, browserSync.reload);
});

// É a função principal, como a main em c, onde é executado o restante das funções
gulp.task('default',['browserSync', 'watch']);

```

#### Dependências necessárias

As dependências necessárias para o gulp é o node.js que é um interpretador de código javascript e o npm que é um gerenciador de pacotes do node.js.

Como instalar o node.js:

```apt-get install -y nodejs```


Como instalar o npm:

```apt-get install npm -y```

PS: Algumas dependências internas do gulp necessitam de uma versão do node.js específica.

Após a instalação das dependêncais acima é necessário instalar o gulp e o browser-sync, com os seguintes comandos:

```npm install -g gulp-cli gulp```

```npm install browser-sync```


É mais recomendado utilizar um arquivo de dependências node: O packge.json.  Com o arquivo configurado basta utilizar o seguinte comando comando:

```npm install```

#### Utilizando Django com  o Gulp

Para utilizar o servidor do django integrado com o gulp para sincronizar arquivos estáticos ao *browser* é simples basta executar os servidores juntamente, mapeando o proxy do browser-sync com o server do django(pode ser visto acima). Utilize o seguinte comando:

```
python3 aplication/manage.py runserver & .

npm run gulp
```

Note que é possível acessar o localhost:8000, no entanto a sincronização só é feita no endereço localhost:3000.

#### Utilizando Gulp e Django no docker-compose

Para utilizar o gulp e django no docker-compose é necessario mapear as portas 8000:8000 e a 3000:3000. Além disso é preciso adiconar os seguintes comandos no docker-compose.yml para executar os servidores:

```
python3 medical_prescription/manage.py runserver 0.0.0.0:8000 & .

./node_modules/.bin/gulp default
```

## Referências

> <p align="justify"> SOUZA, Leonardo. Bye bye Grunt.js, hello Gulp.js!. Disponível em:< http://blog.caelum.com.br/bye-bye-grunt-js-hello-gulp-js/ > Acesso em: 29 de Novembro de 2017 </p>

> <p align="justify"> TRAVIS. Heroku Deployment. Disponível em :< https://docs.travis-ci.com/user/deployment/heroku/ >. Acesso em: 29 de Novembro de 2017 </p>

> <p align="justify"> TRAVIS. Using Docker in Builds. Disponível em : < https://docs.travis-ci.com/user/docker/ > Acesso em: 29 de Novembro de 2017  </p>

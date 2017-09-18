# Delibera APP

O delibera app permite utilizar o plugin do delibera pelo celular. Ele esta em desenvolvimento, nós utilizamos o wp-api, o ionic, o cordova, nodejs e muitas outras ferramentas para gerar este app mobile.

## Organização das pastas

O codigo fonte esta na pasta src. Mas nem todos os arquivos são relevantes para o projeto, dado que alguns são gerados a cada compilação. Sendo assim apenas os arquivos fonte com extensão .ts, .scss e .html são relevantes para desenvolvedores que queiram realizar modificações neste projeto. Marcamos eles com asterisco na arvore abaixo.


```bash
src
├── app
│   ├── app.component.js
│   ├── app.component.js.map
│   ├── app.component.ts*
│   ├── app.html*
│   ├── app.module.js
│   ├── app.module.js.map
│   ├── app.module.ts*
│   ├── app.scss*
│   ├── main.js
│   ├── main.js.map
│   └── main.ts*
├── assets
│   ├── icon
│   │   └── favicon.ico
│   └── img
│       ├── como-funciona-site.png
│       ├── icon.png
│       ├── logo-site-menu.png
│       └── logo_white.png
├── index.html
├── manifest.json
├── pages
│   ├── about
│   │   ├── about.html*
│   │   ├── about.js
│   │   ├── about.js.map
│   │   ├── about.scss*
│   │   └── about.ts*
│   ├── comments
│   │   ├── addcomment.html*
│   │   ├── addcomment.js
│   │   ├── addcomment.js.map
│   │   ├── addcomment.ts*
│   │   ├── api-doc.md
│   │   ├── comments.html*
│   │   ├── comments.js
│   │   ├── comments.js.map
│   │   └── comments.ts*
│   ├── contact
│   │   ├── contact.html*
│   │   ├── contact.js
│   │   ├── contact.js.map
│   │   ├── contact.scss*
│   │   └── contact.ts*
│   ├── home
│   │   ├── home.html*
│   │   ├── home.js
│   │   ├── home.js.map
│   │   ├── home.scss*
│   │   └── home.ts*
│   ├── pautas
│   │   ├── addpauta.html*
│   │   ├── addpauta.js
│   │   ├── addpauta.js.map
│   │   └── addpauta.ts*
│   ├── tabs
│   │   ├── tabs.html*
│   │   ├── tabs.js
│   │   ├── tabs.js.map
│   │   └── tabs.ts*
│   └── user
├── providers
│   └── remote-service
│       ├── remote-service.js
│       ├── remote-service.js.map
│       └── remote-service.ts*
├── service-worker.js
└── theme
    └── variables.scss*
```

## Como usar este projeto

Inicialmente você vai precisar do android studio instalado, ou do android sdk, além disso se quiser criar pacotes para iOS você precisa de uma maquina com o Mac OS e o xcode instalado.

Instale o nodejs, ele vem com o npm (node package manager) que vai ser necessário para gerênciar os pacotes do projeto. Nós usamos o nvm (node version manager para gerenciar as versões do nodejs) Note que usamos a partir da versão 7 no nodejs.

O nvm é facil de instalar. Entre na página dele e pegue o comando.

Liste as versões existentes. Em seguida instale uma versão do nodejs. E por fim passe a usar a versão instalada. Durante todo o processo o nvm da dicas de configuração que permitem definir as variaveis de ambiente.

```bash
$ nvm ls-remote
$ nvm install 7.0.0
$ nvm use 7.0.0
```

Você também vai precisar do ionic e do cordova. E precisa instalar todos os pacotes do projeto em seu ambiente.

```bash
$ sudo npm install -g ionic cordova
$ npm install
```


Também é necessário gerar os icones do projeto e as telas de splash screen nos tamanhos especificos de todas as telas. Se quiser apenas para android coloque android se quiser apenas splash screen --splash, veja mais infos no help do ionic.

```bash
$ ionic cordova resources
```


Entre na pasta do projeto e faça

```bash
$ ionic cordova platform add android
$ ionic cordova run android
```

Para gerar o projeto para ios substitua android por ios.

Ao final da compilação será informado onde esta o app gerado, no caso do android .apk, para gerar um build assinado é necessario seguir algumas etapas, para o android é bem simples e para o ios pode ser mais complicado. 

http://ionicframework.com/docs/v1/guide/publishing.html

Para saber mais sobre os componentes permitidos no ionic veja o seguinte link.

https://ionicframework.com/docs/components/

Se tiverem mais dúvidas favor entrar em contato conosco, assim podemos melhorar essa documentação. Ou abra uma issue informando por meio dos labels do que se trata tal issue.
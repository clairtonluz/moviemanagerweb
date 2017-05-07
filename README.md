# moviemanagerweb

para executar o projeto é preciso

+ Ter o NodeJS instalado
+ Executar o comando abaixo para executar o projeto:

```shell
npm start
```
Por padrão o projeto é executado na porta **8000** mas você pode alterar isso no arquivo **package.json** no script **start**

Primeiro acesso
---------------
usuário e senha padrão definida no backend

```
username:admin
password:admind
ou
username:clairton
password:admin
```

Alterando endereço do backend
-----------------------------

Por padrão o endereço do backend é `http://localhost:8080` para alterar esse endereço você pode editar isso no final do arquivo `app/app.js`

```js
.constant('config', {
        api: 'http://localhost:8080/api'
    });
```
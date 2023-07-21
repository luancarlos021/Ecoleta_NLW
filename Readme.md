<h1 align="center">
    <img src="public/assets/logo.svg">
</h1>

:rocket: Projeto desenvolvido na **Next Week Level #1** da RocketSeat

Professor: [Mayk Brito](https://github.com/maykbrito)


## :computer: Projeto

O Projeto **Ecoleta** tem como objetivo a criação de um marketplace, onde entidades de coleta de resíduos podem se cadastrar e serem achadas mais facilmente, facilitando assim a vida das pessoas e cuidando do meio ambiente.

## :rocket: Tecnologias utilizadas

O projeto foi desenvolvido utilizando as seguintes tecnologias:

- [JavaScript](https://www.javascript.com/)
- [HTML](https://developer.mozilla.org/pt-BR/docs/Web/HTML)
- [CSS](https://developer.mozilla.org/pt-BR/docs/Web/CSS)
- [Express](https://expressjs.com/pt-br/)
- [Nunjucks](https://mozilla.github.io/nunjucks/)
- [Nodejs](https://nodejs.org/en/)
- [Sqlite](https://www.sqlite.org/index.html)
- [Docker](https://www.docker.com/)
- [Nginx](https://www.nginx.com/)
----------
## Para baixar e iniciar o projeto

```bash

    # Clone o repositório
    $ git clone https://github.com/luancarlos021/Ecoleta_NLW.git

    # Entre no diretório
    $ cd Ecoleta_NLW

    # Execute o npm para instalar as dependências
    $ npm install
    
    # Inicie o projeto
    $ npm start
```
Quando o projeto é iniciado, é realizar a configuração do banco de dados(db.js) e já é criado a tabela usada no projeto.
### Agora é só acessar [localhost:3000](http://localhost:3000)
----------
## Iniciando o projeto com o docker-compose

```bash
    # Clone o repositório
    $ git clone https://github.com/luancarlos021/Ecoleta_NLW.git

    # Entre no diretório
    $ cd Ecoleta_NLW

    # Executar o docker-compose
    $ docker-compose up -d --build
```
### Agora é só acessar [localhost:8000](http://localhost:8000)
#
No [docker-compose.yml](https://github.com/luancarlos021/Ecoleta_NLW/blob/master/docker-compose.yml) é possível verificar a existência de um serviço chamado loadbalancer, ele irá fazer o balanceamento de carga, caso existe vários containers. Para escalar a aplicação, é só rodar o seguinte comando:
```bash
    # Comando para escalar a aplicação. Por exemplo para 2 containers
    $ docker-compose up --scale app=2 -d 
```

Desenvolvido por [Luan Carlos](https://linkedin.com/in/luan-carlos) | Copyright © [Rocketseat](https://rocketseat.com.br/)

# Baixando a imagem do node com a versão alpine
FROM node:lts-alpine

# Criando a pasta onde o app vai ficar dentro do container
WORKDIR /usr/app

# Copidando tudo que estiver na pasta local do projeto que seja package*.json para a pasta criada acima dentro do container.
COPY package*.json ./

# Executa o npm install para instalar as dependências do projeto e criar a pasta node_módules dentro do container.
RUN npm install

# Copiando tudo que está na pasta local do projeto(onde está o arquivo Dockerfile) para a pasta /usr/app criada dentro do container.
# Para ignorar a pasta node_modules que já existe na pasta local, criamos um arquivo chamado .dockerignore
COPY . .

## Expondo a porta onde o container ficará ouvindo
EXPOSE 3000

## Executando o comando npm start para inicar o script no package.json
CMD npm start
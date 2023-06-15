# Baixando a imagem do node com a versão alpine
FROM node:lts-alpine

RUN apk add dumb-init

# Determinando variável de ambiente
ENV NODE_ENV production

# Criando a pasta onde o app vai ficar dentro do container
WORKDIR /usr/app

# Copiando tudo que está na pasta local do projeto(onde está o arquivo Dockerfile) para a pasta /usr/app criada dentro do container.
COPY --chown=node:node . /usr/app

# Executa o npm install para instalar as dependências do projeto e criar a pasta node_módules dentro do container.
RUN npm install
RUN npm ci --omit=dev

USER node

CMD ["dumb-init", "node", "./src/server.js"]
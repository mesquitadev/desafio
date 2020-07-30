FROM node:latest

RUN apt update && apt-get upgrade -y
RUN npm install -g vue-cli

WORKDIR /app

RUN npm i && quasar build

RUN npm install -g lite-server 
RUN ls
RUN rm -rf arquivos

EXPOSE 3000

ENTRYPOINT ["lite-server"]

FROM node:latest
RUN npm install -g yarn
RUN mkdir -p /home/node/app/node_modules && chown -R node:node /home/node/app

WORKDIR /home/node/app
COPY package*.json ./
USER node

RUN yarn install

COPY --chown=node:node . .

EXPOSE 3000

ADD --chown=node:node https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && sh -c 'yarn start:dev'

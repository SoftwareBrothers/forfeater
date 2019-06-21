FROM node:latest
RUN npm install -g yarn
RUN mkdir -p /home/node/app/node_modules

WORKDIR /home/node/app
COPY package.json /home/node/app/
COPY yarn.lock /home/node/app/

RUN yarn install

COPY . .

EXPOSE 3000

ADD --chown=node:node https://github.com/ufoscout/docker-compose-wait/releases/download/2.2.1/wait /wait
RUN chmod +x /wait

CMD /wait && sh -c 'yarn start:dev'

FROM node:10.8.0-alpine
EXPOSE 3000 9229
COPY . /home/app
WORKDIR /home/app

RUN apk add --no-cache --virtual .build-deps gcc g++ python \
 && apk add make \
 && npm install --production --silent \
 && apk del .build-deps

CMD ./docker/start.sh

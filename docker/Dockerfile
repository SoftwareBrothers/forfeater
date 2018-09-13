FROM node:10.8.0-alpine
EXPOSE 3000 9229
COPY . /home/app
WORKDIR /home/app

RUN apk add --no-cache --virtual .gyp \
        python \
        make \
        g++ \
    && npm install \
    && apk del .gyp

CMD ./start.sh

EXPOSE 3000

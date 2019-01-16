FROM node:10.8.0-alpine
EXPOSE 3000 9229
COPY . /home/app
WORKDIR /home/app

RUN apk --no-cache --virtual build-dependencies add \
   python \
   make \
   g++ \
   && npm install \
   && apk del build-dependencies

CMD ./docker/start.sh

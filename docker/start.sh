#!/bin/sh

npm install

if [ "$NODE_ENV" == "production" ] ; then
  npm start
else
  node_modules/.bin/nodemon DEBUG=forfeater:* npm start
fi

node_modules/.bin/apidoc -i routes/ -o public/doc/;
#!/bin/sh

npm run build

if [ "$NODE_ENV" == "production" ] ; then
  npm start
else
  npm start
  # nodemon DEBUG=forfeater:* npm start
fi

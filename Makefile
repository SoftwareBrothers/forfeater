run-database:
	docker run --name forfeater_db --rm -it -p 5432:5432 postgres:10

run-test:
	npm run test

run-server:
	nodemon DEBUG=forfeater:* npm start

db-migrate:
	node_modules/.bin/sequelize db:migrate

db-seeds:
	node_modules/.bin/sequelize db:seed:all

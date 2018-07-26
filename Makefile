run-database:
	docker run --rm -it -p 5432:5432 postgres:10

run-test:
	npm run test

run-server:
	nodemon DEBUG=forfeater:* npm start
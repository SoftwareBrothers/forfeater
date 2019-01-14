include .env

$(eval export $(shell sed -ne 's/ *#.*$//; /./ s/=.*$$// p' .env))

run-database:
	docker run --name forfeater_db -it -p 5432:5432 postgres:10

run-test:
	npm run test

run-server:
	nodemon DEBUG=forfeater:* npm start

db-migrate:
	node_modules/.bin/sequelize db:migrate --url ${DATABASE_URL}

db-seeds:
	node_modules/.bin/sequelize db:seed:all --url ${DATABASE_URL}

api-doc:
	@if ! [ "`node -v`"  > /dev/null ]; then\
		echo "Nodejs executable not found! Apidoc generation is skipped!"; \
	else\
		node_modules/apidoc/bin/apidoc -i routes/ -o public/doc/; \
	fi

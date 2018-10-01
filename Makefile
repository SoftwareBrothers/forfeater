run-database:
	docker run --name forfeater_db -e POSTGRES_PASSWORD=mysecretpassword -it -p 5432:5432 postgres:10

db-start:
	$(MAKE) db-create
	$(MAKE) db-migrate
	$(MAKE) db-seeds

db-restart:
	$(MAKE) db-drop
	$(MAKE) db-start

run-test:
	npm run test

run-server:
	nodemon DEBUG=forfeater:* npm start

db-migrate:
	node_modules/.bin/sequelize db:migrate

db-seeds:
	node_modules/.bin/sequelize db:seed:all

db-drop:
	node_modules/.bin/sequelize db:drop

db-create:
	node_modules/.bin/sequelize db:create

api-doc:
	@if ! [ "`node -v`"  > /dev/null ]; then\
		echo "Nodejs executable not found! Apidoc generation is skipped!"; \
	else\
		node_modules/apidoc/bin/apidoc -i routes/ -o public/doc/; \
	fi

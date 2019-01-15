include .env

$(eval export $(shell sed -ne 's/ *#.*$//; /./ s/=.*$$// p' .env))

migrate:
	docker exec -t ${APP_NAME}-app node_modules/.bin/sequelize db:migrate --url ${DATABASE_URL}

seeds:
	docker exec -t ${APP_NAME}-app node_modules/.bin/sequelize db:seed:all --url ${DATABASE_URL}
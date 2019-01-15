include .env

$(eval export $(shell sed -ne 's/ *#.*$//; /./ s/=.*$$// p' .env))

migrate:
	node_modules/.bin/sequelize db:migrate --url ${DATABASE_URL}

seeds:
	node_modules/.bin/sequelize db:seed:all --url ${DATABASE_URL}
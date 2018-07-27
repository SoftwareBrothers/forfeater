require('dotenv').config();

const config = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME || 'forfeaterjs',
  username: process.env.DB_USER || 'forfeater',
  password: process.env.DB_PASS || 'secret',
  migrationStorageTableName: 'migrations'
}

module.exports = {
  'production': config,
  'development': config
}
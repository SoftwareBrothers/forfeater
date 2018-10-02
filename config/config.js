require('dotenv').config();

const config = {
  dialect: 'postgres',
  host: process.env.DB_HOST || 'localhost',
  port: process.env.DB_PORT || 5432,
  database: process.env.DB_NAME,
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  migrationStorageTableName: 'migrations',
  timezone: '+02:00'
}

module.exports = {
  'production': config,
  'development': config
}
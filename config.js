module.exports = {
  sql: {
    database: 'forfeater_js',
    username: 'postgres',
    password: '',
    dialect: 'postgres', // PostgreSQL, MySQL, MariaDB, SQLite and MSSQL See more: http://docs.sequelizejs.com/en/latest/
    logging: true,
    timezone: '+05:30',
  },
  mongo: {
    uri: 'mongodb://gloryque:intranet@192.168.0.200:27017/gloryque_quarc'
  },
  seedDB:false,
  seedMongoDB:false,
  seedDBForce:true,
  db:'postgres' // mongo,sql if you want to use any SQL change dialect above in sql config
}
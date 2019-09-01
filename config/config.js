'use strict';
module.exports = {
  development: {
    username: 'zhang_dev',
    password: 'Zh321156!',
    database: 'miao',
    host: '127.0,0,1',
    dialect: 'mysql',
  },
  test: {
    username: 'root',
    password: null,
    database: 'miao_test',
    host: '127.0,0,1',
    dialect: 'mysql',
  },
  production: {
    username: 'root',
    password: null,
    database: 'database_production',
    host: '127.0,0,1',
    dialect: 'mysql',
  },
};

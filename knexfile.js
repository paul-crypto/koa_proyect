const path = require('path');
const BASE_PATH = path.join(__dirname, 'src', 'server', 'db');
// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://postgres:123456@localhost:5432/basededatos',
    migrations: {
      directory: path.join(BASE_PATH, 'migrations')
    },
    seeds: {
      directory: path.join(BASE_PATH, 'seeds')
    }
  }

};

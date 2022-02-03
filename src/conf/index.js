const dotenv = require('dotenv');
const consola = require('consola');

const config = dotenv.config();

if (config.error) {
  consola.error(config.error);
  process.exit(0);
}

consola.info('Configuration file read...');

module.exports = {
  MONGO_URI: process.env.MONGO_URI
};

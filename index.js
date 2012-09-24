var fs = require('fs');

exports = module.exports = process.env.EXPRESS_COV
  ? require('./lib-cov/cheerio')
  : require('./lib/cheerio');

/*
  Export the version
*/
exports.version = require('./package').version;

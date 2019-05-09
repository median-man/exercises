const fs = require('fs');
const {promisify} = require('util');

module.exports = {
  mkdir: promisify(fs.mkdir),
  writeFile: promisify(fs.writeFile),
  pathExists: promisify(fs.exists),
};

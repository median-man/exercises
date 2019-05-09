const path = require('path');
const {fs} = require('../utils');

const print = console.log; // eslint-disable-line no-console

require('./generate-exercise')(process.argv[2], {fs, path, print});

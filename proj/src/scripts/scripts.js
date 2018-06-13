#!/usr/bin/env node
const shell = require('shelljs');
const [,, ... args] = process.argv;

console.log(`hello man! ${args}`);
console.log('dir: ', __dirname);
shell.exec('npx ./node_modules/protractor-heat-map/node_modules/webpack/bin/webpack.js --config ./node_modules/protractor-heat-map/webpack.config.js');
shell.exec('start ./node_modules/protractor-heat-map/dist/index.html');
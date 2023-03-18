                          // NPM :  Node Package Manager

// npm is the world's largest Software Registry. The registry contains over 800,000 code packages.

const chalk = require('chalk');
const cha = require('chalk');
const validator = require('validator')

//console.log(cha.red.underline.inverse('false'));
const result = validator.isEmail('Areeb@ahmad');
console.log(result ? chalk.green.inverse(result) : chalk.red.inverse(result));
  
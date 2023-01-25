// const { default: chalk } = require('chalk');
const chalk = require("chalk");

//use this npm module to install chalk npm i chalk@4.1.2

// console.log(chalk.blue("Hello world"));
// import chalk from 'chalk';

// console.log(chalk.blue('Hello world!'));

const validator = require("validator");
const res = validator.isEmail("dhavalsinhs@gmail.com");
console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));
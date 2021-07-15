const chalk = require('chalk');

function colorPattern(pattern, text){
  if(pattern === "red"){
    return chalk.redBright.bold.bgBlack.underline(text)
  }
  else if(pattern === "green"){
    return chalk.green.bgBlack(text)
  }
}

module.exports = colorPattern
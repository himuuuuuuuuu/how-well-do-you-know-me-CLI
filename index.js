const chalk = require('chalk');
var readlineSync = require('readline-sync');
var questions = require("./questions")
var play = require("./utils/play")
var colorPattern = require("./utils/colorPattern")
score = 0

function main(){
  console.log(colorPattern("red","HOW WELL DO YOU KNOW KING SAM QUIZ 2021 EDITION!\n\n" ))

  
while(true){
var userName = readlineSync.question(chalk.yellowBright.bold("\nWelcome Sir,Enter your name to proceed: "));
if(userName !== ""){
      break
    }
    else{
      console.log(chalk.redBright.bold("\nWhoops Sir! :( Try again \n"));
    }
  }




console.log(chalk.green.bgBlack("\n\nWelcome Chief: " + userName + " This quiz will check how well do you know me! \nDon't forget to answer all the questions honestly...have fun! \n"))

console.log(chalk.yellowBright.bold.bgBlack("Game rules: \n\nCorrect Answer: 10 points\nIncorrect answer: 0 points\nThere will be four alternatives out of which you have to select one appropriate choice...(No need to write complete answers,only type the option)\n"))

for(i=0; i<questions.length; i++){
    var currentQuestion = questions[i]
    var userQuestionStatus = play(currentQuestion.question,currentQuestion.answer[0])

    if(userQuestionStatus === true){
      score+=10
       console.log("\n\nYour score is: " + score)
      console.log(chalk.greenBright.bold("\n\nWell done Chief your answer is absolutely correct"))
    }else{
      console.log(chalk.greenBright.underline.bold.bgBlack("Your score is: " + score))
      console.log(chalk.red.bold("\n\nOops chief,your answer is incorrect!"))
      console.log(chalk.greenBright.underline.bold.bgBlack("\n\nCorrect answer was", currentQuestion.answer[1]))

    }
    
    console.log("\n-------------------------------------")

}

console.log(chalk.greenBright.bold.underline("Your final score out of 100 is: " + score + "\n\n"))

console.log(chalk.greenBright.bold.bgBlack("Check out all the correct answers: \n 1.B-Cricket \n 2.D-RCB \n 3.A-Cockroach \n 4.B-Sport Bike \n 5.D-All of the above \n 6.B-Late night Driving Car at high speed \n 7.A-1 \n 8.A-30th August \n 9.B-Chinese \n 10. D-Virat Kohli"))

console.log(chalk.redBright.bgBlack.underline.bold("\n\n Hope you enjoyed Chief...For playing more quiz apps like this,Do follow me on twitter and instagram  \n\n"))


var twitter = chalk.blue.bold.underline("https://twitter.com/SamyakShah_18")

var insta = chalk.blue.bold.underline("https://www.instagram.com/samyakshah_18/")

console.log(chalk.yellowBright.bgBlack.bold("If you want to give any suggestions or experiencing any bugs in this quiz you can DM me on : " + "\n\n" + twitter + "\n\n" +  insta))

}


main()

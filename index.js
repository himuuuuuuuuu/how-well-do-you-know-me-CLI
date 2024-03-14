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

console.log("Check out the current High scores: \n")

 var arrays = ["Soham: 70 ","Riya: 70", "Priyanka: 70","Akanksha: 70"]
 

 for (let z=0; z<arrays.length; z++){
   console.log(arrays[z])
 }

 if (score > 70){
   console.log("\nCongratulations " + userName +  " You have beaten the high score.Send me a screenshot so that I will update your new best record")
 }else{
   console.log(" Oops,you failed to beat the highscore")
 }

console.log(chalk.redBright.bgBlack.underline.bold("\n\n Hope you enjoyed Chief...For playing more quiz apps like this,Do follow me on twitter "))


var twitter = chalk.blue.bold.underline("https://twitter.com/home")

console.log(chalk.yellowBright.bgBlack.bold("If you want to give any suggestions or experiencing any bugs in this quiz you can DM me on : " + "\n\n" + twitter + "\n\n" ))

}


main()

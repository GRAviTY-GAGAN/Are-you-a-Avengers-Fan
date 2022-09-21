https://replit.com/@gaganbn1999/Are-you-a-Marvel-Avengers-fan-1?embed=1&output=1

var readlineSync = require("readline-sync");
var score = 0;
var userInput = readlineSync.question("Hi! what is your name? ")
console.log("Hi! " + userInput + " welcome to Avengers Quiz")
var highscores = [{
  name: "MAX",
  score: 5,
}, {
  name: "SAM",
  score: 5,
}]
var questions = [{
  question: "How many Infinity Stones are there?  \n Six \n Four \n Two \n Three \n",
  answer: 'Six'
}, {
  question: "Where is Captain America from?  \n New York \n New Jersy \n Brooklyn \n Chicago \n",
  answer: "Brooklyn"
}, {
  question: "What type of doctor is Doctor Strange?  \n Cardiologists \n Neurosurgeon \n Dermatologists \n Gastroenterologists \n",
  answer: "Neurosurgeon"
}, {
  question: "Captain America’s shield and Bucky's arm are made of what?  \n Uru \n Adamantium \n Carbonadium \n Vibranium \n",
  answer: "Vibranium"
}, {
  question: "Who was able to pick up Thor’s hammer in Endgame?  \n Iron Man \n Captain America \n Spider Man \n Black Panther \n",
  answer: "Captain America"
}]
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toLowerCase() == answer.toLowerCase()) {
    console.log("You're Right!");
    score++;
  } else {
    console.log("You're Wrong!");
    score--;
  }
  console.log("---------------")
}

for (var i = 0; i < questions.length; i++) {
  var currentquestion = questions[i];
  play(currentquestion.question, currentquestion.answer)
}
console.log("Your current score is: " + score)
console.log("Highscores: ");
for (var i = 0; i < highscores.length; i++) {
  var currentscore = highscores[i];
  console.log(currentscore.name);
  console.log(currentscore.score);
}
console.log("Now send you screenshot so that GAGAN so that he can update your score to the leaderboard. \nThankyou :-]");
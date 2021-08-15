// It is like input() in python for taking inputs
let readlineSync = require('readline-sync');

let arr = {
  "Where do I live ? ": "Udaipur",
  "Favourite Superhero ? ": "Ironman",
  "Favourite pastime ? ": "Listening Music",
  "Favourite Book? ": "The Secret",
  "Favourite Animal? ": "Elephant"
};

let score = 0;
let num = 0;

console.log("Welcome to the Do You Know me Quiz !!");
console.log("+1 for correct, -1 for wrong and 0 for unattempted");
console.log("press 0 and enter to skip the question");
let name = readlineSync.question("Enter your name: ")

function play(question, answer){

  let ans = readlineSync.question(question);

  if(ans === answer){
    console.log("You're right");
    score+=1;
    num+=1;
  }
  else if(ans === '0'){
    console.log("Question Skipped");
  }
  else{
    console.log("You're wrong");
    score-=1;
    num+=1;
  }

  console.log("Your score: " + score);
}

for(let k in arr){
  play(k,arr[k]);
}

console.log(`${name}, You scored ${score} and attempted ${num} questions.`);

let answers = readlineSync.question("Do you wanna know all the right answers? (y/n) ");

if(answers === 'y'){
  for(let k in arr){
    console.log(k,arr[k]);
  }
}

console.log(`Thanks for taking quiz ${name}.`);

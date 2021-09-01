  
var readlineSync = require('readline-sync');

var score = 0;
var username = readlineSync.question("What's your name? ");
console.log('Welcome '+ username  + ' How much do You Know Amlan?');

function play(question,answer) {
    var useranswer = readlineSync.question(question);
    if(useranswer.toUpperCase() === answer.toUpperCase()){
        console.log('right');
        ++score;
    }
    else{
        console.log('wrong');
    }
    console.log('Current Score: '+score);
    console.log('-------------------------');
}
var questions = [
    {
        question:"Where do I live? ",
        answer: "Nagaon"
    },
    {
        question:"Where do I Study? ",
        answer: "JIST"
    },
    {
        question:"My favorite superhero would be? ",
        answer: "Batman"
    },
     {
        question:"My favorite Movie? ",
        answer: "Batman: The Dark Knight Rises"
    },
     {
        question:"My favorite food would be? ",
        answer: "Dumplings"
    },
];

for (let i = 0; i < questions.length; i++) {
    var currentquestion = questions[i];
    play(currentquestion.question,currentquestion.answer);
}

console.log('You Scored:',score);
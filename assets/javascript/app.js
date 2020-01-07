// set variable to hold interval time
// count function per second
// clock running true false set inside an if statement so only one interval is running at once 
// reset function
// question set - question, answer, image, correct answer -- one variable 
// 
// function for displaying image
// function for clicked answer
// function for displaying correct - or is this an if statement inside of the question function?
// is this a function or an onject?
// how do we update the DOM? ONLY use jquery for updating html and not for the javascript - this is javascript interval timing
// 
var correct = 0;
var incorrect = 0;
var noAnswer = 0;
var answerSelect = false;
var time = 30;
var interval;

var questionSet = [{
    question: "Which season was the only one without a Thanksgiving episode?",
    answers: [1, 3, 2, 6],
    correct: 2,
    image: ("../images/thanksgiving.webp")
},
{
    question: "What is the name of Joey's stuffed penguin?",
    answers: ["Hugsy", "Buddy", "Paolo", "Emily"],
    correct: "Hugsy",
    image: ("../images/hugsy-3.jpg")
}
];
console.log(questionSet[1].correct)

function startTimer() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
  }

  function decrement() {

    time--;

    $(".time").push(time);
  };

  startTimer();
  console.log(time);

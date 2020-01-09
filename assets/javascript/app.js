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
$(document).ready(function () {



  var correct = 0;
  var incorrect = 0;
  var noAnswer = 0;
  var answerSelect = false;
  var time = 31;
  var gameIndex = 0;
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
  console.log(questionSet[gameIndex]);
  console.log(questionSet[gameIndex].answers)

  // start game button - can be called later or here I think
  $("#btn").click(startGame);

  // need function for once button is clicked to start game and load question in - should be able to set a for loop top cycle through each question

  function startGame() {
    startTimer();
    $("#btn").remove();
    answerSelect;
    correctAnswer = questionSet[gameIndex].correct;
    var question = questionSet[gameIndex].question;
    $(".question").text(question);
    console.log(question);
    console.log(correctAnswer);

    answerSet = questionSet[gameIndex].answers;

    for (i=0; i<answerSet.length; i++) {

      var a = $("<button>");
          a.addClass("answer");
          // Added a data-attribute
          a.attr("data-name", answerSet[i]);
          // Provided the initial button text
          a.text(answerSet[i]);
          // Added the button to the answers div
          $(".answers").append(a);
    // $(".answers").append(answerSet);
    
  }

  }


  function startTimer() {
    clearInterval(interval);
    interval = setInterval(decrement, 1000);
  }

  function decrement() {

    time--;

    $(".time").text("Time Remaining: " + time);

    if (time === 0) {
      stop();
    }
  };

  function stop() {
    clearInterval(interval);
  };
  // startTimer();
  console.log(time);
});
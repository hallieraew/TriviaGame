
// 
$(document).ready(function() {
 
  var correct = 0;
  var incorrect = 0;
  var noAnswer = 0;
  var answerSelect = false;
  var time = 31;
  var gameIndex = 0;
  var interval;
  var selection;
  var a;

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
  
  // need function for once button is clicked to start game and load question in - should be able to set a for loop top cycle through each question
  
  function startGame() {
    startTimer();
    $("#btn").remove();
    answerSelect;
    gameContent();
    correct=0;
    incorrect=0;
    noAnswer=0;
  }
  
  function gameContent() {
    
    var correctAnswer = questionSet[gameIndex].correct;
    var question = questionSet[gameIndex].question;
    $(".question").text(question);
    console.log(question);
    console.log(correctAnswer);
    
    answerSet = questionSet[gameIndex].answers;
    for (i = 0; i < answerSet.length; i++) {
      
      a = $("<button>");
      a.addClass("answer");
      a.attr("data-answer", answerSet[i]); 
      a.text(answerSet[i]);
      $("#answers").append(a);
      console.log(a.text());
    }
    
    
    $(".answer").on("click", function(event) {
      stop();
      // selection = $(this).attr(correctAnswer); 
      // .attr(correctAnswer); took this off of selection assignment above
      console.log(questionSet[gameIndex].correct);
      if (parseInt($(this).attr("data-answer")) === questionSet[gameIndex].correct) {
        console.log("this is the right answer i think");
        $("#answers").empty();
        $("#answers").append("The answer is: " + correctAnswer);
        $("#answers").append("<img>");
        correct ++;
        answerSelect = true;
      }
      else {
        stop();
      }
    })
  }
        
    function startTimer() {
      clearInterval(interval);
      interval = setInterval(decrement, 1000);
    };
    
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
    // console.log(time)
  $("#btn").on("click", startGame);
});

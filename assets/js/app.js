function check() {


var question1 = document.quiz.question1.value;
var question2 = document.quiz.question2.value;
var question3 = document.quiz.question3.value;
var question4 = document.quiz.question4.value;
var correct = 0;

if (question1 == 'Cairo') {
	correct++;
}

if (question2 == 'Abuja') {
	correct++;
}

if (question3 == 'Giza') {
  correct++;
}

if (question4 == 'Kuala Lumpur') {
	correct++;
}

var messages = ["You Da Bomb!!", "You did so-so!", "You need an education!"];
var pictures = ["assets/img/bomb.gif", "assets/img/soso.gif", "assets/img/boo.gif"];

var range;

if(correct < 1) {
	range = 2;
}

if(correct > 0 && correct < 4) {
	range = 1;	
}

if(correct > 3) {
	range = 0;
}


document.getElementById("after_submit").style.visibility = "visible";
document.getElementById("message").innerHTML = messages[range];
document.getElementById("number_correct").innerHTML = "You got " + correct + " correct.";
document.getElementById("picture").src = pictures[range];

}

// / Set the date we're counting down to
var countDownDate = new Date("April 13, 2019 23:15:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();
    
  // Find the distance between now and the count down date
  var distance = countDownDate - now;
    
  // Time calculations for days, hours, minutes and seconds
  // var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  // var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  // var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
  // Output the result in an element with id="demo"
  document.getElementById("demo").innerHTML = seconds + " remain on quiz";
    
  // If the count down is over, write some text 
  if (distance < 1) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "TIME'S UP!";
    correct = 0;
    setInterval();
  }
}, 1000);





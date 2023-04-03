
const emailInput = document.getElementById("email-input");
const emailRegex = /^\S+@\S+\.\S+$/; 

if (!emailRegex.test(emailInput.value)) {
  alert("Please enter a valid email address.");
  emailInput.focus(); 
}


function checkAnswer(question, answer) {
  let score = 0;
  if (question === "q1" && answer === "a") {
    score++;
  } else if (question === "q2" && answer === "b") {
    score++;
  } else if  (question === "q3" && answer === "c") {
    score++;
  } else if (question === "q4" && answer === "c") {
    score++;
  } else if (question === "q5" && answer === "a") {
    score++;
  } else if (question === "q6" && answer === "a") {
    score++;
  } else if (question === "q7" && answer === "b") {
    score++;
  }
  return score;
}

function submitQuiz() {
  let score1 = checkAnswer("q1", document.querySelector('input[name="q1"]:checked').value);
  let score2 = checkAnswer("q2", document.querySelector('input[name="q2"]:checked').value);
  let score3 = checkAnswer("q3", document.querySelector('input[name="q3"]:checked').value);
  let score4 = checkAnswer("q4", document.querySelector('input[name="q4"]:checked').value);
  let score5 = checkAnswer("q5", document.querySelector('input[name="q5"]:checked').value);
  let score6 = checkAnswer("q6", document.querySelector('input[name="q6"]:checked').value);
  let score7 = checkAnswer("q7", document.querySelector('input[name="q7"]:checked').value);
  let totalScore = score1 + score2 + score3 + score4 + score5 + score6 + score7;
  alert("Your score is: " + totalScore);
}







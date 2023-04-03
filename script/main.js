// function calculateScore(answers) {
//     let score = 0;
//     for(let i = 0; i < answers.length; i++) {
//       if(answers[i] === "correct") {
//         score++;
//       }
//     }
//     return score;
// }

const emailInput = document.getElementById("email-input");
const emailRegex = /^\S+@\S+\.\S+$/; // Regular expression to match email format

if (!emailRegex.test(emailInput.value)) {
  alert("Please enter a valid email address.");
  emailInput.focus(); // Set focus back to email input
}

// const form = document.querySelector("#quiz-form");
// form.addEventListener("submit", function(event) {
//   event.preventDefault(); // Prevent form submission

//   const selectedAnswer = document.querySelector("input[name='answer']:checked");
//   if (!selectedAnswer) {
//     alert("Please select an answer before continuing to the next question.");
//     return; // Stop form submission
//   }

//   // Continue to the next question
// });

// let score = 0;

// // Loop over the quiz questions
// for (let i = 0; i < quizQuestions.length; i++) { !!!!!EL QUIZ QUESTION LENGHT TIENE QUE ESTAR DEFINIDO, NO SIRVE)
//   // Present the current question to the user
//   const currentQuestion = quizQuestions[i];
//   const userAnswer = prompt(currentQuestion.question + "\n" + currentQuestion.choices.join("\n"));

//   // Check if the user's answer is correct and update the score
//   if (userAnswer === currentQuestion.answer) {
//     alert("Correct!");
//     score++;
//   } else {
//     alert("Incorrect. The correct answer was " + currentQuestion.answer + ".");
//   }
// }


// Define each quiz question as a separate object
// const question1 = {
//     prompt: "What is your favorite color?",
//     option1: "Blue",
//     option2: "Green",
//     option3: "Purple",
//     option4: "Red",
//     answer: "Purple"
// };
  
// const question2 = {
//     prompt: "What is your favorite Planet?",
//     option1: "Dagobah",
//     option2: "Naboo",
//     option3: "Coruscant",
//     option4: "Tattoine",
//     answer: "Coruscant"
// };
  
// const question3 = {
//     prompt: "What color is the sky on a clear day?",
//     option1: "Green",
//     option2: "Yellow",
//     option3: "Blue",
//     option4: "Red",
//     answer: "Blue"
// };
  
//   // Define a variable to keep track of the user's score
// let score = 0;
  
//   // Loop over the quiz questions
//   for (let i = 1; i <= 3; i++) {
//     // Present the current question to the user
//     const currentQuestion = eval(`question${i}`);
//     let userAnswer;
//     do {
//       userAnswer = prompt(currentQuestion.prompt + "\n" + currentQuestion.option1 + "\n" + currentQuestion.option2 + "\n" + currentQuestion.option3 + "\n" + currentQuestion.option4);
//     } while (userAnswer !== currentQuestion.answer);
  
//     // Check if the user's answer is correct and update the score
//     alert("Correct!");
//     score++;
// }
  
//   // Present the final score to the user
//   alert(`You scored ${score} out of 3 questions.`);
  
function checkAnswer(question, answer) {
  let score = 0;
  if (question === "q1" && answer === "b") {
    score++;
  } else if (question === "q2" && answer === "b") {
    score++;
  }
  return score;
}

let score = 0;
function submitQuiz() {
  let score1 = checkAnswer("q1", document.querySelector('input[name="q1"]:checked').value);
  let score2 = checkAnswer("q2", document.querySelector('input[name="q2"]:checked').value);
  let totalScore = score1 + score2;
  alert("Your score is: " + totalScore);
}







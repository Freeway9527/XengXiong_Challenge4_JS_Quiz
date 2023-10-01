const questions = [
  {
    question: "Javascript is an _______ language?",
    answers: [
      { text: "Object-Oriented", correct: true },
      { text: "Object-Based", correct: false },
      { text: "Procedural", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which of the following keywords is used to define a variable in Javascript?",
    answers: [
      { text: "var", correct: false },
      { text: "let", correct: false },
      { text: "const", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question:
      "Which of the following methods is used to access HTML elements using Javascript?",
    answers: [
      { text: "getElementById", correct: false },
      { text: "getElementsByClassName", correct: false },
      { text: "Both A and B", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "What does the Javascript “debugger” statement do?",
    answers: [
      { text: "It will debug all the errors in the program at runtime", correct: false },
      { text: "It acts as a breakpoint in a program", correct: true },
      { text: "It will debug the error in the current statement if any", correct: false },
      { text: "All of the above", correct: false },
    ],
  },
  {
    question:
      "Which function is used to serialize an object into a JSON string in Javascript?",
    answers: [
      { text: "stringify()", correct: true },
      { text: "parse()", correct: false },
      { text: "convert()", correct: false },
      { text: "none of the above", correct: false },
    ],
  },
  {
    question:
      "Which of the following are closures in Javascript?",
    answers: [
      { text: "Variables", correct: false },
      { text: "Functions", correct: false },
      { text: "Objects", correct: false },
      { text: "All of the above", correct: true },
    ],
  },
  {
    question:
      "How to stop an interval timer in Javascript",
    answers: [
      { text: "clearTimer", correct: false },
      { text: "intervalOver", correct: false },
      { text: "clearInterval", correct: true },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which of the following variables takes precedence over the others if the names are the same?",
    answers: [
      { text: "Global variable", correct: false },
      { text: "The local element", correct: true },
      { text: "The two of the above", correct: false },
      { text: "None of the above", correct: false },
    ],
  },
  {
    question:
      "Which one of the following is the correct way for calling the JavaScript code?",
    answers: [
      { text: "Preprocessor", correct: false },
      { text: "Triggering Event", correct: false },
      { text: "RMI", correct: false },
      { text: "Function/Method", correct: true },
    ],
  },
  {
    question: "How do we write a comment in javascript??",
    answers: [
        { text: "/**/", correct: false },
        { text: "//", correct: true },
        { text: "#", correct: false },
        { text: "$$", correct: false },
    ] 
},
{
    question: "Which of the following methods can be used to display data in some form using Javascript?",
    answers: [
        { text: "document.write()", correct: false },
        { text: "window.alert()", correct: false },
        { text: "console.log()", correct: false },
        { text: "All of the above", correct: true },
    ] 
},
{
    question: "Which operator is used to assign a value to a variable?",
    answers: [
        { text: "=", correct: true },
        { text: "*", correct: false },
        { text: "x", correct: false },
        { text: "-", correct: false },
    ] 
},
{
    question: "How do you create a function in JavaScript?",
    answers: [
        { text: "function:myFunction", correct: false },
        { text: "function myFunction", correct: true },
        { text: "function = myFunction", correct: false },
        { text: "function + myFunction", correct: false },
    ] 
},
{
    question: "How to write an IF statement in JavaScript?",
    answers: [
        { text: "if i = 5 then", correct: false },
        { text: "if (i == 5)", correct: true },
        { text: "if i == 5 then", correct: false },
        { text: "if i = 5", correct: false },
    ] 
},
{
    question: "How does a WHILE loop start?",
    answers: [
        { text: "while i = 1 to 10", correct: false },
        { text: "while (i <= 10; i++)", correct: false },
        { text: "while (i <= 10)", correct: true },
        { text: "None of the above", correct: false },
    ] 
},
{
    question: "How do you declare a JavaScript variable?",
    answers: [
        { text: "variable javaScript", correct: false },
        { text: "var = javaScript", correct: false },
        { text: "v javaScript", correct: false },
        { text: "var javaScript", correct: true },
    ]
},
{
    question: "In JavaScript the x===y statement implies that:",
    answers: [
        { text: "Both x and y are equal in value, type and reference address as well", correct: false },
        { text: "Both are x and y are equal in value only", correct: false },
        { text: "Both are equal in the value and data type", correct: true },
        { text: "Both are not same at all", correct: false },
    ]
},
{
    question: "Which one of the following is known as the Equality operator, which is used to check whether the two values are equal or not:",
    answers: [
        { text: "=", correct: false },
        { text: "===", correct: false },
        { text: "==", correct: true },
        { text: "&&", correct: false },
    ]
},
{
    question: "Which one of the following operator returns false if both values are equal?",
    answers: [
        { text: "!", correct: false },
        { text: "!==", correct: false },
        { text: "!=", correct: true },
        { text: "!=!", correct: false },
    ]
},
{
    question: "A set of unordered properties that, has a name and value is called______",
    answers: [
        { text: "String", correct: false },
        { text: "Array", correct: false },
        { text: "Serialized Object", correct: false },
        { text: "Object", correct: true },
    ]
},
];

//element references
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const startButton = document.getElementById("start-button");
const timerElement = document.getElementById("timer");
const resultScreen = document.getElementById("result-screen");

let currentQuestionIndex = 0;
let score = 0;
let timeRemaining = 180;
let timerInterval;
const PENALTY_TIME = 10;

startButton.addEventListener("click", startQuizButton);

// Function to start the quiz when the "Start test" button is clicked
function startQuizButton() {
  // Hide the welcome screen and display the quiz screen
  const welcomeScreen = document.getElementById("welcome-screen");
  welcomeScreen.style.display = "none";

  const quizScreen = document.getElementById("quiz-screen");
  quizScreen.style.display = "block";

  startQuiz();
}
// Function to start the quiz
function startQuiz() {
  // Initialize variables and start the timer
  currentQuestionIndex = 0;
  score = 0;
  timeRemaining = 180;
  timerElement.style.display = "block"; // Display the timer
  startTimer();
  nextButton.innerHTML = "Next";
  showQuestion();
}

// Function to start the timer
function startTimer() {
  // Update the timer every second and handle when time runs out
  timerInterval = setInterval(() => {
    if (timeRemaining > 0) {
      const minutes = Math.floor(timeRemaining / 60); // Calculate minutes and seconds from the remaining time
      const seconds = timeRemaining % 60;
      const formattedTime = `${minutes}m ${seconds}s`;
      timerElement.textContent = `Time remaining: ${formattedTime}`;
      timeRemaining--;
    } else {
      clearInterval(timerInterval);
      timeRemaining = 0; // Ensure timeRemaining is 0
      showScore();
    }
  }, 1000);
}

// Function to display question
function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex]; // Get the current question based on the index
  let questionNo = currentQuestionIndex + 1;  // Display the question number and text in the question element
  questionElement.innerHTML = questionNo + ". " + currentQuestion.question; // Display the question number and text in the question element

// Loop through each answer for the current question
  currentQuestion.answers.forEach((answers) => {
    const button = document.createElement("button");
    button.innerHTML = answers.text;
    button.classList.add("btn");
    answerButtons.appendChild(button);
    if (answers.correct) {
      button.dataset.correct = answers.correct;
    }
    button.addEventListener("click", selectAnswer);
  });
}

// Function to reset the answer buttons and state
function resetState() {
  nextButton.style.display = "none";
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}

// Function to handle incorrect answers and penalize time
function handleIncorrectAnswer() {
  if (timeRemaining > 0) {
    timeRemaining -= PENALTY_TIME;
  }
  if (timeRemaining < 0) {
    timeRemaining = 0;
  }
}

// Function to handle selecting an answer
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === "true";

  if (isCorrect) {
    selectedBtn.classList.add("correct");
    score++;
  } else {
    selectedBtn.classList.add("incorrect");
    handleIncorrectAnswer();
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === "true") {
      button.classList.add("correct");
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}

// Function to display the score and end of quiz
function showScore() {
  clearInterval(timerInterval); // Stop the timer
  resetState();

  const minutes = Math.floor((180 - timeRemaining) / 60);
  const seconds = (180 - timeRemaining) % 60;
  const formattedTime = `${minutes}m ${seconds}s`;

  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  timerElement.style.display = "none"; // Hide the timer

  // Show the result screen directly
  showResultScreen();
}

// Function to handle the "Next" button
function handleNextButton() {
  currentQuestionIndex++;
  if (currentQuestionIndex < questions.length) {
    showQuestion();
  } else {
    showScore();
  }
}

// Event listener for the "Next" button
nextButton.addEventListener("click", () => {
  if (currentQuestionIndex < questions.length) {
    handleNextButton();
  } else {
    showResultScreen();
  }
});

// Function to display the result screen
function showResultScreen() {
  // Calculate minutes and seconds from the remaining time
  const minutes = Math.floor((180 - timeRemaining) / 60);
  const seconds = (180 - timeRemaining) % 60;
  const formattedTime = `${minutes}m ${seconds}s`;
  const scoreDisplay = document.getElementById("score");
  const timeDisplay = document.getElementById("time");

  scoreDisplay.innerText = score;
  timeDisplay.innerText = formattedTime;

  resultScreen.style.display = "block";
}

// Function to save the quiz result
function saveResult() {
  // Retrieve the value from the name input field
  const nameInput = document.getElementById("name");
  const playerName = nameInput.value;

  // Check if the name is empty
  if (playerName.trim() === "") {
    alert("Please enter your name.");
    return;
  }

  // Create an object to store the result data
  const result = {
    name: playerName,
    score: score,
    time: 180 - timeRemaining,
  };

  // Retrieve saved results from localStorage or create an empty array
  const savedResults = JSON.parse(localStorage.getItem("quizResults")) || [];
  savedResults.push(result);
  localStorage.setItem("quizResults", JSON.stringify(savedResults));

  // Disable the button and change its text
  const saveButton = document.getElementById("save-button");
  saveButton.disabled = true;
  saveButton.innerText = "Result Saved!";

  // Display an alert to notify the user that the results were saved
  alert("Your results were saved successfully. You may now exit the test!");
}

startQuiz(); // Start the quiz when the script loads

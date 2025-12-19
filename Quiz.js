const questions = [
  { q: "Ubiquitous means:", options: ["Present or found everywhere","Rare and uncommon","Temporary"], answer: 0 },
  { q: "Pragmatic means:", options: ["Practical and realistic","Idealistic","Emotional"], answer: 0 },
  { q: "Resilient means:", options: ["Able to recover quickly from difficulties","Easily discouraged","Fragile"], answer: 0 },
  { q: "Meticulous means:", options: ["Careless","Showing great attention to detail","Rushed"], answer: 1 },
  { q: "Ambivalent means:", options: ["Certain and confident","Having mixed or contradictory feelings","Indifferent"], answer: 1 },
  { q: "Innovative means:", options: ["Traditional and old-fashioned","Introducing new ideas or methods","Risk-averse"], answer: 1 },
  { q: "Perseverance means:", options: ["Giving up easily","Avoiding effort","Continued effort despite difficulties"], answer: 2 },
  { q: "Eloquent means:", options: ["Fluent and persuasive","Confused","Quiet"], answer: 0 }
];

let current = 0;
let score = 0;
let selectedQuestions = [];
let quizSize = questions.length;

// DOM elements
const questionEl = document.getElementById("question");
const choicesEl = document.getElementById("choices");
const scoreEl = document.getElementById("score");

// Shuffle helper
function shuffle(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

// Load current question
function loadQuestion() {
  const q = selectedQuestions[current];
  questionEl.textContent = q.q;
  choicesEl.innerHTML = "";

  q.options.forEach((opt, i) => {
    const btn = document.createElement("button");
    btn.textContent = opt;
    btn.onclick = () => {
      Array.from(choicesEl.children).forEach(b => b.disabled = true);
      if(i === q.answer){
        score++;
        btn.classList.add("correct");
      } else {
        btn.classList.add("wrong");
        choicesEl.children[q.answer].classList.add("correct");
      }
      setTimeout(()=>{
        current++;
        current < selectedQuestions.length ? loadQuestion() : endQuiz();
      }, 800);
    };
    choicesEl.appendChild(btn);
  });
}

// End of quiz
function endQuiz(){
  questionEl.textContent = "Quiz complete!";
  scoreEl.innerHTML = `<span style="font-size:1.3rem; font-weight:700;">Score: ${score}/${selectedQuestions.length}</span>`;
  choicesEl.innerHTML = `
    <button onclick="startQuiz()">Restart Quiz</button>
    <button onclick="chooseQuizSize()">Take Another Quiz</button>
  `;
}

// Start quiz
function startQuiz() {
  current = 0;
  score = 0;
  scoreEl.textContent = "";
  
  // reshuffle the current set of questions

  shuffle(selectedQuestions);
  loadQuestion();
}

// Prompt for quiz size
function chooseQuizSize() {
  let size = prompt(`How many words do you want in the quiz? (max ${questions.length})`);
  size = parseInt(size);
  if (!size || size < 1 || size > questions.length) size = questions.length;

  quizSize = size;
  selectedQuestions = [...questions];
  shuffle(selectedQuestions);
  selectedQuestions = selectedQuestions.slice(0, quizSize);
  startQuiz();
}

// Home button
function goHome() {
  window.location.href = "index.html";
}

// Quit button
document.getElementById("quit-btn").onclick = () => {
  alert(`You quit! Your score: ${score}/${selectedQuestions.length}`);
  goHome();
};

// DOM ready
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home-btn").onclick = goHome;
  chooseQuizSize(); // start quiz flow
});

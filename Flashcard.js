const vocab = [
  {
    word: "Ubiquitous",
    pronunciation: "/juːˈbɪkwɪtəs/",
    meaning: "Present or found everywhere",
    sentence: "Smartphones are ubiquitous in modern life."
  },
  {
    word: "Pragmatic",
    pronunciation: "/præɡˈmætɪk/",
    meaning: "Practical and realistic",
    sentence: "She took a pragmatic approach."
  },
  {
    word: "Resilient",
    pronunciation: "/rɪˈzɪl.jənt/",
    meaning: "Able to recover quickly from difficulties",
    sentence: "She remained resilient despite repeated failures."
  },
  {
    word: "Meticulous",
    pronunciation: "/məˈtɪk.jə.ləs/",
    meaning: "Showing great attention to detail",
    sentence: "He is meticulous about organizing his notes."
  },
  {
    word: "Ambivalent",
    pronunciation: "/æmˈbɪv.ə.lənt/",
    meaning: "Having mixed or contradictory feelings",
    sentence: "She felt ambivalent about moving to a new city."
  },
  {
    word: "Innovative",
    pronunciation: "/ˈɪn.ə.veɪ.tɪv/",
    meaning: "Introducing new ideas or methods",
    sentence: "The company is known for its innovative solutions."
  },
  {
    word: "Perseverance",
    pronunciation: "/ˌpɜː.sɪˈvɪə.rəns/",
    meaning: "Continued effort despite difficulties",
    sentence: "Her perseverance paid off in the end."
  },
  {
    word: "Eloquent",
    pronunciation: "/ˈɛləkwənt/",
    meaning: "Fluent and persuasive",
    sentence: "He gave an eloquent speech."
  }
];

let index = 0;

const card = document.getElementById("flashcard");
const wordEl = document.getElementById("word");
const pronEl = document.getElementById("pronunciation");
const meanEl = document.getElementById("meaning");
const sentEl = document.getElementById("sentence");

function render() {
  card.classList.remove("flipped");
  const v = vocab[index];
  wordEl.textContent = v.word;
  pronEl.textContent = v.pronunciation;
  meanEl.textContent = v.meaning;
  sentEl.textContent = v.sentence;
}

render();

/* FLIP — ONLY CARD */
card.addEventListener("click", () => {
  card.classList.toggle("flipped");
});

/* NAVIGATION — SIDES ONLY */
document.querySelector(".left-zone").addEventListener("click", () => {
  if (index > 0) {
    index--;
    render();
  }
});

document.querySelector(".right-zone").addEventListener("click", () => {
  if (index < vocab.length - 1) {
    index++;
    render();
  }
});
document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("home-btn").onclick = goHome;
});
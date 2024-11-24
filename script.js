
const questions = [
  {
    text: "Quels sont les usages les plus fréquents des écrans par les enfants ?",
    options: [
      { answer: "Jouer à des jeux vidéo", points: 10 },
      { answer: "Regarder des dessins animés ou séries", points: 7 },
      { answer: "Faire des devoirs ou recherches", points: 5 },
      { answer: "Regarder des vidéos sur YouTube", points: 3 },
      { answer: "Parler avec des amis en ligne", points: 1 }
    ]
  },
  {
    text: "Quels sont les dangers liés à une surexposition aux écrans ?",
    options: [
      { answer: "Fatigue visuelle", points: 10 },
      { answer: "Manque de sommeil", points: 7 },
      { answer: "Isolement social", points: 5 },
      { answer: "Difficultés scolaires", points: 3 },
      { answer: "Accès à des contenus inappropriés", points: 1 }
    ]
  },
];

let currentQuestion = 0;
let totalScore = 0;

const questionEl = document.getElementById('question');
const answersEl = document.getElementById('answers');
const nextButton = document.getElementById('next-button');
const resultSection = document.getElementById('result');
const scoreEl = document.getElementById('score');

function loadQuestion() {
  const current = questions[currentQuestion];
  questionEl.textContent = current.text;
  answersEl.innerHTML = '';
  current.options.forEach(option => {
    const button = document.createElement('button');
    button.textContent = option.answer;
    button.onclick = () => {
      totalScore += option.points;
      nextButton.disabled = false;
    };
    answersEl.appendChild(button);
  });
  nextButton.disabled = true;
}

function showResult() {
  document.getElementById('quiz').classList.add('hidden');
  resultSection.classList.remove('hidden');
  scoreEl.textContent = totalScore;
}

nextButton.addEventListener('click', () => {
  currentQuestion++;
  if (currentQuestion < questions.length) {
    loadQuestion();
  } else {
    showResult();
  }
});

loadQuestion();
    
const answerBox = document.querySelector('.js-answerbox');

    let currentIndex = 0;

function generateHTML() {
    let html =
    `
    <p class="score-board">Questions 1/9</p>
    <div class="question-container">
        <h2>${quiz[currentIndex].question}</h2>
    </div>
    <div class="answer-container">
        <div class="answerbox js-answerbox  box-a" onclick="verifyAnswer('var')">
            <p>${quiz[currentIndex].options[0]}</p>
        </div>
        <div class="answerbox js-answerbox box-b" onclick="verifyAnswer('let')">
            <p>${quiz[currentIndex].options[1]}</p>
        </div>
        <div class="answerbox js-answerbox  box-c" onclick="verifyAnswer('const')">
            <p>${quiz[currentIndex].options[2]}</p>
        </div>
        <div class="answerbox js-answerbox  box-d" onclick="verifyAnswer('define')">
            <p>${quiz[currentIndex].options[3]}</p>
        </div>
    </div>
    <button class="continue-btn js-continue-btn">Continue</button>
    `;

    document.querySelector('.main-container').innerHTML = html;
    nextQuestion();

};

function nextQuestion() {
    const continueBtn = document.querySelector('.js-continue-btn');

    continueBtn.addEventListener('click', () => {
        console.log('button works');
        currentIndex += 1;

    });
}

function verifyAnswer(answer) {
    const correctAnswer = 'const';

    if (answer === correctAnswer) {
        document.querySelector('.box-c').classList.add('right-answer');
    } else if (answer === 'var') {
        document.querySelector('.box-a').classList.add('wrong-answer');

    } else if (answer === 'let') {
        document.querySelector('.box-b').classList.add('wrong-answer');

    } else if (answer === 'define') {
        document.querySelector('.box-d').classList.add('wrong-answer');

    }
};
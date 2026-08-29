const answerBox = document.querySelector('.js-answerbox');
let counter = 0;
let questionNumber = counter + 1;

function generateHTML() {
    let html =
    `
    <p class="score-board">Questions ${questionNumber}/9</p>
    <div class="question-container">
        <h2>${quiz[counter].question}</h2>
    </div>
    <div class="answer-container">
        <div class="answerbox js-answerbox  box-a" onclick="verifyAnswer('var')">
            <p>${quiz[counter].options[0]}</p>
        </div>
        <div class="answerbox js-answerbox box-b" onclick="verifyAnswer('let')">
            <p>${quiz[counter].options[1]}</p>
        </div>
        <div class="answerbox js-answerbox  box-c" onclick="verifyAnswer('const')">
            <p>${quiz[counter].options[2]}</p>
        </div>
        <div class="answerbox js-answerbox  box-d" onclick="verifyAnswer('define')">
            <p>${quiz[counter].options[3]}</p>
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
        counter++;
        console.log(counter);
        generateHTML(counter);
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
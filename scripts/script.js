const answerBox = document.querySelector('.js-answerbox');

function verifyAnswer(answer) {
    const correctAnswer = 'const';

    if (answer === correctAnswer) {
        document.querySelector('.box-c').classList.add('right-answer');
    } else {
        document.querySelector('js-answerbox').classList.add('wrong-answer');
    }
};
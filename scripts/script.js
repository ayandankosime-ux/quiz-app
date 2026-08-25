const answerBox = document.querySelector('.js-answerbox');

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
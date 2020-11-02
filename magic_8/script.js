const ball = document.querySelector('img');
const input = document.querySelector('input');
const answer = document.querySelector('.answer');
const error = document.querySelector('.error');

const answersArr = ['Yes!', 'No', 'Maybe', 'Hard to say'];

const shakeBall = () => {
    ball.classList.add('shake-animation');
    setTimeout(checkInput, 1000);
}

const checkInput = () => {
    if(input.value !== '' && input.value.slice(-1) === '?') {
        generateAnwser();
        error.textContent = '';
    } else if(input.value !== '' && input.value.slice(-1) !== '?') {
        error.textContent = 'Needs to end with "?"'
        answer.textContent = '';
    } else {
        error.textContent = 'You need to ask question';
        answer.textContent = '';
    }
    ball.classList.remove('shake-animation');
}

const generateAnwser = () => {
    const randomNumber = Math.floor(Math.random() * 4);
    answer.innerHTML = `<span>Answer: </span> ${answersArr[randomNumber]}`
}

ball.addEventListener('click', shakeBall);

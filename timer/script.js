const startBtn = document.querySelector('.start');
const pauseBtn = document.querySelector('.pause');
const stopBtn = document.querySelector('.stop');
const resetBtn = document.querySelector('.reset');
const infoBtn = document.querySelector('.info');
const historyBtn = document.querySelector('.history');
const stopwatch = document.querySelector('.stopwatch');
const time = document.querySelector('.time');
const timeList = document.querySelector('.time-list');
const modalShadow = document.querySelector('.modal-shadow');
const closeModalBtn = document.querySelector('.close');



let countTime;
let minutes = 0;
let seconds = 0;

let timesArr = [];

const handleStart = () => {

    clearInterval(countTime);
    countTime = setInterval(() => {
        if (seconds < 9) {
            seconds++;
            stopwatch.textContent = `${minutes}:0${seconds}`;
        } else if(seconds >= 9 && seconds < 59) {
            seconds++;
            stopwatch.textContent = `${minutes}:${seconds}`;
        } else {
            minutes++;
            seconds = 0;
        }
    }, 1000)
}

const handlePause = () => {
    clearInterval(countTime);
}

const handleStop = () => {

    time.innerHTML = `Last time: ${stopwatch.textContent}`

    if(stopwatch.textContent !== '0:00') {
        time.style.visibility = 'visible';
        timesArr.push(stopwatch.textContent);
    }

    clearStuff();
}

const handleReset = () => {
    time.style.visibility = 'hidden';
    timesArr = [];
    clearStuff();
}

const clearStuff = () => {
    clearInterval(countTime);
    stopwatch.textContent = '0:00';
    timeList.textContent = '';
    seconds = 0;
    minutes = 0;
}

const handleHistory = () => {
    timeList.textContent = '';
    timesArr.forEach((time, index) => {
        const newTime = document.createElement('li');
        newTime.innerHTML = `Count no. ${index + 1}: ${time}`;
        timeList.appendChild(newTime);
    })
}

const showModal = () => {
    if(!(modalShadow.style.display === 'block')) {
        modalShadow.style.display = 'block';
    } else {
        modalShadow.style.display = 'none';
    }

    modalShadow.classList.toggle('modal-animation');
}

startBtn.addEventListener('click', handleStart);
pauseBtn.addEventListener('click', handlePause);
stopBtn.addEventListener('click', handleStop);
resetBtn.addEventListener('click', handleReset);
historyBtn.addEventListener('click', handleHistory);
infoBtn.addEventListener('click', showModal);
closeModalBtn.addEventListener('click', showModal);
window.addEventListener('click', event => {
    event.target === modalShadow ? showModal() : false;
})
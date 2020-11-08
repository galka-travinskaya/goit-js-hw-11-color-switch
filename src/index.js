const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-action="start"]'),
    stopBtn: document.querySelector('[data-action="stop"]'),
}

refs.startBtn.addEventListener('click', onStartBtnClick);
refs.stopBtn.addEventListener('click', onStopBtnClick);

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

let intervalId;

function onStartBtnClick() {
    refs.startBtn.disabled = true;
    intervalId = setInterval(colorSet, 1000); 
}

function colorSet() {
    let color = randomIntegerFromInterval(0, colors.length + 1);
    refs.body.bgColor = colors[color]; 
} 

function onStopBtnClick() {
    clearInterval(intervalId);
    refs.startBtn.disabled = false;
}
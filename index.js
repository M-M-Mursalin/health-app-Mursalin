let heart = document.querySelector('.heart');
function printHeart(){
    let heartRandom = Math.floor(Math.random() * 75 + 50);
    heart.innerText = heartRandom;
}
printHeart();


let hours = document.querySelector('.hours');
function printHours(){
    let hoursRandom = Math.floor(Math.random() * 8 + 1);
    hours.innerText = hoursRandom;
}
printHours();


let water = document.querySelector('.water');
function printWater(){
    let waterRandom = Math.floor(Math.random() * 10 + 1);
    water.innerText = waterRandom;
}
printWater();

let steps = document.querySelector('.steps');
function printSteps(){
    let stepsRandom = Math.floor(Math.random() * 11000 + 500);
    steps.innerText = stepsRandom;
}
printSteps();



let healthCondition = document.querySelector('.health');
setTimeout(() =>{
    healthCondition.innerText = 'You are FIT! but মন খারাপ 🥹'
}, 3000);

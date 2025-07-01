let score = 0;
const buttons = document.querySelectorAll('button');
const label = document.querySelector('label');

function changeColors(){
    const whatButton = parseInt(Math.random()*9);
    buttons[whatButton].classList.add('red');
}

changeColors();

buttons.forEach(button => button.addEventListener('click', (event) => {
    if(event.target.classList.contains('red')){
        score++;
        event.target.classList.remove('red');
        changeColors();
    }
    label.innerText = 'score = ' + score;
}));

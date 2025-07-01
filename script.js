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
    if(score === 10) {
        document.getElementById('game').classList.add('none');
        label.innerHTML = 'You WIN ! <br><button id="restart">restart</button>';
    }
    if(score > 10) {
        document.getElementById('game').classList.add('none');
        label.innerHTML = 'You LOOSE ! AHAH don' + "'" + 't cheat <br><button id="restart">restart</button>';
    }
    try {
        document.getElementById('restart').addEventListener('click', event => {
            document.getElementById('game').classList.remove('none');
            score = 0;
            label.innerHTML = 'score = 0';
        })
    }
    catch (e){}
}));

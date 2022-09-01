let randomNumber1 = Math.floor(1 + Math.random() * 6);
let randomNumber2 = Math.floor(1 + Math.random() * 6);

let img1 = document.querySelector('.img1');
img1.setAttribute('src', `images/dice${randomNumber1}.png`);

let img2 = document.querySelector('.img2');
img2.setAttribute('src', `images/dice${randomNumber2}.png`)

let title = document.querySelector('h1');

if (randomNumber1 > randomNumber2) {
    title.innerHTML = '🚩 Player 1 Wins!';
} else if (randomNumber1 < randomNumber2) {
    title.innerHTML = 'Player 2 Wins! 🚩';
} else {
    title.innerHTML = 'Draw!';
}
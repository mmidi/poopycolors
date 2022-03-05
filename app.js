const makeRandColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
}

const blocks = document.querySelectorAll('.poopy');
// const imgs = document.querySelectorAll('img');

function colorize() {
    this.style.backgroundColor = makeRandColor();
}

for (let block of blocks) {
    block.addEventListener('mouseenter', colorize);
}

// function changeImg() {
//     this.src = 'https://cdn.discordapp.com/emojis/606100720369926164.gif?size=128&quality=lossless';
// }

// for (let img of imgs) {
//     img.addEventListener('mouseenter', changeImg);
// }


// better not be looking at this code RAGE
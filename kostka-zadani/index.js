console.log('funguju!');

let side = 1

const dice = document.getElementsByClassName("dice")

const turnDice = () => {
    side = side + 1;
    if (side === 7) { side = 1 }
    dice.src = `img/side${turnDice}.svg`
}

document.addEventListener('keydown', turnDice)
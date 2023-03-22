console.log('funguju!');

const ring = () => {
    let alarm = document.querySelector(".alarm")
    alarm.classList.add("alarm--ring")
    let zvuk = document.querySelector("audio")
    zvuk.play
}

let zprava = Number(prompt("kolik sekund uplyne než začne budík zvonit?"))*1000

//setTimeout(ring, 5000) --> zvoň každých 5 vteřin

setInterval(ring, zprava)

const cancelRing = () => {
    clearTimeout(ring)
}

let button = document.querySelector(".button");
button.addEventListener( "click", cancelRing)
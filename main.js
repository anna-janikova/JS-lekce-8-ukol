// tady je místo pro náš program

const JustFood = (pocet) => {
    let cena = pocet * 150
    return `catering od Just Food pro ${pocet} lidí za ${cena} Kč.`
}

const YourMama = (pocet) => {
    let cena = pocet * 250
    return `catering od Your Mama pro ${pocet} lidí za ${cena} Kč.`
}

const FlavourHaven = (pocet) => {
    let cena = pocet * 350
    return `catering od Flavour Haven pro ${pocet} lidí za ${cena} Kč.`
}


const createEvent = (udalost,pocet,catering) => {
    return `Událost ${udalost} s cateringem od ${catering(pocet)}`
}
document.body.innerHTML = createEvent ("Narozeniny medvídka Pů",150, YourMama)
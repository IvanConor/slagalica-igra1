let db = null;
let letters = null;
let words = null;

const domLetters = document.querySelectorAll('.generated-letter')

async function fetchDB() {
    const res = await fetch('/baza.json')
    const data = await res.json()
    db = data
    // console.log('fetched DB!')
    return db
}
async function getLetters() {
    const res = await fetchDB()
    const data = await res.slova
    letters = data
    // console.log('fetched Letters!')
    return letters
}
async function getWords() {
    const res = await fetchDB()
    const data = await res.reči
    words = data
    // console.log('fetched Words!')
    return words
}

async function getRandomLetter(letters) {
    let slova = await letters
    let randomLetter = await slova[Math.floor(Math.random() * slova.length)]
    return randomLetter
}

async function getLettersNumTimes(num) {
    for(let i = 0; i < num; i++) {
        let randLetter = await getRandomLetter(letters)
        console.log(randLetter)
        domLetters[i].textContent = randLetter
    }
}

getLetters()
    .then(() => {
        getLettersNumTimes(12)
    })
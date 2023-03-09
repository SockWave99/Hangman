document.getElementById('startBtn').addEventListener('click', () => {
    let word = document.getElementById('textInput').value.toUpperCase()
    document.getElementById('start').style.display = 'none'
    let img = document.createElement('img')
    img.id = 'img'
    img.src = 'Hangman images/image0.gif'
    document.body.appendChild(img)
    createSpaces(word)
    createLetters(word)
})

function createSpaces(word) {
    let guessDiv = document.createElement('div')
    guessDiv.id = 'spaces'
    for (let i = 0; i < word.length; ++i) {
        let underscore = document.createElement('span')
        underscore.className = 'spaces'
        underscore.innerHTML ='_ '
        guessDiv.appendChild(underscore)
    }
    document.body.appendChild(guessDiv)
}

function createLetters(word) {
    let mistakeCounter = 0
    let letterCounter = 0
    let lettersDiv = document.createElement('div');
    let wordArray = word.split('')
    let spaces = document.querySelectorAll('.spaces')
    lettersDiv.id = 'lettersDiv'
    for (let i = 65; i < 91; ++i) {
        let letter = document.createElement('button')
        letter.innerHTML = String.fromCharCode(i)
        lettersDiv.appendChild(letter)
        letter.id = i - 65
        letter.className = 'letters'
        let img = document.getElementById('img')
        letter.addEventListener('click', () => {
            letter.disabled = true
            if (wordArray.includes(letter.innerText)) {
                wordArray.forEach((element, index) => {
                    if (element === letter.innerText) {
                        spaces[index].innerText = letter.innerText.toLowerCase()
                        letterCounter += 1
                    }
                });
            } else if (mistakeCounter < 6) {
                mistakeCounter += 1
                img.src = 'Hangman images/image' + mistakeCounter  + '.gif'
            } 
            if (mistakeCounter == 6) {
                document.querySelector('.message').innerText = 'You lost... Your word was:\n'
                document.querySelector('.word').innerText = word.toLowerCase()
                document.querySelector('.winMessage').classList.add('showBtn')
            }
            if (letterCounter == wordArray.length) {
                document.querySelector('.message').innerText = 'Congratulations! Your word was:\n'
                document.querySelector('.word').innerText = word.toLowerCase()
                document.querySelector('.winMessage').classList.add('showBtn')
            }
        })
    }
    document.body.appendChild(lettersDiv)
}

document.getElementById('resetBtn').addEventListener('click', () => {
    document.querySelector('.winMessage').classList.remove('showBtn')
    document.getElementById('start').style.display = 'grid' 
    document.getElementById('img').remove()
    document.getElementById('spaces').remove()
    document.getElementById('lettersDiv').remove()
})
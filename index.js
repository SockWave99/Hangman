document.getElementById("startBtn").addEventListener("click", () => {
    let word = document.getElementById("textInput").value;
    document.getElementById("start").style.display = "none";
    let img = document.createElement("img");
    img.id = "img";
    img.src = "Hangman pics/image0.gif";
    document.body.appendChild(img);
    createSpaces(word);
    createLetters();
});

function createSpaces(word) {
    let guessDiv = document.createElement("div");
    guessDiv.id = "spaces";
    for (let i = 0; i < word.length; ++i) {
        let underscore = document.createElement("span");
        underscore.innerHTML ="_ ";
        guessDiv.appendChild(underscore);
    }
    document.body.appendChild(guessDiv);
}

function createLetters() {
    let lettersDiv = document.createElement("div");
    lettersDiv.id = "lettersDiv";
    for (let i = 65; i < 91; ++i) {
        let letter = document.createElement("button");
        letter.innerHTML = String.fromCharCode(i);
        lettersDiv.appendChild(letter);
        letter.id = i - 65;
        letter.className = "letters";
    }
    document.body.appendChild(lettersDiv);
}

for (let i = 0; i < 26; ++i) {
    document.getElementById("i").addEventListener("click", () => {

    });
}
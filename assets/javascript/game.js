// ====== VARIABLES ====== //

var secretWords = [
    "jambalaya", 
    "lasagna", 
    "cucumber", 
    "artichoke", 
    "pulled pork", 
    "osso bucco", 
    "ramen", 
    "pho dac biet"
];
var wins = 0;
var guessedLetters = [];
var moves2go = 13;
var word2guess = randomWord(secretWords);
var secretWord = guessDisplay(word2guess);

// ====== OUTPUT VARIABLES ====== //
var winsOutput = document.getElementById("wins");
var secretOutput = document.getElementById("secret-word");
var movesOutput = document.getElementById("turns-left");
var lettersOutput = document.getElementById("letters-guessed");



// ====== FUNCTIONS ====== //
function reInit() {
    guessedLetters = [];
    moves2go = 13;
    word2guess = randomWord(secretWords);
    secretWord = guessDisplay(word2guess);
}

function randomWord(dictionary) {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}

function guessDisplay(secretWord) {
    var blankWord = "";
    for (var i=0; i<secretWord.length; i++) {
        if (secretWord[i] === " ") {
            blankWord += " ";
        } else {
            blankWord += "_";
        }
    }
    return blankWord;
}

function alreadyGuessed(userInput, guessedLetters) {
    if (guessedLetters.includes(userInput)) {
        return true;
    } else {
        return false;
    }
}

function updateOutput (userInput, word2guess, secretWord) {
    for (var i=0; i<word2guess.length; i++) {
        if (userInput === word2guess[i]) {
            secretWord = reWriteOutput(userInput, secretWord, i);
        }
    }
    return secretWord;
}

function reWriteOutput(userInput, secretWord, i) {
    retval = secretWord.substr(0, i) + userInput + secretWord.substr(i+1, secretWord.length);
    return retval;
}

function check(userInput, word2guess, guessedLetters, secretWord) {
    // checks to see if the typed key is in the word and not already guessed
    if (word2guess.includes(userInput) && !alreadyGuessed(userInput, guessedLetters)) {
        console.log("true");
        secretWord = updateOutput(userInput, word2guess, secretWord);
        guessedLetters.push(userInput);
    } else if (alreadyGuessed(userInput, guessedLetters)) {
    } else {
        guessedLetters.push(userInput);
        moves2go --;
    }
    return secretWord
}

function onlyValid(x) {
    var val = x.charCodeAt(0);
    console.log(val);
    if (val < 123 && val > 64) {
        return x;
    }
}

winsOutput.innerHTML = wins;
secretOutput.innerHTML = secretWord;
movesOutput.innerHTML = moves2go;
lettersOutput.innerHTML = guessedLetters;

document.onkeyup = function(event) {

    userInput = event.key;
    secretWord = check(userInput, word2guess, guessedLetters, secretWord);

    if (secretWord === word2guess) {
        wins++;
        reInit();
    }

    winsOutput.innerHTML = wins;
    secretOutput.innerHTML = secretWord;
    movesOutput.innerHTML = moves2go;
    lettersOutput.innerHTML = guessedLetters;

    // console.log(userInput);
    // console.log(secretWord);
    // console.log(guessedLetters);
    // console.log(moves2go);

    



}





//dictionary - all the possible words to guess
//secretWord - randomly selected from the dictionary

//unknown 




// function checkWord(userInput, word2guess) {
//     // check if userInput not in lettersGuessed array
//     if (!guessedLetters.include(userInput)) {
//         // check if letter is in word2guess
//         if (word2guess.include(userInput)) {
//             // loop through word2guess
//             for (var i=0; i<word2guess.length; i++) {
//                 // if userInput === word2guess[i]
//                 if (userInput === word2guess[i]) {
//                     // secretWord[i] == userInput
//                     secretWord[i] = userInput;
//                 }
//             }
//         } else {
//             // if userInput is not in word2guess decrement moves2go
//             moves2go --;
//         }
//         // add userInput to lettersGuessed array
//         guessedLetters.push(userInput);
//     } 
// }


// var wordGuessGame = {
//     dictionary: [
//         "jambalaya", 
//         "lasagna", 
//         "cucumber", 
//         "artichoke", 
//         "pulled pork", 
//         "osso bucco", 
//         "ramen", 
//         "pho dac biet"
//     ], 
//     word2guess: function() {
//         this.dictionary[Math.floor(Math.random() * dictionary.length)]
//     },
//     initialDisplay: function(word2guess) {

//     }
// }
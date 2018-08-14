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
var guessedLetters = [];
var moves2go = 13;


function randomWord(dictionary) {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}

function initialDisplay(secretWord) {
    var blankWord = "";
    for (var i=0; i<secretWord.length; i++) {
        if (secretWord[i] === " ") {
            blankWord += "   ";
        } else {
            blankWord += " _ ";
        }
    }
    return blankWord;
}

function guessDisplay(secretWord) {
    init = initialDisplay(secretWord);
    return init;
}

function checkIfGuessed(userInput, lettersGuessed) {
    if (lettersGuessed.includes(userInput)) {
    } else {
        guessedLetters.push(userInput);
        moves2go --;
    }
}

// function checkWord(userInput, word2guess) {
//     // check if userInput not in lettersGuessed array
//     if (!guessedLetters.include(userInput)) {
//         // check if letter is in word2guess
//         if (word2guess.include(userInput)) {
//             // loop through word2guess
//             for (var i=0; i<word2guess.length; i++) {
//                 // if userInput === word2guess[i]
//                 if (userInput === word2guess[i]) {
//                     // guessOutput[i] == userInput
//                     guessOutput[i] = userInput;
//                 }
//             }
//         } else {
//             // if userInput is not in word2guess decrement moves2go
//             moves2go --;
//         }
//         // add userInput to lettersGuessed array
//         guessedLetters.push(userInput);
//     } 
//     // else 
//         // add userInput to lettersGuessed array
// }


var word2guess = randomWord(secretWords);
console.log(word2guess);
var guessOutput = guessDisplay(word2guess);


document.onkeyup = function(event) {

    userInput = event.key;
    checkWord(userInput, word2guess);
    

    // checkIfGuessed(userInput);

    console.log(userInput);
    console.log(guessOutput);
    console.log(guessedLetters);
    console.log(moves2go);


}





//dictionary - all the possible words to guess
//secretWord - randomly selected from the dictionary

//unknown 
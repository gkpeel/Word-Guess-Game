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
var guessedLetters = [];
var moves2go = 13;
var word2guess = randomWord(secretWords);
var guessOutput = guessDisplay(word2guess);



// ====== FUNCTIONS ====== //
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

function updateOutput (userInput, word2guess, guessOutput) {
    for (var i=0; i<word2guess.length; i++) {
        if (userInput === word2guess[i]) {
            guessOutput = reWriteOutput(userInput, guessOutput, i);
        }
    }
    return guessOutput;
}

function reWriteOutput(userInput, guessOutput, i) {
    retval = guessOutput.substr(0, i) + userInput + guessOutput.substr(i+1, guessOutput.length);
    return retval;
}

function check(userInput, word2guess, guessedLetters, guessOutput) {
    // checks to see if the typed key is in the word and not already guessed
    if (word2guess.includes(userInput) && !alreadyGuessed(userInput, guessedLetters)) {
        console.log("true");
        guessOutput = updateOutput(userInput, word2guess, guessOutput);
        guessedLetters.push(userInput);
    } else if (alreadyGuessed(userInput, guessedLetters)) {
    } else {
        guessedLetters.push(userInput);
        moves2go --;
    }
    return guessOutput
}


console.log(word2guess);

console.log(guessOutput.length);

document.onkeyup = function(event) {

    userInput = event.key;
    guessOutput = check(userInput, word2guess, guessedLetters, guessOutput);

    console.log(userInput);
    console.log(guessOutput);
    console.log(guessedLetters);
    console.log(moves2go);


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
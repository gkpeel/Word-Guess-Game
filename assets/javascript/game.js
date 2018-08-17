// ====== VARIABLES ====== //
// List of the World's largest 300 cities
var secretWords = [
    "Shanghai",
    "Beijing",
    "Karachi",
    "Istanbul",
    "Dhaka",
    "Tokyo",
    "Moscow",
    "Manila",
    "Tianjin",
    "Mumbai",
    "Sao Paulo",
    "Shenzhen",
    "Guangzhou",
    "Delhi",
    "Wuhan",
    "Lahore",
    "Seoul",
    "Chengdu",
    "Kinshasa",
    "Lima",
    "Jakarta",
    "Cairo",
    "Mexico City",
    "Tehran",
    "Baghdad",
    "Xian",
    "London",
    "New York City",
    "Nanjing",
    "Bangalore",
    "Ho Chi Minh City",
    "Bangkok",
    "Chongquin",
    "Bogota",
    "Lagos",
    "Riyadh",
    "Hong Kong",
    "Chennai",
    "Hangzhou",
    "Hyderabad",
    "Rio De Janeiro",
    "Zhengzhou",
    "Shenyang",
    "Qingdao",
    "Santiago",
    "Dalian",
    "Singapore",
    "Ahmadabad",
    "Suzhou",
    "St Petersburg",
    "Harbin",
    "Ankara",
    "Khartoum",
    "Yangon",
    "Casablanca",
    "Sydney",
    "Jinan",
    "Melbourne",
    "Changsha",
    "Kolkata",
    "Fuzhou",
    "Surat",
    "Abidjan",
    "Dar Es Salaam",
    "Shiziahuang",
    "Jeddah",
    "Faisalabad",
    "Nanning",
    "Alexandria",
    "Amman",
    "Los Angeles",
    "Kunming",
    "Changchun",
    "Yokohama",
    "Kabul",
    "Berlin",
    "Giza",
    "Urumqi",
    "Wuxi",
    "Busan",
    "Guayaquil",
    "Hanoi",
    "Hyderabad",
    "Addis Ababa",
    "Algiers",
    "Kano",
    "Mashhad",
    "Hefei",
    "Changzhou",
    "Taiyuan",
    "Rawalpindi",
    "Tangshan",
    "Madrid",
    "Nairobi",
    "Zibo",
    "Pune",
    "Ibadan",
    "Jaipur",
    "Guiyang",
    "Incheon",
    "Brasilia",
    "Tshwane",
    "Kanpur",
    "Salvador",
    "Buenos Aires",
    "Kiev",
    "Rome",
    "Surabaya",
    "Izmir",
    "Lucknow",
    "Basrah",
    "Toronto",
    "Gujranwala",
    "Chicago",
    "Taipei",
    "Quito",
    "Osaka",
    "Xuzhou",
    "Fortaleza",
    "Chittagong",
    "Pyongyang",
    "Bandung",
    "Kaohsiung",
    "Yaounde",
    "Daegu",
    "Taichung",
    "Belo Horizonte",
    "Puebla",
    "Douala",
    "Medellin",
    "Nagpur",
    "Cali",
    "Omdurman",
    "Nanchang",
    "Brisbane",
    "Bursa",
    "Tashkent",
    "Houston",
    "Nagoya",
    "Mogadishu",
    "Isfahen",
    "Paris",
    "Accra",
    "Managua",
    "Kowloon",
    "Lanzhou",
    "Baku",
    "Guatamala City",
    "Luanda",
    "Bucharest",
    "Havana",
    "Haiphong",
    "Manaus",
    "Baotou",
    "Multan",
    "Medan",
    "Maracaibo",
    "Barquisimeto",
    "Perth",
    "Jilin",
    "Sapporo",
    "Caracas",
    "Minsk",
    "Maiduguri",
    "Curitiba",
    "Vienna",
    "Port Harcourt",
    "Luoyang",
    "Aleppo",
    "Hamburg",
    "Datong",
    "Tabriz",
    "Kuala Lumpur",
    "Budapest",
    "Warsaw",
    "Bhopal",
    "Lusaka",
    "Adana",
    "Pimpri Chinchwad",
    "Damascus",
    "Palembang",
    "Sanaa",
    "Montreal",
    "Almaty",
    "Brazzaville",
    "Tijuana",
    "Ecatepec",
    "Patna",
    "Mecca",
    "Vadodara",
    "Conakry",
    "Santa Cruz",
    "Recife",
    "Harare",
    "Ludhiana",
    "Irbil",
    "Barcelona",
    "Makassar",
    "Cordoba",
    "Agra",
    "Leon",
    "Philadelphia",
    "Novosibirsk",
    "Phoenix",
    "Semarang",
    "Fukuoka",
    "Valencia",
    "Kobe",
    "Anshan",
    "Porto Alegre",
    "Daejon",
    "Phnom Penh",
    "Lubumbashi",
    "Benin",
    "Guadalajara",
    "Gwangju",
    "Nashik",
    "Qiqihar",
    "Kyoto",
    "Shiraz",
    "Munich",
    "Goiania",
    "Belem",
    "San Antonio",
    "Kawasaki",
    "Kharkiv",
    "Ekaterinburg",
    "Foshan",
    "San Diego",
    "Rajkot",
    "Milan",
    "Adelaide",
    "Guarulhos",
    "Ciudad Juarez",
    "Montevideo",
    "Meerut",
    "Dallas",
    "Kaduna",
    "Copenhagen",
    "Prague",
    "Soweto",
    "Sofia",
    "Maputo",
    "Nizhny Novgorod",
    "Kazan",
    "Varanasi",
    "Hiroshima",
    "Indore",
    "Rosario",
    "Samara",
    "Belgrade",
    "Campinas",
    "Ulsan",
    "Zapopan",
    "Chelyabinsk",
    "Omsk",
    "Barranquilla",
    "Dakar",
    "Jodphur",
    "Amritsar",
    "Monterrey",
    "Tripoli",
    "Tbilisi",
    "Rostov On Don",
    "Ufa",
    "Allahabad",
    "Nezahualcoyotl",
    "Birmingham",
    "Shubra El Kheima",
    "Tunis",
    "Yerevan",
    "Ranchi",
    "Haora",
    "Sendai",
    "Tegucigalpa",
    "Freetown",
    "Perm",
    "Volgograd",
    "Odessa",
    "Mexicali",
    "Seongnam",
    "Port-Au-Prince",
    "Peshawar",
    "Dnipropetrovsk",
    "Napoli",
    "Santo Domingo",
    "Kitakyushu",
    "Johannesburg",
    "Handan",
    "Stockholm",
    "Donetsk",
    "La Paz",
    "Medina",
    "Mosul",
    "Khulna",
    "Benghazi",
    "Durban",
    "Rabat",
    "Capetown",
    "Beirut",
];

// Name of background image files to choose
var backgrounds = [
    "shanghai",
    "new-york-city",
    "new-york-city-2",
    "paris",
    "london",
    "sao-paulo",
    "hong-kong",
    "moscow",
    "los-angeles"
]

function random(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

var wordGuessGame = {

    // High-level game logic properties
    wins: 0,
    moves2go: 13,
    gameWon: false,

    userInput: "",
    guessedLetters: [],

    word2guess: random(secretWords),
    secretWord: "",

    message: "Press any key to get started!",
    background: '<img id="background" src="assets/images/'+random(backgrounds)+'.jpg" />',

    // winsOutput: document.getElementById("wins").innerHTML = this.wins,
    // secretOutput: document.getElementById("secret-word").innerHTML = this.secretWord,
    // movesOutput: document.getElementById("turns-left").innerHTML = this.moves2go,
    // lettersOutput: document.getElementById("letters-guessed").innerHTML = this.guessedLetters,
    // messageOutput: document.getElementById("message-output").innerHTML = this.message,
    // backgroundOutput: document.getElementById("background").innerHTML = this.background,

    init: function() {
        this.createDisplay();
    },

    reInit: function() {
        this.guessedLetters = [];
        this.moves2go = 13;
        this.word2guess = random(secretWords);
        this.createDisplay();
        this.gameOver = false;
        this.background = '<img id="background" src="assets/images/'+random(backgrounds)+'.jpg" />';
    },

    // random: function(arr) {
    //     return arr[Math.floor(Math.random() * arr.length)];
    // },

    isIn: function() {
        return this.word2guess.toLowerCase().includes(this.userInput)
    },

    isValid: function() {
        var asciiVal = this.userInput.charCodeAt(0);
        if (asciiVal >= 97 && asciiVal <= 122 ) {
            return true;
        }
        return false;
    },

    createDisplay: function() {
        var str = "";
        for (var i=0; i<this.word2guess.length; i++) {
            if (this.word2guess[i] === " ") {
                str += " ";
            } else {
                str += "_";
            }
        }
        this.secretWord = str;
    },

    alreadyGuessed: function() {
        if (this.guessedLetters.includes(this.userInput.toUpperCase())) {
            return true;
        } else {
            return false;
        }
    },

    updateOutput: function() {
        for (var i=0; i<this.word2guess.length; i++) {
            if (this.userInput.toLowerCase() === this.word2guess[i].toLowerCase()) {
                this.secretWord = this.secretWord.substr(0, i) + this.word2guess.charAt(i) + this.secretWord.substr(i+1, this.secretWord.length);
            }
        }
    },

    check: function() {
        if (this.isValid) {
            if (this.isIn() && !this.alreadyGuessed()) {
                this.updateOutput();
                this.guessedLetters.push(this.userInput.toUpperCase());
            } else if (this.alreadyGuessed()) {
            } else {
                this.guessedLetters.push(this.userInput.toUpperCase());
                this.moves2go --;
            }
        }
    }
}

wordGuessGame.createDisplay();
console.log(wordGuessGame.secretWord);

var wordGuessGameDisplay = {
    winsOutput: document.getElementById("wins").innerHTML = wordGuessGame.wins, 
    secretOutput: document.getElementById("secret-word").innerHTML = wordGuessGame.secretWord,
    movesOutput: document.getElementById("turns-left").innerHTML = wordGuessGame.moves2go,
    lettersOutput: document.getElementById("letters-guessed").innerHTML = wordGuessGame.guessedLetters,
    messageOutput: document.getElementById("message-output").innerHTML = wordGuessGame.message,
    backgroundOutput: document.getElementById("background").innerHTML = wordGuessGame.background,
    output: function() {
        this.winsOutput = wordGuessGame.wins;
        this.secretOutput = wordGuessGame.secretWord;
        this.movesOutput = wordGuessGame.moves2go;
        this.lettersOutput = wordGuessGame.guessedLetters;
        this.messageOutput = wordGuessGame.message;
        this.backgroundOutput = wordGuessGame.background;
    }
}

// var wins = 0;
// var guessedLetters = [];
// var moves2go = 13;
// var word2guess = random(secretWords);
// var secretWord = guessDisplay(word2guess);
// var message = "Press any key to get started!";
// var gameWon = false;
// var background = '<img id="background" src="assets/images/'+random(backgrounds)+'.jpg" />';


// // ====== OUTPUT VARIABLES ====== //
// var winsOutput = document.getElementById("wins");
// var secretOutput = document.getElementById("secret-word");
// var movesOutput = document.getElementById("turns-left");
// var lettersOutput = document.getElementById("letters-guessed");
// var messageOutput = document.getElementById("message-output");
// var backgroundOutput = document.getElementById("background");

// // ====== FUNCTIONS ====== //

// // Reset and refresh variables
// function reInit() {
//     guessedLetters = [];
//     moves2go = 13;
//     word2guess = random(secretWords);
//     secretWord = guessDisplay(word2guess);
//     gameOver = false;
//     background = '<img id="background" src="assets/images/'+random(backgrounds)+'.jpg" />';
// }

// // Randomly select word from an array
// function random(arr) {
//     return arr[Math.floor(Math.random() * arr.length)];
// }

// // Filters out non-alphabetic keystrokes, (alt, shift, meta, space, etc.)
// function isValid(userInput) {
//     var asciiVal = userInput.charCodeAt(0);
//     if (asciiVal >= 97 && asciiVal <= 122 ) {
//         return true;
//     }
//     return false;
// }

// // Turn randomly selected word in it's blankspace counter-part
// function guessDisplay(secretWord) {
//     var blankWord = "";
//     for (var i=0; i<secretWord.length; i++) {
//         if (secretWord[i] === " ") {
//             blankWord += " ";
//         } else if (secretWord[i] === "-") {
//             blankWord += "-";
//         } else {
//             blankWord += "_";
//         }
//     }
//     return blankWord;
// }

// // See if userInput has already been guessed
// function alreadyGuessed (userInput, guessedLetters) {
//     if (guessedLetters.includes(userInput.toUpperCase())) {
//         return true;
//     } else {
//         return false;
//     }
// }

// // Finds index of userInput in word2guess, reWrites secretWord with those letters
// function updateOutput (userInput, word2guess, secretWord) {
//     for (var i=0; i<word2guess.length; i++) {
//         if (userInput.toLowerCase() === word2guess[i].toLowerCase()) {
//             secretWord = reWriteOutput(word2guess, secretWord, i);
//         }
//     }
//     return secretWord;
// }

// // Inserts index of matched letter with correctly guessed letter into the secretWord display
// function reWriteOutput(userInput, secretWord, i) {
//     retval = secretWord.substr(0, i) + word2guess.charAt(i) + secretWord.substr(i+1, secretWord.length);
//     return retval;
// }

// // Checks userInputs against the word
// function check(userInput, word2guess, guessedLetters, secretWord) {
//     // Checks to see if the typed key is in the word and not already guessed
//     if (word2guess.toLowerCase().includes(userInput) && !alreadyGuessed(userInput, guessedLetters)) {
//         secretWord = updateOutput(userInput, word2guess, secretWord);
//         guessedLetters.push(userInput.toUpperCase());
//     } else if (alreadyGuessed(userInput, guessedLetters)) {
//     } else {
//         guessedLetters.push(userInput.toUpperCase());
//         moves2go --;
//     }
//     return secretWord
// }

// winsOutput.innerHTML = wins;
// secretOutput.innerHTML = secretWord;
// movesOutput.innerHTML = moves2go;
// lettersOutput.innerHTML = guessedLetters;
// messageOutput.innerHTML = message;

wordGuessGameDisplay.output();

document.onkeyup = function(event) {

    wordGuessGame.userInput = event.key;
    wordGuessGame.check();
    wordGuessGameDisplay.output();
    

//     userInput = event.key;
//     console.log(userInput.charCodeAt(0));

//     if (isValid(userInput) && secretWord !== word2guess && moves2go !== 0) {
//         secretWord = check(userInput, word2guess, guessedLetters, secretWord);
//     }

//     if (secretWord === word2guess && gameWon === false) {
//         wins++;
//         gameOver = true;
//         messageOutput.innerHTML = "You won! The city was " + word2guess +".<br>Press ENTER to start a new game.";
//     }

//     if (moves2go === 0) {
//         wins = 0;
//         gameOver = true;
//         secretWord = word2guess;
//         messageOutput.innerHTML = "You lost!<br>Press ENTER to start a new game.";
//     }

//     winsOutput.innerHTML = wins;
//     secretOutput.innerHTML = secretWord;
//     movesOutput.innerHTML = moves2go;
//     lettersOutput.innerHTML = guessedLetters.join(", ");
//     backgroundOutput.innerHTML = background;

//     // console.log(userInput);
//     // console.log(secretWord);
//     // console.log(guessedLetters);
//     // console.log(moves2go);

}

document.onkeydown = function(event) {
    if (event.key=== "Enter") {
        wordGuessGame.reInit();
    }
}

// console.log(wordGuessGame.word2guess);
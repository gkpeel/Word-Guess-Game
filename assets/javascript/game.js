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
    "Tshwane (Pretoria)",
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
    "Aleppo(Halab)",
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

var wins = 0;
var guessedLetters = [];
var moves2go = 13;
var word2guess = randomWord(secretWords);
var secretWord = guessDisplay(word2guess);
var message = "Press any key to get started!";
var gameWon = false;

// ====== OUTPUT VARIABLES ====== //
var winsOutput = document.getElementById("wins");
var secretOutput = document.getElementById("secret-word");
var movesOutput = document.getElementById("turns-left");
var lettersOutput = document.getElementById("letters-guessed");
var messageOutput = document.getElementById("message-output");


// ====== FUNCTIONS ====== //

// Reset and refresh variables
function reInit() {
    guessedLetters = [];
    moves2go = 13;
    word2guess = randomWord(secretWords);
    secretWord = guessDisplay(word2guess);
    gameOver = false;
}

// Randomly select word from an array
function randomWord(dictionary) {
    return dictionary[Math.floor(Math.random() * dictionary.length)];
}

// Filters out non-alphabetic keystrokes, (alt, shift, meta, space, etc.)
function isValid(userInput) {
    var asciiVal = userInput.charCodeAt(0);
    if (asciiVal >= 97 && asciiVal <= 122 ) {
        return true;
    }
    return false;
}

// Turn randomly selected word in it's blankspace counter-part
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

// See if userInput has already been guessed
function alreadyGuessed(userInput, guessedLetters) {
    if (guessedLetters.includes(userInput.toUpperCase())) {
        return true;
    } else {
        return false;
    }
}

// Finds index of userInput in word2guess, reWrites secretWord with those letters
function updateOutput (userInput, word2guess, secretWord) {
    for (var i=0; i<word2guess.length; i++) {
        if (userInput.toLowerCase() === word2guess[i].toLowerCase()) {
            secretWord = reWriteOutput(word2guess, secretWord, i);
        }
    }
    return secretWord;
}

// Inserts index of matched letter with correctly guessed letter into the secretWord display
function reWriteOutput(userInput, secretWord, i) {
    retval = secretWord.substr(0, i) + word2guess.charAt(i) + secretWord.substr(i+1, secretWord.length);
    return retval;
}

// Checks userInputs against the word
function check(userInput, word2guess, guessedLetters, secretWord) {
    // Checks to see if the typed key is in the word and not already guessed
    if (word2guess.toLowerCase().includes(userInput) && !alreadyGuessed(userInput, guessedLetters)) {
        secretWord = updateOutput(userInput, word2guess, secretWord);
        guessedLetters.push(userInput.toUpperCase());
    } else if (alreadyGuessed(userInput, guessedLetters)) {
    } else {
        guessedLetters.push(userInput.toUpperCase());
        moves2go --;
    }
    return secretWord
}

winsOutput.innerHTML = wins;
secretOutput.innerHTML = secretWord;
movesOutput.innerHTML = moves2go;
lettersOutput.innerHTML = guessedLetters;
messageOutput.innerHTML = message;

document.onkeyup = function(event) {

    userInput = event.key;
    console.log(userInput.charCodeAt(0));

    if (isValid(userInput) && secretWord !== word2guess && moves2go !== 0) {
        secretWord = check(userInput, word2guess, guessedLetters, secretWord);
    }

    if (secretWord === word2guess && gameWon === false) {
        wins++;
        gameOver = true;
        messageOutput.innerHTML = "You won! The city was " + word2guess +".<br>Press ENTER to start a new game.";
    }

    if (moves2go === 0) {
        wins = 0;
        gameOver = true;
        secretWord = word2guess;
        messageOutput.innerHTML = "You lost!<br>Press ENTER to start a new game.";
    }

    winsOutput.innerHTML = wins;
    secretOutput.innerHTML = secretWord;
    movesOutput.innerHTML = moves2go;
    lettersOutput.innerHTML = guessedLetters.join(", ");

    // console.log(userInput);
    // console.log(secretWord);
    // console.log(guessedLetters);
    // console.log(moves2go);

}

document.onkeydown = function(event) {
    if (event.key=== "Enter" && gameOver === true && secretWord === word2guess) {
        reInit();
    }
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
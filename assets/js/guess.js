// Define variables
var maxGuesses = 10;
var wins = 0;
var losses = 0;
var guesses = [];
var category = [];
var word = "";
var dashes = [];
var categories = {
  travel: [
    "suitcase",
    "clothes",
    "shoes",
    "tooth brush",
    "tooth paste",
    "sun glasses",
    "hat",
    "money",
    "hotel",
    "rental car",
    "hairbrush"
  ],
  animals: ["goat", "bird", "cat", "hippo", "lion", "cheetah"],
  colors: ["red", "blue", "green", "fusia", "purple"]
};
var messages = {
  newGame: "Choose a category to begin!",
  howToPlay: "Guess letters by typing them!",
  lose: "You Lose!! Select a new category to play again!",
  win: "You win!! Select a new category to play again!",
  alreadyGuessed: "You already guessed that letter!",
  keepGuessing: "Keep guessing!"
}

function selectCategory(categoryName) {
  setNewGame();
  // Use category name from variable to get category
  category = categories[categoryName];
  // Pick a random word from the words list
  word = category[Math.floor(Math.random() * category.length)];
   console.log(word);
  // Loop through each character in selected word, pushing dashes to each character
  for (var i = 0; i < word.length; i++) {
    if (word[i] === " ") {
      dashes.push("&nbsp;");
    } else {
      dashes.push("_");
    }
  }
  var stringOfDashes = dashes.join(" ");
  document.getElementById("dashes").innerHTML = stringOfDashes;
  document.getElementById("message").innerHTML = messages.howToPlay;
}



function setNewGame(){
  window.onkeydown = function(e) {
    submitGuess(e.key)
  }
  guesses = [];
  category = [];
  word = "";
  dashes = [];
  document.getElementById("message").innerHTML = messages.howToPlay;
  document.getElementById("guessesLeft").innerHTML = maxGuesses;
  document.getElementById("lettersGuessed").innerHTML = "";
  
} 


function submitGuess(letter) {
  if (guesses.includes(letter)|| dashes.includes(letter)){
  document.getElementById("message").innerHTML = messages.alreadyGuessed;
  setTimeout(function(){
    document.getElementById("message").innerHTML = messages.howToPlay;
  }, 1500)
  }  

  if (word.includes(letter)){
    for (i = 0; i < word.length; i++) {
    if (word[i] === letter.toLowerCase()) {
      dashes[i] = letter.toLowerCase();
    }
  } 
  } else if (!guesses.includes(letter)) {
      guesses.push(letter);
    }
    
    
  var lettersGuessed = guesses.join(" ");
  var guessesLeft = maxGuesses - guesses.length;

    if (!dashes.includes("_")) {
      // You win!!
      wins++
      document.getElementById("message").innerHTML = messages.win;
      document.getElementById("wins").innerHTML = "wins: " + wins;
      window.onkeydown = null;
    } else if (guessesLeft < 1) {
    // You lose!
    losses++
    document.getElementById("message").innerHTML = messages.lose;
    document.getElementById("losses").innerHTML = "losses: " + losses;
    window.onkeydown = null;
  }
  
  var stringOfDashes = dashes.join(" ");
  document.getElementById("lettersGuessed").innerHTML = lettersGuessed;
  document.getElementById("guessesLeft").innerHTML = guessesLeft;
  document.getElementById("dashes").innerHTML = stringOfDashes;
}


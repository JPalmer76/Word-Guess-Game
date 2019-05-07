// Define variables
var category = [];
var word = "";
var dashes = [];
var categories = {
    travel: [
        'suitcase',
        'clothes',
        'shoes',
        'tooth brush',
        'tooth paste',
        'sun glasses',
        'hat',
        'money',
        'hotel',
        'rental car',
        'hairbrush'
    ],
    animals: [
        'goat',
        'bird',
        'cat',
        'hippo',
        'lion',
        'cheetah'
    ],
    colors: [
        'red',
        'blue',
        'green'
    ]
}


function selectCategory(categoryName) {
    // Reset dashes array back to zero
    var dashes = []
    // Use category name from variable to get category
    var category = categories[categoryName];
    // Pick a random word from the words list
    var word = category[Math.floor(Math.random() * category.length)];
    console.log(word);
    // Loop through each character in selected word, pushing dashes to each character
    for (var i = 0; i < word.length; i++) {
        if (word[i] === " ") {
            dashes.push("&nbsp;");
        } else {
            dashes.push("_");
        }    
    }
    // Joined the dashes strings' and return to inner html
    var stringOfDashes = dashes.join(' '); 
    document.getElementById('dashes').innerHTML = stringOfDashes;   
}

// put the answer array in the apparopriate div


// create a variable

//  var remainningLetters = word.length;

//  ************* THE MAIN GAME LOOP *****************



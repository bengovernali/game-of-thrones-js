console.log(`There are ${characters.length} characters in the array.`);

//How many characters name's start with the letter 'A'
let charactersWithA = 0;

characters.forEach(function(character) {
    if (character.name[0] == 'A') {
        charactersWithA += 1;
    };
});

console.log(`There are ${charactersWithA} characters whos name start with the letter 'A'`);

//How many characters name's start with the letter 'Z'

let charactersWithZ = 0;

characters.forEach(function(character) {
    if (character.name[0] == 'Z') {
        charactersWithZ += 1;
    };
});

console.log(`There are ${charactersWithZ} characters whos name starts weith the letter 'Z'`);

//How many characters are dead

let deadCharacters = 0;

characters.forEach(function(character) {
    if (character.died != "") {
        deadCharacters += 1;
    };
});

console.log(`There are ${deadCharacters} dead characters`);

//Who has the most titles?

let titleCount = 0;
let characterWithMostTitles = [];

characters.forEach(function(character) {
    if (character.titles.length > titleCount) {
        titleCount = character.titles.length;
        characterWithMostTitles = character.name;
    };
});

console.log(`${characterWithMostTitles} has the most titles at a total of ${titleCount} titles`)

//How many are Valyrian

let valyrianCount = 0;

characters.forEach(function(character) {
    if (character.culture == "Valyrian") {
        valyrianCount += 1
    };
});

console.log(`There are ${valyrianCount} Valyrians`);

//What actor plays "Hot Pie"

let hotPieActor = "";

characters.forEach(function(character) {
    if (character.name == "Hot Pie") {
        hotPieActor = character.playedBy;
    };
});

console.log(hotPieActor);

//How many characters are not in the tv show

let notTV = 0;

characters.forEach(function(character) {
    if (character.tvSeries == "") {
        notTV += 1;
    };
});

console.log(`There are ${notTV} characters not in the TV series`);

//list of Targaryens

let targaryens = [];

characters.forEach(function(character) {
    if (character.name.includes("Targaryen")) {
        targaryens.push(character.name);
    };
});

console.log(targaryens);
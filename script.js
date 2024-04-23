let firstName = prompt("Welcome to Sakura mini golf! What is your name?");
let holeCount = prompt("Hi Hoshi!,  Would you like to play 3 or 6 holes?");
let holeCount1 = prompt("How many putts for hole 1?");
let holeCount2 = prompt("How many putts for hole 2?");
let holeCount3 = prompt("How many putts for hole 3?");
let holeCount4 = prompt("How many putts for hole 4?");
let holeCount5 = prompt("How many putts for hole 5?");
let holeCount6 = prompt("How many putts for hole 6?");


console.log(firstName); //log "Hoshi"
console.log(holeCount); //log "6"
console.log(holeCount1); //log "1"
console.log(holeCount2); //log "2"
console.log(holeCount3); //log "4"
console.log(holeCount4); //log "4"
console.log(holeCount5); //log "1"
console.log(holeCount6); //log "3"
console.log("Good game, Hoshi! Your total par was: -3.")

/*
The course par is 18 (3 for each of the 6 holes) 
The user’s score starts at 0.
The user got a hole-in-one on the first hole with just one putt, bringing their score to 1. 
The user putted twice on the second hole, bringing their score to 3.
The user putted four times on the third hole, bringing their score to 7.
The user putted four on the fourth hole, bringing their score to 11.
The user got a hole-in-one on the fifth hole with just one putt, bringing their score to 12.
The user putted three times on the last and sixth hole, totaling their score at 15.
The difference between the course par (18) and the user’s score (15) is 3, meaning they hit 3 less putts than expected for the course, so the user’s total par is -3.
*/

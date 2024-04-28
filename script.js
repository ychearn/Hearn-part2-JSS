let firstName = prompt("Welcome to Sakura mini golf! What is your name?");
let holeCount = prompt("Would you like to play 3 or 6 holes?");
let totalputs = 0
let par = 0
console.log(holeCount); 
if(holeCount==="3"){
console.log("user selected 3 holes")
let holeCount1 = prompt("How many putts for hole 1?");
let holeCount2 = prompt("How many putts for hole 2?");
let holeCount3 = prompt("How many putts for hole 3?");
par = 9
totalputs = Number(holeCount1) + Number(holeCount2) + Number(holeCount3)
} else if(holeCount==="6"){
console.log("user selected 6")
let holeCount1 = prompt("How many putts for hole 1?");
let holeCount2 = prompt("How many putts for hole 2?");
let holeCount3 = prompt("How many putts for hole 3?");
let holeCount4 = prompt("How many putts for hole 4?");
let holeCount5 = prompt("How many putts for hole 5?");
let holeCount6 = prompt("How many putts for hole 6?");
par = 18
}
console.log(totalputs);
if(totalputs===par){
console.log("even with par")
}

// let holeCount1 = prompt("How many putts for hole 1?");
// let holeCount2 = prompt("How many putts for hole 2?");
// let holeCount3 = prompt("How many putts for hole 3?");
// let holeCount4 = prompt("How many putts for hole 4?");
// let holeCount5 = prompt("How many putts for hole 5?");
// let holeCount6 = prompt("How many putts for hole 6?");

// console.log(firstName); //log "Hoshi"
// console.log(holeCount); //log "6"
// console.log(holeCount1); //log "1"
// console.log(holeCount2); //log "2"
// console.log(holeCount3); //log "4"
// console.log(holeCount4); //log "4"
// console.log(holeCount5); //log "1"
// console.log(holeCount6); //log "3"
// console.log("Good game! Your total par was: -3."Yonrheal
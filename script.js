let firstName = prompt("Welcome to Sakura mini golf! What is your name?");
let holeCount = prompt("Would you like to play 3 or 6 holes?");
let totalputs = 0
let par = 0
console.log(holeCount); 
let total;
if(holeCount==="3"){
console.log("user selected 3 holes")
let holeCount1 = prompt("How many putts for hole 1?");
let holeCount2 = prompt("How many putts for hole 2?");
let holeCount3 = prompt("How many putts for hole 3?");
par = 9
totalputs = Number(holeCount1) + Number(holeCount2) + Number(holeCount3)
total = par - totalputs
} else if(holeCount==="6"){
console.log("user selected 6")
let holeCount1 = prompt("How many putts for hole 1?");
let holeCount2 = prompt("How many putts for hole 2?");
let holeCount3 = prompt("How many putts for hole 3?");
let holeCount4 = prompt("How many putts for hole 4?");
let holeCount5 = prompt("How many putts for hole 5?");
let holeCount6 = prompt("How many putts for hole 6?");
par = 18
totalputs = Number(holeCount1) + Number(holeCount2) + Number(holeCount3)
}
console.log(totalputs);
if (total ===0){
console.log(`Good game, ${firstName}. Your total par was: 0.`)
} else if (total < 0){
console.log(`Great job, ${firstName} Your total par was: ${par}.`)
} else { (total > 0)
console.log(`Nice try, ${firstName}... Your total par was: ${par}.`)
}
// let holeCount1 = prompt("How many putts for hole 1?");
// let holeCount2 = prompt("How many putts for hole 2?");
// let holeCount3 = prompt("How many putts for hole 3?");
// let holeCount4 = prompt("How many putts for hole 4?");
// let holeCount5 = prompt("How many putts for hole 5?");
// let holeCount6 = prompt("How many putts for hole 6?");

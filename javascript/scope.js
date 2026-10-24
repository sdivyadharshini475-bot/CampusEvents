//create a global campusname and print it from inside a function
const campusName="S.A. Engineering College";
function displayCampus() {
    console.log(campusName);
}
displayCampus();
//create an if block with let and var variables test which is accessible outside
if (true) {
    let a=10;
    var b=20;
}
console.log(b);
//create makecounter() with a private count variable and return a function that increment it
function makeCounter() {
    let count=0;
    return function() {
        count++;
        console.log(count);};
}
const counter=makeCounter();
counter();
counter();
counter();
//predict var and let behavior when logged before declaration .run safe example separatly
console.log(x);
var x=10;
console.log(y);
let y=20;
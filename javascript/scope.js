const campusName="S.A. Engineering College";
function displayCampus() {
    console.log(campusName);
}
displayCampus();

if (true) {
    let a=10;
    var b=20;
}
console.log(b);


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

console.log(x);
var x=10;
console.log(y);
let y=20;
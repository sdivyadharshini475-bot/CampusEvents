
function total(price,quanlity){
    return price*quanlity;
}
console.log(total(10,5));

function greet1(name){
    console.log("Hello "+name);
}
greet1("Yukesh");

const events=["tech","Dance","Singing","Sport","workshop"];
console.log(events.length);

let arr=[10,20,30,40,50];
let result=arr.map(num=>num*2);
console.log(result);

let num=[10,20,30,40,50];
let result1=num.filter(num=>num>10);
console.log(result1);

let price=[20,30,40];
let result2=price.reduce((Sum,number)=>Sum+number,0);
console.log(result2);


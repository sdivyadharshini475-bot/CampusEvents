console.log(Number("12")+3);
console.log(String(13))

let age=20;
let seatsLeft=5;
if(age>=18 && seatsLeft>0){
    console.log("You can register");
}
else{
    console.log("Register unavailable");
}

let day="Saturday";
switch(day){
    case "Saturday":
        console.log("Weekend");
        break;
    case "Sunday":
        console.log("Weekend");
        break;
    default:
        console.log("Weekend");
}

for(let i=1;i<=5; i++){
    if(i===3){
        continue;
    }
    if(i===5){
        break;
    }
    console.log(i);
}

for(let i=1;i<=5;i++){
    console.log(i);
}
console.log("------task1-------");
console.log("Name: Divya");
console.log("Course: b.tech CSBS");
console.log("Number:10");
console.log("------task2-------");
let event_name="Dance";
let ticket_price=1000;
let seat_left=2;
console.log("event_name:",event_name);
console.log("ticket_price:",ticket_price);
console.log("seat_left:",seat_left);
console.log("------task3-------");
let t1=600;
let t2=100;
let t3=200;
let sum=t1+t2+t3;
if(sum>500){
    console.log("total price exceed");
}
else{
    console.log("total price not exceed");
}
console.log("------task4-------");
let a=10;
if(a>0){
    console.log("positive");
}
else if(a<0){
    console.log("Negative");
}
else{
    console.log("Zero");
}
console.log("------task5-------");
let n=10
for(i=2;i<=n;i++){
    if(i%2==0){
        console.log(i);
    }
}


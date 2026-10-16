function greet(){
    console.log("Hello");
}
greet();

function greet1(name){
    console.log("Hello "+name);
}
greet1("Yukesh");
greet1("Divya");

function add(a,b){
    return a+b;
}
const result=add(5,6);
console.log(result);
const square=n => n*n;
console.log(square(4));
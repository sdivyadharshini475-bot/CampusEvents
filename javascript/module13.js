//task A
console.log("one");
setTimeout(() => console.log("Two"), 0);
console.log("Three");

//task B
console.log("one");
setTimeout(() => console.log("Two"), 200);
console.log("Three");

//task C
console.log("Registration received");
setTimeout(() => console.log("Registration confirmed"), 0);
console.log("Then delayed confirmed");

//task D
console.log("A");
setTimeout(() => console.log("B"),0);
Promise.resolve().then(()=>console.log("C"));
console.log("D");         
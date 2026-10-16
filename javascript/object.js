const book={
    title:"Java",
    author:"John",
    price:500
};
book.price=600;
console.log(book);
console.log("Updated Price:",book.price);

const user={
    name:"Divya",
    address:{
        city:"Chennai",
        state:"Tamil Nadu"
    }
};
console.log(user.address.city);

const products=[
    {name:"lap",price:50000},
    {name:"Mobile",price:20000},
    {name:"Headphones",price:2000}
];
products.forEach(product=>{
    console.log(product.name);
})

const student={
    name:"Divya",
    age:20,
    course:"CSBS"
};
const{name,course}=student;
console.log(name);
console.log(course);

const arr1=[10,20,30];
const arr2=[40,50,60];
const copyArray=[...arr1];
const combinedArray=[...arr1,...arr2];
console.log("Copied Array:",copyArray);
console.log("Combined Array:",combinedArray);

function add(...numbers) {
    let sum = 0;
    for (let num of numbers) {
        sum += num;
    }
    return sum;
}
console.log(add(10, 20));
console.log(add(10, 20, 30));
console.log(add(1, 2, 3, 4, 5));

const user1 = {
    name: "Divya",
    address: {
        city: "Chennai"}};
const user2 = {
    name: "Ravi"};
console.log(user1.address?.city ?? "City not available");
console.log(user2.address?.city ?? "City not available");


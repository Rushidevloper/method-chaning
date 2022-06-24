//function  types in java script
function stud() {
    console.log("Rushi");
}

//function statement
var a= function b(){
    console.log("This is student");
}
a( )

//function ananomus
var x=function () {
    console.log("This is student");
}

//first class and call back function
function p(callback) {
    callback()
}
function q() {
    console.log("This is q");
}
p(q)
p(function (){console.log("Hari");})

//method chaining
function demo() {
    return function demo2(){
       return("This is demo2");
    }
    
}
var demo1=demo()
demo1();
var result=demo()()
console.log(result);

//ES6 variable
var name="Hari"
console.log(name);
var name="Shryesh"
console.log(name);
let full_name="Rushikesh Ravindra Shendage"
console.log(full_name);//let your are not redeclare
full_name="Hari chopra"
console.log(full_name);

//const use for you can dont change value
const fn="Sujit Kolekar"
console.log(fn);


const obj={name:""}
obj.name="Raj"
console.log(obj);

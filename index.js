

//Variables in js 
// variable are the cantener for Storing Data.
// js variable can be declared 4  way.
// automatically ,var ,let ,const.

//Automatically..........
 x = 99;
 y = 99;
 z = x + y;
 console.log(z);


// var............ 

var x = 12;
var y = 12;
console.log(x + y);

function abcd (){
    for ( var i = 0; i <= 12; i++){
        console.log(i);
    }
    console.log(i);
 }

 abcd();                     // Output = 13;

// let..............
// variable defined with let have Block Scope.
// its can`t be redeclared.
// it`s introduce in ES6 2015.
let x = 55;
let y = 55;
console.log( x + y );

function vishal (){
    for ( let i = 0; i <= 12; i++){
        console.log(i);
    }
    console.log(i);
 }

 vishal();                           //Output = 12;


//const.......... 

const x = 44;
const y = 44;
console.log(x + y);

// const use in function, Array, Object.

const arry  = ["Vishal","babar","What is"];
arry[2];
console.log(arry);

const Object = {
    name:"Vishal",
    age : 22,
    City: "Jalna",
}
console.log(Object);

function vishal(){
    for (const i = 0; i <=12; i++){
        console.log(i);
    }
}
vishal();


// function.............

const a = 12;
const b = 22;
function vishall( a , b){
    return a + b;
}
vishall();

const sum = ()=>{
    console.log("hyy how are u");
}

sum();

// loops in js............................
// for loop, while loops, do while loops, for of loop, for in loop

// for loop..

for ( let i = 0; i < 12; i++){
    console.log(i);

}

// canditions in js...

let number = 100;

if ( number > 66){
    console.log("yessss..");
}
else{
    console.log("nobbb...");
}

let n = prompt("What is u Name....");

if ( n > 12){
    console.log("ooooo realy...");
    }
    else if( n > 80){
        console.log("What is u age!");
    }
    else{
        console.log("oooooo");
    }


    // Function in js......

    function age(){
    const n = prompt("What is u Name....");

    if ( n > 12){
    console.log("ooooo realy...");
    }
    else if( n > 80){
        console.log("What is u age!");
    }
    else{
        console.log("oooooo");
    }
    }
    age();

    // Arrow function....

    const name = ()=>{

    let n = prompt("What is u Name....");

    if ( n > 12){
    console.log("ooooo realy...");
    }
    else if( n > 80){
        console.log("What is u age!");
    }
    else{
        console.log("oooooo");
    }


    }

   // Arrays......

   const cars = ["Vishal", "Babar","Number"];
   console.log(cars);
   cars[3]= "Macdonal";


   // object in js

  var car ={
    name : "vishal",
    age : 44,
    color : "black",

    fullName : function(){
        return this.name + "what is u age  "+ this.age;
    }
  }

  console.log(car);


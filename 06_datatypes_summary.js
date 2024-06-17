//primitive datatypes they are passed as copy
// string number Boolean null undefined symbol BigInt


const score=123
const valueScore=123.4
const isPossible=true
const outsideTemp=null
let userEmail;


const id=Symbol('123')
const anotherId=Symbol('123')
console.log(id==anotherId);

const bigNumber=23443655676788799789780n

//reference(Non premitive)
//Array objects functions

const fruits=["apple","mango","orange"];
let myInfo={
    name:"sarvesh",
    age:21,
    EmpId:1042,
}

const myFunc=function(){
    console.log("hello");
}

//======================================Memory=============================================
//stack(premitive) and heap(Non premitive)

let mydate=new Date()
console.log(mydate.toString());
console.log(mydate.toDateString());
console.log(mydate.toISOString())
console.log(mydate.toLocaleDateString());
console.log(mydate.toLocaleString());


console.log(typeof mydate); //object

//in js month start from 0
let createMyDate=new Date(2024,0,23)
console.log(createMyDate.toDateString());


let myTimeStamp=Date.now()
console.log(myTimeStamp);
console.log(createMyDate.getTime()-myTimeStamp);


//convert into sec
// console.log(Math.floor(myTimeStamp/1000));

mydate.toLocaleString('default',{
    weekday:'long'
})
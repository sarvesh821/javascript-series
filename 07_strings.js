const name="sarvesh"
const repoCount=50


//avoid to write such string
// console.log(name+repoCount);


console.log(`hello, my name is ${name} and my repo count is ${repoCount}`);

//another method to declare the string

const gameName=new String("sarvesh-goyal")
// console.log(gameName.__proto__);
// console.log(gameName.toUpperCase());
// console.log(gameName.charAt(2));
// console.log(gameName.indexOf('a'));

const newString=gameName.substring(0,4)
// console.log(newString);

const anotherString=gameName.slice(-4,)
console.log(anotherString);

const anothernewString="    sarvesh    "
console.log(anothernewString);
console.log(anothernewString.trim());


const url="https://sarvesh.com%20goyal"
console.log(url.replace('%20','-'));

console.log(gameName.split('-'));
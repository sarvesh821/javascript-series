
//================================================FILTER=============================================

const nums=[1,2,3,4,5,6,7,8,9.10]
const newNums =nums.filter((num)=> num>5)
// console.log(newNums);
//==================================================MAP=================================================
const arr=[1,2,3,4,5,6,7,8,9,10]
const newArr=arr.map((num)=>num+10)
// console.log(newArr);

const multiArr=arr.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>24)
console.log(multiArr);

//=================================================REDUCE=================================================


const myNums=[1,2,3]
// const myAns=myNums.reduce(function(acc,currVal){
//     console.log(`acc : ${acc} and currVal : ${currVal}`);
//     return acc+currVal
// },0)
const myAns=myNums.reduce((acc,currVal)=>(acc+currVal),0)
console.log(myAns);
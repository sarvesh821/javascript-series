const myArr=[1,2,3,4,5]
const arr2=["sarvesh","goyal"]
const arr3=new Array(1,2,3,4,5)
console.log(arr3);

arr3.push(7)
arr3.push(6)
console.log(arr3);
arr3.pop()
// console.log(arr3);

arr3.unshift(87)
console.log(arr3);
arr3.shift()
console.log(arr3);
// console.log(arr3.includes(7));
// console.log(arr3.indexOf(90));

const newArr=myArr.join()
// console.log(newArr);

// console.log('A',myArr);

const myn1=myArr.slice(1,3)
// console.log('B',myArr);
// console.log(myn1);

//in splice range include last digit also and also remove range from original arr
const myn2=myArr.splice(1,3)
// console.log('C',myArr);
// console.log(myn2);



//======================================part2==================================================================


const marvel_heros=['spiderman','thor','ironman']
const dc_heros=['superman','flash','batman']
// marvel_heros.push(dc_heros)
// console.log(marvel_heros);



console.log(marvel_heros.concat(dc_heros));

const all_new_heros=[...marvel_heros,...dc_heros]
console.log(all_new_heros);

const anotherArr=[1,2,3,[4,5,6],7,[8,9,[6,7]]]
const new_another_arr=anotherArr.flat(Infinity)
console.log(new_another_arr);

console.log(Array.isArray('sarvesh'));
console.log(Array.from('sarvesh'));


let score1=100
let score2=200
let score3=300

console.log(Array.of(score1,score2,score3));
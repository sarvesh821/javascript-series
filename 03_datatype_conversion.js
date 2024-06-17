let score="98"
console.log(typeof score);

let valueOfScore=Number(score)
console.log(typeof valueOfScore);

let newScore="99abs"
let valueOfNewScore=Number(newScore)
console.log(typeof valueOfNewScore);
console.log(valueOfNewScore);

//"33"->33
//"33ab"-.NaN
//null->0
//true->1 & false->0

//we can convert similarly Boolean ,String

let value=1
let booleanValue=Boolean(value)
console.log(booleanValue);

//""->false
//"sarvesh"->true
//1->true and 0->false

let age=34
let stringAge=String(age)
console.log(typeof stringAge);
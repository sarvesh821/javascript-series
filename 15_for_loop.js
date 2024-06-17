for (let index=0;index<=10;index++){
    console.log(index);
}

let arr=[1,2,5,6,7]
for (let i=0;i<arr.length;i++){
    console.log(arr[i]);
}

//break and continue

i=0
while (i<arr.length) {
    console.log(arr[i]);
    i++
    
}
let score=1
do {
    console.log(`score is ${score}`);
    score++
} while (score<=10);
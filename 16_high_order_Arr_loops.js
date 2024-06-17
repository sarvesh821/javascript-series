const arr=[1,2,3,4,5]
for (const num of arr) {
    // console.log(num);    
}

//Maps

const map=new Map()
map.set("IN","India")
map.set("USA","Unitied states of America")
map.set("FR","France")

// console.log(map);
for (const [key,val] of map) {
    // console.log(key,':-',val);
    
}


//object cant be iterated using for of loop they are iterated using for in loop

const myObj={
    js:"javascript",
    cpp:"C++",
    rb:"ruby",
    swift:"Swift"
}
for (const key in myObj) {
//    console.log(myObj[key]);
}

const arr1=["hello","Good","morning"]
for (const key in arr1) {
    // console.log(arr1[key]);
}

const coding=["c++","js","swift","ruby"]
// coding.forEach((e)=>{
//     console.log(e);
// })
// function printMe(item){
//     console.log(item);
// }
// coding.forEach(printMe)

coding.forEach((item,index,arr)=>{
    console.log(item,index,arr);
})


const myCoding=[
    {
        language:"java",
        fileType:"java"
    },
    {
        language:"c++",
        fileType:"cpp"
    },
    {
        language:"python",
        fileType:"py"
    }
]
myCoding.forEach((item)=>{
    console.log(item.language,item.fileType);
})
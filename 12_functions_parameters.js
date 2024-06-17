function sayMyName(){
    console.log("sarvesh");
    console.log("Goyal");
}

// sayMyName()


function addTwoNumbers(num1,num2){
    let result=num1+num2
    return result
}

result=addTwoNumbers(3,5)
// console.log(result);

function logInMessage(username){
    // if (username===undefined){
    //     return "Please enter username"
    // }
    if (!username){
        return "Please enter username"
    }
    return `${username} just logged in`
}
// console.log(logInMessage("sarvesh"));
// console.log(logInMessage());


//use of rest operator
function shoppingCartPrice(...num){
    return num
}

// console.log(shoppingCartPrice(100,200,300,400));
const user={
    username:"sarvesh",
    price:199
}

function handleObject(anyObject){
    console.log(anyObject.username);
    console.log(anyObject.price);
}
// handleObject(user)


const newArr=[100,200,300,400]
function secondValue(getArr){
    console.log(getArr[2]);
}

// secondValue(newArr)
//=================================================scope in function====================================
function one(){
    const username="sarvesh"
    function two(){
        const website="opera"
        console.log(username);
    }
    // console.log(website);
    two()
}
one()
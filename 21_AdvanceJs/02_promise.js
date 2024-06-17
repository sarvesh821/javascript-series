const promiseOne=new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("Async task completed")
        resolve()
    },1000)
})

promiseOne.then(function(){
    console.log("promise consumed")
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2 resolved")
        resolve()
    },1000)
}).then(function(){
    console.log("promise 2 consumed")
})

const promiseThree=new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"sarvesh",gmail:"sarvesh@gmail.com"})
    },1000)
})

promiseThree.then(function(user){
    console.log(user);
})

const promiseFour=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true
        if (!error){
            resolve({username:"sarvesh",password:"123"})
        }
        else{
            reject("ERROR : Something went wrong")
        }
    },1000)
})

promiseFour.then(function(user){
    console.log(user);
    return user.username
}).then((username)=>{
    console.log(username);
}).catch(function(error){
    console.log(error);
}).finally(()=>{
    console.log("the promise is either resolved or rejected");
})





const promiseFive=new Promise(function(resolve,reject){
    setTimeout(()=>{
        let error=true
        if (!error){
            resolve({username:"JavaScript",password:"123"})
        }
        else{
            reject("ERROR : Js went wrong")
        }
    },1000)
})


async function consumedPromiseFive(){
    try {
        const response= await promiseFive
        console.log(response);
    } catch (error) {
        console.log(error);
    }
}

consumedPromiseFive()

// async function getGitData(){
//     try {

//         const response=await fetch('https://api.github.com/users/sarvesh821')
//         // console.log(response);
//         const data=await response.json()
//         console.log(data);
//     } catch (error) {
//         console.log("E : ",error);
//     }
// }
// getGitData()


fetch('https://api.github.com/users/sarvesh821')
.then((response)=>{
    return response.json()
})
.then((data)=>{
    console.log(data);
})
.catch((error)=>{
    console.log(error);
})
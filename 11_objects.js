//singleton
//object.create

//object litrals

const mysym=Symbol("key1")
const JsUser={
    name:"sarvesh",
    age:20,
    [mysym]:"mykey1",
    location:"hyderabad",
    email:"sarvesh@gmail.com",
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"]
}

// console.log(JsUser.email);
// console.log(JsUser["email"]);
// console.log(JsUser[mysym]);

JsUser.email="sarvesh821@gmail.com"
// console.log(JsUser);
// Object.freeze(JsUser)
JsUser.email="sarvesh821@chatgpt.com"
// console.log(JsUser);

JsUser.greeting=function(){
    console.log("hello js user");

}
JsUser.greetingTwo=function(){
    console.log(`hello js user ${this.name}`);

}
// console.log(JsUser.greeting());
// console.log(JsUser.greetingTwo());

//==============================================PART2==================================================


// const tinderUser=new Object()
tinderUser={}
tinderUser.id="123ab"
tinderUser.name="sarvesh"
tinderUser.isLoggedIn=false
// console.log(tinderUser);

const regularUser={
    email:"some@gmail.com",
    fullName:{
        userFullName:{
            firstName:"sarvesh",
            lastName:"Goyal"
        }
    }
}
console.log(`regular user full name is ${regularUser.fullName.userFullName.firstName} ${regularUser.fullName.userFullName.lastName}`);


const obj1={1:'a',2:'b'}
const obj2={3:'c','4':'d'}
// const obj3=Object.assign({},obj1,obj2)
const obj3={...obj1,...obj2}
// console.log(obj3);

// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course={
    courseName:"js in hindi",
    price:"99999",
    courseTeacher:"sarvesh"
}
const {courseName,price:coursePrice}=course
console.log(`${courseName} ${coursePrice}`);
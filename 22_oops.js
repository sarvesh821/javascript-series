// javascript and classes


// objects
// collection of properties and methods


//constructor functions
//prototypes
//classes
//Instances(new this)


//user literals

const user={
    username:"sarvesh",
    logincount:8,
    signedIn:true,
    getUserDate:function(){
        console.log("user data is fetched from database");
    }
}

// console.log(user.getUserDate());



// constructor functions

function User(username,loginCount,isLoggedIn){
    this.username=username
    this.loginCount=loginCount
    this.isLoggedIn=isLoggedIn
    // return this
}

const userOne=new User("sarvesh",12,true)
console.log(userOne);
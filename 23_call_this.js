function SetUsername(username){

    //complex DB calls
    this.username=username
}   

function CreateUser(username,email,password){
    SetUsername.call(this,username)
    this.email=email
    this.password=password
}

const chai=new CreateUser("sarvesh","sarvesh@gmail.com","123")
console.log(chai);
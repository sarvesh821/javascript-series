const User={
    _username:"sarvesh",
    _password:'abc',
    get username(){
        return this._username.toUpperCase()
    },
    set username(val){
        this._username=val
    }
}

const newUser=Object.create(User)
console.log(newUser.username);
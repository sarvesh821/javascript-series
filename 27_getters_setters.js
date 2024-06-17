class user{
    constructor(username,password){
        this.username=username
        this.password=password
    }
    get password(){
        return this._password.toUpperCase()
    }

    set password(val){
        this._password=val
    }
}

const newUser=new user("sarvesh","abc")
console.log(newUser.password);
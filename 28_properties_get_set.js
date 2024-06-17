function User(username,password){
    this._username=username
    this._password=password

    Object.defineProperty(this,'password',{
        get:function(){
           return this._password.toUpperCase()
        },
        set:function(val){
            this._password=val
        }
    })
    Object.defineProperty(this,'username',{
        get:function(){
           return this._username.toUpperCase()
        },
        set:function(val){
            this.username=val
        }
    })
}

const newUser=new User("sarvesh","abc")
console.log(newUser.username);
console.log(newUser.password);
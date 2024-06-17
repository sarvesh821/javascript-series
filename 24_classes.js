// class User{
//     constructor(username,email,password){
//         this.username=username
//         this.email=email
//         this.password=password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
// }

// const newUser=new User("sarvesh821","sarvesh@gmail.com","123")
// // console.log(newUser);
// // console.log(newUser.encryptPassword());

// class Teacher extends User{
//     constructor(username,password,email) {
//         super(username)
//         this.email=email
//         this.password=password
        
//     }
//     addCourse(){
//         return `This course was added by ${this.username}`
//     }
// }

// const newTeaceher=new Teacher("Kashish","kash@gmail.com","Kash@123")
// console.log(newTeaceher);
// console.log(newTeaceher.addCourse());


class User{
    constructor(username,email,password){
        this.username=username
        this.email=email
        this.password=password
    }

    encryptPassword(){
        return `${this.password}abc`
    }
    logMe(){
        return `${this.username} is logged in`
    }

    static setId(){
        return '123'
    }
}

const user1=new User("sarvesh","goyal.com","123345")
// console.log(user1.logMe());

console.log(user1.setId());
function mutiplyBy5(num){
    return num*5
}

mutiplyBy5.power=2
console.log(mutiplyBy5(5));
console.log(mutiplyBy5.power);
console.log(mutiplyBy5.prototype);


function CreateUser(username,score){
    this.username=username
    this.score=score
}
CreateUser.prototype.increment=function(){
    this.score++
}

CreateUser.prototype.printMe=function(){
    console.log(`score is ${this.score}`);
}

const chai= new CreateUser("chai",25)
const tea= new CreateUser("tea",250)
chai.increment()
chai.printMe()
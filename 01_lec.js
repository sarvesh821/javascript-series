console.log('sarvesh')
const accountId=12345
let accountEmail="sarvesh@google.com"
var accountPassword="897#123"
accountCity="Jaipur"
// accountId=2 not allowed
accountEmail="SG@google.com"
accountPassword="sarvesh#789"
accountCity="banguluru"
let accountState;

/*
dont use var anywhere
because of problem with block scope and functional scope
*/
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])
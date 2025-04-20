//constant declare by only one keyword const//
const accountId = 1244
//there are two method to declare variable in js one is let and other var both values can be replace//
let accountEmail = "ruqia@gmail.com"
var accountPassword = "hani"
let accountState;
//accountId = 78// not allowed
console.log(accountId);
accountEmail = "hc@gmail.com"
console.log(accountEmail);

accountPassword = "Ruqia"
console.log(accountPassword);

console.table([accountId, accountEmail, accountPassword, accountState]);

/*only two are used in js const and let, prefer not to used var 
because of issue in block scope and functional scope

*/

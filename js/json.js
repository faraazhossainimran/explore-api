const user = {
    name: 'imran',
    age: 24
}
// convert to json 
const stringified = JSON.stringify(user);
console.log(stringified);
console.log(user);
// convert to object again
const stringObj = JSON.parse(stringified);
console.log(stringObj);
/**
 * Understanding objects
 */

//declaration

const user = {
    name : 'SGK',
    age : 30,
    email : 'sgk@gmail.com',
    isActive : true
}

//accession and printing specific values from the user object

console.log(`name is ${user.name}`);
console.log(`age is ${user.age}`);

//or 

console.log(`email is ${user['email']}`)

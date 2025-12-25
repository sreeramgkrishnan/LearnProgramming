/**
 * Understand different ways to declare functions 
 * in JavaScript and
 *  how to use callback functions.
 */


//function declaration
function userProfile(name) {
    console.log(`${name}`);    
}
userProfile('SGK');


//arrow function
 const returnDouble = (number) => {
    return number * 2;
}
console.log(returnDouble(4));

//IIFE [Immediately invoked function expression]

 (() => {
    console.log(`Hello world!!`);
    
})();

//Anonymous function
setTimeout(() => {
    console.log('This message was delayed by 2 sec');
}, 2000);


//callback function
function getUserData(callback) {
    setTimeout( () => {
        const user = {
            name : 'John',
            Age : '40'
        }
        callback(user)
    } , 3000 );
}

getUserData((user) => {
    console.log(`Name : ${user.name}`);
    console.log(`Age : ${user.Age}`);
    
});
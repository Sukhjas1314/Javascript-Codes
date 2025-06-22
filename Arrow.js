// const multiply = (x,y) => x * y;
// console.log(multiply(8,7));

const sum = (x,y,z) => x + y + z;
console.log(sum(5,4,6));

const divide = (x,y) => x / y;
console.log(divide(9,18));

const square = (x) => x * x;
console.log(square(8));

const cube = (x) => x * x * x;
console.log(cube(7));

let getfullname = function(firstname,lastname){
    console.log(firstname + ' ' + lastname);
}
getfullname('Sukhmanpreet','Singh');


//Immediately invoked function execution -->> that means the function is set to give output from its declaration point only

(function(x){
   console.log(x*x);
})(8);

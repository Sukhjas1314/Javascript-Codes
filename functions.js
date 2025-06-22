// function sum(a,b,c){
//     return a+b+c;
// }
// var total = sum(5,67,98);
// console.log(total);


function passmessage(course,message = '- Today'){
    return "I am happy to learn "+course+" from PW Skills "+message;
}
console.log(passmessage('Web Development'));
console.log(passmessage('Full Stack Development','- Tommorow'));
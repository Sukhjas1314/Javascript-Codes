function sumofallparameters(){
    console.log(arguments.length);
    var sum =0;
    for(var i=0;i<=arguments.length - 1;i++){
        sum+=arguments[i];
    }
    return sum;
}

let result = sumofallparameters(2,5,3,7,9,6,4);
console.log(result);

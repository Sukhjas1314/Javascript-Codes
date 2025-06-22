let number = 0;
if(number==0){
    console.log("0 is neither odd nor even.");
}
else if(number%2==0){
    console.log("It is an even number.");
}
else{
    console.log("It is an odd number.");
}
            //By Switch statement
number%2==0?(number==0?console.log("0 is neither odd nor even."):console.log("It is an even number.")):console.log("It is an odd number.");

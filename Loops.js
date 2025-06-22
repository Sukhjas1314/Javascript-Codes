let end = 10;
let num = 1;
// while(end>=num){
//     console.log(end);
//     --end;
// }

// while(num <= end){
//     console.log(`2 * ${num} = ${2*num}`);
//     num++;
// }
// let result='';
// do{
//     result=result+num;
//     num++;
// }
// while(num<=7);
// console.log(result);

// let i=0;
// if(i%2==0){
// for(i=0;i<=20;i+=2){
//     console.log(i);
// }
// }
// let n=3;
// for(let i=0;i<=n;i++){
//     console.log("Outer loop",i);
//     for(let j=i;j<=n;j++){
//         console.log("-------Inner loop",j);
//     } 
// }

for(let i=0;i<=4;i++){
    let col='';
    for(let j=0;j<=i;j++) {
        col=col+'*';
    }  
    console.log(col);
}

var movline = ['Alok','Sukhman','Ansh','Gaurav','Sumedh'];
var movline2 = ['Harith','Daksh','Pritish'];

console.log(movline[1],'\n------------------');

for(const line1 of movline){
    console.log(line1);
} console.log('------------------------\n');

for(const line2 of movline2){
    console.log(line2);
} console.log('-------------------------\n');

console.log(movline[1].toUpperCase());
console.log('-------------------------\n');

console.log(movline[1].toLowerCase());
console.log('-------------------------\n');

movline.push('Sarthak');
console.log(movline);
console.log('-------------------------\n');

var person = movline.pop();
console.log(person);
console.log(movline);
console.log('-------------------------\n');

movline.shift();
console.log(movline);
console.log('-------------------------\n');

movline.unshift('Sarthak');
console.log(movline);
console.log('-------------------------\n');

movline.splice(2,1,'Harvinder');
console.log(movline);
console.log('-------------------------\n');

var ml = movline.concat(movline2);
console.log(ml);
console.log('-------------------------\n');

ml.slice(0,8);
console.log(ml);
console.log('-------------------------\n');

console.log(ml.join(' -> '));
console.log('-------------------------\n');

console.log(ml.reverse());
console.log('-------------------------\n');

console.log(ml.indexOf('Sukhman'));
console.log('-------------------------');











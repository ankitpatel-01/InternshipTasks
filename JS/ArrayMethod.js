const numbers = [1,2,3,4,5];

const names = ["aman","ankit","abhishike"];

console.log(`numbers array length is ${numbers.length}`);
console.log(`names array length is ${names.length}`);

names.push("jay");
names.push("jigar");
names.unshift("first")

console.log("name array "+names)

let removedItem = names.splice(0,1);
console.log("remove items are "+removedItem)
console.log(names)

// Example 1

const myArray = [1,2,3,4,5,6,7,8,9,10,11]

const filteredArray = myArray.filter((value)=>{
    return value > 4;
})

console.log(filteredArray);


// Example 2

const names = ["aman","ankit","abhishike"]

const filteredName = names.filter((value)=>{
    return value === "ankit";
})

console.log(filteredName);
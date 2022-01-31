const names = ["aman","ankit","abhishike"]

const joined = names.map((name)=>{
    return `${name} joined the group`
})

joined.forEach((i)=>{
    console.log(i);
});


// Example 2

const numbers = [1,2,3,4,5]

const sqrNumber = numbers.map((n)=>{
    return n*n;
})

console.log(numbers)
console.log(sqrNumber)
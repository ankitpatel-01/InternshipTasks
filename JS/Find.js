const array1 = [5, 12, 8, 130, 44];

const found = array1.find((element, index)=>{
    index =2;
    return element > 10;
})

console.log(found)
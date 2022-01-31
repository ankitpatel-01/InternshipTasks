// Reduce() Example
// example 1
const array = [10, 20, 30, 40, 50];

const sumOfArray = array.reduce((previousValue, currentValue) => {
  return previousValue + currentValue;
});

// console.log("sum of the array element is: "+sumOfArray);
console.log(`sun of the array element is ${sumOfArray}`);
console.log("\n");

// example 2
const array2 = [15, 16, 17, 18, 19];

function reducer(previous, current, index) {
  const returns = previous + current;
  console.log(
    `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
  );
  return returns;
}

array.reduce(reducer);

console.log("\n");
// example 3
let initialValue = 10;

[15, 16, 17, 18, 19].reduce((previous, current, index) => {
  const returns = previous + current;
  console.log(
    `previous: ${previous}, current: ${current}, index: ${index}, returns: ${returns}`
  );
  return returns;
}, initialValue);

// min and max of array using reduce

const myArray = [10,4,6,19,25,5]


const min = myArray.reduce((p,c)=>{
    return p < c ? p : c;
});


const max = myArray.reduce((p,c)=>{
    return p > c ? p : c;
});


console.log(`min is ${min} and max is ${max}`)
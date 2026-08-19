// let arr = [1, 2, 3, 4, 5]

// forEach
// let sum = 0;
// arr.forEach((value, index, a) => {
//     sum += value;
// });
// console.log(sum);

// map
// [1,4,9,16,25]
// let newArr = arr.map((value, index, a) => {
    // return value * value;
    // return value * 2;
    // return Math.pow(value, 2);
// });
// console.log(newArr);


// let arr = [18,2,3,10,5,7]
// let sortArr = arr.sort((a, b) => a - b);
// console.log(sortArr);

// let arr = ["Oxford", "algoritm", "Start 21"]
// let sortArr = arr.sort((a, b) => a.localeCompare(b));
// console.log(sortArr);

// let arr = Array(5).fill("Salom", 0, 2).fill("Alik", 2)
// console.log(arr);

// reduce 
let arr = [1, 2, 3, 4, 5]

let qiymat = arr.reduce((acc, cur) => {
    return acc + cur;
}, 0);
console.log(qiymat);

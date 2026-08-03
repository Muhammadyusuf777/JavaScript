// let arr1 = [3, 7, 8, 12, 15, 20, 9];

// let result1 = arr1.find(num => num > 10 && num % 2 === 0);
// console.log(result1);

// let arr2 = [10, 15, 21, 30, 45, 9];

// let result2 = arr2.find(num => num % 3 === 0 && num % 5 === 0 && num > 15);
// console.log(result2);

// let arr3 = [5, 8, 12, -3, 7, -9, 2];

// let result3 = arr3.findIndex(num => num < 0);
// console.log(result3); // 3

// let arr4 = [10, 18, 16, 22, 30, 25];

// let result4 = arr4.findIndex(num => Number.isInteger(Math.sqrt(num)));
// console.log(result4); // 2

// let arr5 = [12, 60, 9, 45, 100, 33, 80];

// let result5 = arr5.findLastIndex(
//   num => num < 50 && num % 3 === 0
// );
// console.log(result5); 


// let arr6 = [5, 23, 100, 45, 200, 78, 300];

// let result6 = arr6.findLastIndex(
//   num => num >= 10 && num <= 99
// );
// console.log(result6);

// let arr = [1,2,3,4,5]
// [2, 4, 6, 8, 10]
// let result = arr.map(num => num * 2);
// let newArr = arr.map((value, index, a) => value * 2);
// console.log(newArr);

// let arr = [1,2,3,4,5,6,7,8,9]
// [1,3,5,7,9]
// let newArr = arr.filter((value, index, a) => value % 2 === 1)
// console.log(newArr);

// let arr = ["Olma", "Nok", "Uzum", "Shaftoli"]
// let sum = 0
// arr.forEach((value, index, a) => (sum += value.length))
// console.log(sum);

// let arr = ["Olma", "Nok", "Uzum", "Shaftoli"]
// "Olma, Nok, Uzum"
// let newArr = arr.filter((value, index, a) => value.length <= 4)
// console.log(newArr);

// let arr = ["Olma", "Nok", "Uzum", "Shaftoli"]
// ["Olma 4", "Nok 3", "Uzum 4", "Shaftoli 8"]
// let newArr = arr.map((value, index, a) =>{
//   return value + " " + value.length
// })
// console.log(newArr);

// let arr = [1,20,14,7,2,5,8,17]
// [20, 14, 18, 17]
// let newArr = arr.filter((value, index, a) => value > 10 && value < 100)
// console.log(newArr);

// let arr = ["Olma", "Nok", "Uzum", "Shaftoli"]
// ["*lma", "*ok", "*zum", "*haftoli"]
// let newArr = arr.map((value, index, a) => {
//   return `*${value.slice(1)}`
// })  
// console.log(newArr);

  
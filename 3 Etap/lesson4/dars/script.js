// Masala:Massiv obyektlardan yoshi 18 dan katta va ismida "a" harfi bor bo'lganlarni toping
// javobi: [{ name: "Ali", age: 25 }, { name: "Sami", age: 20 }]

// let user = [{ name: "Ali", age: 25 }, { name: "Vali", age: 17 }, { name: "Sami", age: 20 }, { name: "John", age: 30 }];
// let result = user.filter(u => u.age > 18 && u.name.toLowerCase().includes('a'));
// console.log(result); 

// for (let i = 1; i <= 50; i++) {
//   if (i % 2 !== 0) {
//     console.log(i);
//   }
// }

// for (let i = 1; i <= 50; i++) {
//   if (i % 10 === 0) {
//     console.log(i);
//   }
// }

// toq Sonlarni kopaytmasini hisoblang
// let arr = [1,2,2,3,4,5,6,7,8,9]
// let product = arr.reduce((acc, cur) => {
//   if (cur % 2 !== 0) {
//     return acc * cur;
//   }
//   return acc;
// }, 1);
// console.log(product);


let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let sum = arr.reduce((acc, sum) => !(sum % 2) || !(sum % 3) ?acc + sum : acc, 0)
console.log(sum);
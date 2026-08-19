// const users = [
//     { name: "Ali", age: 20 },
//     { name: "Vali", age: 25 }
// ];

// const newUsers = users.map(user => {
//     return `${user.name} (${user.age} yosh)`;
// });

// console.log(newUsers);

// 2. Narxlarga 12% QQS qo'shish

// const prices = [100000, 250000, 80000];

// const pricesWithTax = prices.map(price => {
//     return price * 1.12;
// });

// console.log(pricesWithTax);

// // 3. Login yaratish

// const names = [
//     "Ali Valiyev",
//     "Sami Karimov",
//     "Olim Hasanov"
// ];

// const logins = names.map(name => {
//     return name.toLowerCase().replaceAll(" ", "_");
// });

// console.log(logins);

// // filter() uchun 3 ta masala
// // 1. Aktiv foydalanuvchilarni ajratish

// const users2 = [
//     { name: "Ali", active: true },
//     { name: "Vali", active: false },
//     { name: "Sami", active: true }
// ];

// const activeUsers = users2.filter(user => {
//     return user.active === true;
// });

// console.log(activeUsers);

// // 2. Imtihondan o'tganlarni ajratish

// const students2 = [
//     { name: "Ali", ball: 56 },
//     { name: "Vali", ball: 88 },
//     { name: "Sami", ball: 71 },
//     { name: "Olim", ball: 44 }
// ];

// const passedStudents = students2.filter(student => {
//     return student.ball >= 60;
// });

// console.log(passedStudents);

// // 3. Qimmat mahsulotlarni ajratish

// const products2 = [
//     { name: "Telefon", price: 3500000 },
//     { name: "Quloqchin", price: 250000 },
//     { name: "Noutbuk", price: 7800000 }
// ];

// const expensiveProducts = products2.filter(product => {
//     return product.price > 1000000;
// });

// console.log(expensiveProducts);

// ===============================

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((acc, cur) => {
//     if(cur % 2) return acc * cur
//     return acc
// }, 1);
// console.log(sum)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((acc, cur) => {
//     if(!(cur % 2)) return acc * cur
//     return acc
// }, 1);
// console.log(sum)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum = arr.reduce((acc, cur) => {
//     if(cur % 3  === 0 || cur % 2 === 0 ) return acc + cur
//     return acc
// }, 0);
// console.log(sum)


// reduce
// reduce(() => {}, 0)
// reduce((acc, cur) => {}, 0)
// 1. accumulator
// 2. currentValue

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, cur) => acc + cur, 0);
// console.log(sum);

// let arr = [1, 2, 3, 4, 5];
// let sum = arr.reduce((acc, cur) => acc * cur, 1);
// console.log(sum);

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum1 = arr.reduce((acc, cur) => {
//   if (cur % 2 === 0) return acc + cur
//   return acc
// }, 0);
// console.log(sum1)

// let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
// let sum2 = arr.reduce((acc, cur) => cur % 2 === 0 ? acc + cur : cur, 0);
// console.log(sum2)

// let mul = arr.reduce((acc, cur) => cur % 2 ? acc + cur : cur, 1);
// console.log(mul)

// let mul = arr.reduce((acc, cur) => {
//     if(!(cur % 2)) return acc + cur
//     return acc
// }, 1)
// console.log(mul)


// 1. Ismlarni tartib raqami bilan chiqarish

// let students = ["Ali", "Vali", "Sami", "Olim"];

// for (let i = 0; i < students.length; i++) {
//     console.log(i + 1 + ". " + students[i]);
// }


// 2. Narxlarga 10% chegirma

// let prices = [10000, 20000, 15000];

// for (let i = 0; i < prices.length; i++) {
//     console.log(prices[i] + " => " + prices[i] * 0.9);
// }

// 3. Mevalarni katta harfda chiqarish

// let fruits = ["olma", "anor", "banan"];

// for (let i = 0; i < fruits.length; i++) {
//     console.log(fruits[i].toUpperCase());
// }

// ===============================
// map()
// ===============================

// 1. Yoshga 1 qo‘shish

// let ages = [15, 18, 20, 25];

// let newAges = [];

// for (let i = 0; i < ages.length; i++) {
//     newAges.push(ages[i] + 1);
// }

// console.log(newAges);

// 2. Ismlarga "bek" qo‘shish

// let names = ["Ali", "Vali", "Sami"];

// let newNames = [];

// for (let i = 0; i < names.length; i++) {
//     newNames.push(names[i] + "bek");
// }

// console.log(newNames);


// let numbers = [1, 2, 3, 4];

// let newNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//     newNumbers.push("Son: " + numbers[i]);
// }

// console.log(newNumbers);


// let yosh = [12, 18, 25, 16, 30];

// let kattaYosh = [];

// for (let i = 0; i < yosh.length; i++) {
//     if (yosh[i] >= 18) {
//         kattaYosh.push(yosh[i]);
//     }
// }

// console.log(kattaYosh);


// 2. Uzunligi 5 va undan katta so‘zlar

// let sozlar = ["olma", "banan", "shaftoli", "anor"];

// let uzunSozlar = [];

// for (let i = 0; i < sozlar.length; i++) {
//     if (sozlar[i].length >= 5) {
//         uzunSozlar.push(sozlar[i]);
//     }
// }

// console.log(uzunSozlar);



// let sonlar = [-5, 0, 7, -2, 10];

// let musbat = [];

// for (let i = 0; i < sonlar.length; i++) {
//     if (sonlar[i] >= 0) {
//         musbat.push(sonlar[i]);
//     }
// }
// console.log(musbat);

// ====================================

// forEach 
// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// let sum = 0
// arr.forEach((value, index, a) => {
//   sum += value.length
//     if(index == 3){
//       console.log(value); 
//   }
// })
// console.log(sum);

// let arr = [1,2,3,4,5,6,7,8,9]
// let sum = 0
// arr.forEach(function(value, index, a){
//   sum += value
// })
// console.log(sum);

  // let arr = ["Olma", "Anor", "Uzum", "Nok"]
  // let newArr =  arr.map((value, index, a) => {
  //   return value + " olaman"
  // })

  // console.log(newArr);

// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// let newArr = arr.map((value, index, a) => `${value} ${index}`)
// console.log(newArr);

// forEach va map | farqi.
// forEach da return ishlamaydi, qiymat qaytmaydi 
// map da return ishlaydi, o'zidan yangi array qaytaradi

// filter 
// let arr = [1,2,3,4,5,6,7,8,9]
// let newArr = arr.filter((value, index, a) =>{
//   if(value > 5) return value
// })
// console.log(newArr);

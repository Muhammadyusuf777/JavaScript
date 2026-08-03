// let fruits1 = ["olma", "banan"];
// fruits1.push("anor");
// console.log(fruits1);

// let numbers1 = [1, 2, 3];
// numbers1.push(4, 5);
// console.log(numbers1);

// let colors = ["qizil", "ko'k", "yashil"];
// colors.pop();
// console.log(colors);

// let nums1 = [10, 20, 30, 40];
// let last = nums1.pop();
// console.log(last);
// console.log(nums1);

// let names1 = ["Ali", "Vali", "Sami"];
// names1.shift();
// console.log(names1);

// let arr1 = [5, 6, 7];
// let first = arr1.shift();
// console.log(first);
// console.log(arr1);

// let cars = ["BMW", "Audi"];
// cars.unshift("Tesla");
// console.log(cars);

// let letters = ["b", "c"];
// letters.unshift("a");
// console.log(letters);

// let a = [1, 2];
// let b = [3, 4];
// console.log(a.concat(b));

// let fruits2 = ["olma"];
// let vegetables = ["sabzi"];
// console.log(fruits2.concat(vegetables));

// let arr2 = [10, 20, 30, 40, 50];
// console.log(arr2.slice(1, 4));

// let nums2 = [1, 2, 3, 4, 5];
// console.log(nums2.slice(2));

// let arr3 = [1, 2, 3, 4];
// arr3.splice(2, 1);
// console.log(arr3);

// let fruits3 = ["olma", "banan"];
// fruits3.splice(1, 0, "anor");
// console.log(fruits3);

// let arr4 = [10, 20, 30];
// console.log(arr4.indexOf(20));

// let names2 = ["Ali", "Vali"];
// console.log(names2.indexOf("Sami"));

// let fruits4 = ["olma", "anor"];
// console.log(fruits4.includes("anor"));

// let nums3 = [1, 2, 3];
// console.log(nums3.includes(5));

// let words = ["Salom", "Dunyo"];
// console.log(words.join(" "));

// let arr5 = [1, 2, 3];
// console.log(arr5.join("-"));


// =========================================

// array - nima?

// Array - bu o'zida barcha data typedagi qiymatlarni saqlab truvchi
// container va NonPrimitive (reference) data type kruvchi malumot
// hisoblanadi.

// 1.[]
// 2. Array()

// Array loops.
// 1. for loop
// 2. while loop
// 3. do while loop
// 4. for of

// let arr6 = [1, 2, 3, 4, 5];
// for (let i = 0; i < arr6.length; i++) {
//     console.log(arr6[i]);
// }

// for (let value of arr6) {
//     console.log(value);  
// }

// let multiple = [1, 2,[3, [4, 5,[6,[7]]]]]
// console.log(multiple[2][0]);

// push - array oxiriga qiymat qoshadi
// let arr = [1, 2, 3]
// arr.push(4, -1, -2)
// console.log(arr);

// [] clear vazifasi bajaradi
// let arr1 = [1, 2, 3]
// arr = []

// delete - array ichidagi faqat qiymatni o'chiradi qiymat bosh
// o'rni qolib ketadi
// let arr2 = [1, 2, 3]
// delete arr2[1]
// console.log(arr2);

// lenght - array uzunligini aniqlaydi
// at() - array ichidagi 1 ta qiymatni index orqali chiqarish uchun ishlatiladi
// minus (manfiy) qiymat ham qabul qiladi
// let arr = [1, 2, 3]
// console.log(arr[2]);
// console.log(arr.at(-1));

// indexOf - sizga kerakli bolgan qiymatlarni arrayning oldi tomonidan
// qidiradi va topsa uning index ni qaytaradi , topolmasa -1 qaytaradi .
// let arr = ["Olma", "Anor", "Uzum"]
// let i = arr.indexOf("Anor")
// console.log(i);

// lastIndexOf
// let arr1 = ["Olma", "Anor", "Uzum", "Olma"]
// let t = arr1.lastIndexOf("Olma")
// console.log(t);

// includes - array ichida siz qidiryotgan  qiymat bormi yoki yo'qmi tekshiradi 
// true // false javob qaytaradi 
let arr = [1,2,3]
console.log(arr.includes(3));
console.log(arr.includes(0));

// join 
let arr1 = [1,2,3]
console.log(arr.join("*"));


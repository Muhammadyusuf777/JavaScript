// 1. push()

let fruits1 = ["olma", "banan", "shaftoli"];

fruits1.push("anor");

console.log(fruits1);

// 2. Foydalanuvchi kiritgan sonni arrayga qo‘shish

let numbers1 = [10, 20, 30];

numbers1.push(10);

console.log(numbers1);
// 3. pop()

let colors = ["qizil", "yashil", "ko‘k", "sariq"];

colors.pop();

console.log(colors);

// 4. 
let products = ["Telefon", "noutubuk", "planshet"]
let lastValue = products.at(-1)
products.pop()
console.log(lastValue);
console.log(products);

// 5. unshift()

let months = ["fevral", "mart", "aprel"];

months.unshift("yanvar");

console.log(months);

// 6. Foydalanuvchi ismini boshiga qo‘shish

let queue = ["Ali", "Vali", "Hasan"];

let queueName = prompt("Ism kiriting:");

queue.unshift(queueName);

console.log(queue);

// 7. shift()

let tasks = ["uyg‘onish", "nonushta", "ishga borish"];

tasks.shift();

console.log(tasks);

// 8. O‘chirilgan elementni saqlash

let users1 = ["Aziz", "Dilshod", "Madina"];

let deletedUser = users1.shift();

console.log("O‘chirilgan element:", deletedUser);
console.log("Yangilangan array:", users1);

// 9. splice()

let numbers2 = [5, 10, 15, 20];

delete[2]

console.log(numbers2);

// 10. Samarqandni o‘chirish

let cities = ["Toshkent", "Samarqand", "Buxoro", "Xiva"];

let cityIndex = cities.indexOf("Samarqand");

cities.splice(cityIndex, 1);

console.log(cities);

// 11. length

let animals = ["mushuk", "it", "quyon", "ot", "sigir"];

console.log(animals.length);

// 12. Oxirgi element

let scores = [12, 25, 48, 91, 17, 63];

console.log(scores[scores.length - 1]);

// 13. at(-1)

let letters = ["a", "b", "c", "d", "e"];

console.log(letters.at(-1));

// 14. 3-elementni chiqarish

let weekdays = ["Dushanba", "Seshanba", "Chorshanba", "Payshanba", "Juma"];

console.log(weekdays[2]);

// 15. indexOf()

let fruits2 = ["olma", "banan", "anor", "shaftoli"];

let fruitIndex = fruits2.indexOf("anor");

console.log(fruitIndex);

// 16. includes()

let users2 = ["Ali", "Vali", "Hasan", "Husan"];

let searchName = prompt("Ism kiriting:");

if (users2.includes(searchName)) {
  console.log("Mavjud");
} else {
  console.log("Mavjud emas");
}

// 17. lastIndexOf()

let numbers3 = [10, 20, 30, 20, 40, 20];

let lastNumberIndex = numbers3.lastIndexOf(20);

console.log(lastNumberIndex);

// 18. lastIndexOf() bilan css ni topish

let words = ["html", "css", "js", "css", "react", "css"];

let lastCssIndex = words.lastIndexOf("css");

console.log(lastCssIndex);

const nimadir = ["olma", "banan", "anor","shaftoli"]
let index = nimadir.indexOf("anor")
console.log(index);

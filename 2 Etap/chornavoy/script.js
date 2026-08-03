// ==================== STRING ====================

let text = "Hello World";

// length → nechta harf bor?
console.log(text.length); // 11

// toUpperCase() → hammasini KATTA harf qiladi
console.log(text.toUpperCase()); // HELLO WORLD

// toLowerCase() → hammasini kichik harf qiladi
console.log(text.toLowerCase()); // hello world

// trim() → boshidagi va oxiridagi bo'sh joyni olib tashlaydi
console.log("  Salom  ".trim()); // Salom

// includes() → ichida shu so'z bormi?
console.log(text.includes("World")); // true

// startsWith() → shu so'z bilan boshlanadimi?
console.log(text.startsWith("Hello")); // true

// endsWith() → shu so'z bilan tugaydimi?
console.log(text.endsWith("World")); // true

// slice() → matnning bir qismini kesib oladi
console.log(text.slice(0, 5)); // Hello

// substring() → matnning bir qismini oladi
console.log(text.substring(6, 11)); // World

// replace() → bitta so'zni almashtiradi
console.log(text.replace("World", "JS")); // Hello JS

// replaceAll() → hamma bir xil so'zni almashtiradi
console.log("a-a-a".replaceAll("a", "b")); // b-b-b

// split() → stringni arrayga aylantiradi
console.log(text.split(" ")); // ["Hello","World"]

// charAt() → berilgan indeksdagi harfni oladi
console.log(text.charAt(1)); // e

// indexOf() → birinchi indeksini topadi
console.log(text.indexOf("o")); // 4

// lastIndexOf() → oxirgi indeksini topadi
console.log(text.lastIndexOf("o")); // 7



// ==================== ARRAY ====================

let arr = [10, 20, 30];

// push() → oxiriga element qo'shadi
arr.push(40);

// pop() → oxirgi elementni o'chiradi
arr.pop();

// unshift() → boshiga element qo'shadi
arr.unshift(5);

// shift() → birinchi elementni o'chiradi
arr.shift();

// includes() → element bormi?
arr.includes(20); // true

// indexOf() → element indeksini topadi
arr.indexOf(30); // 2

// join() → arrayni string qiladi
arr.join("-"); // "10-20-30"

// reverse() → teskari qiladi
arr.reverse();

// sort() → tartiblaydi
arr.sort((a, b) => a - b);

// slice() → bir qismini oladi
arr.slice(1, 3);

// splice() → qo'shadi yoki o'chiradi
arr.splice(1, 1);

// concat() → arraylarni birlashtiradi
arr.concat([40, 50]);

// forEach() → har bir elementni aylanish
arr.forEach(item => console.log(item));

// map() → har bir elementni o'zgartirib yangi array yaratadi
arr.map(item => item * 2);

// filter() → shartga mos elementlarni oladi
arr.filter(item => item > 15);

// find() → birinchi mos elementni topadi
arr.find(item => item > 15);

// some() → hech bo'lmasa bittasi mosmi?
arr.some(item => item > 25);

// every() → hammasi mosmi?
arr.every(item => item > 0);

// reduce() → hammasini bitta qiymatga yig'adi
arr.reduce((sum, item) => sum + item, 0);



// ==================== NUMBER ====================

let num = 12.567;

// toFixed() → kasr sonni yaxlitlaydi
num.toFixed(2); // "12.57"

// toString() → stringga aylantiradi
num.toString();

// Number() → stringni songa aylantiradi
Number("123");

// parseInt() → butun songa aylantiradi
parseInt("12.99"); // 12

// parseFloat() → o'nlik songa aylantiradi
parseFloat("12.99"); // 12.99

// isNaN() → son emasligini tekshiradi
isNaN("abc"); // true

// Number.isInteger() → butun sonmi?
Number.isInteger(10); // true

// Math.floor() → pastga yaxlitlaydi
Math.floor(4.9); // 4

// Math.ceil() → yuqoriga yaxlitlaydi
Math.ceil(4.1); // 5

// Math.round() → eng yaqin butun songa yaxlitlaydi
Math.round(4.5); // 5

// Math.random() → 0 va 1 orasida tasodifiy son
Math.random();

// 1 dan 10 gacha tasodifiy son
Math.floor(Math.random() * 10) + 1;

// Math.max() → eng katta son
Math.max(10, 20, 30); // 30

// Math.min() → eng kichik son
Math.min(10, 20, 30); // 10

// Math.pow() → darajaga oshiradi
Math.pow(2, 3); // 8

// Math.sqrt() → kvadrat ildiz
Math.sqrt(25); // 5

// Math.abs() → manfiy sonni musbat qiladi
Math.abs(-20); // 20

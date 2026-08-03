// math

// let num = 10.4
// console.log(Math.round(num));

// let num2 = 8.6
// console.log(Math.round(num2));

// math.floor() faqat pasttini chiqadi

// let num3 = 12.9
// console.log(Math.floor(num3));

// math.ceil() faqat yuqorisini chiqadi

// let num4 = 19.1
// console.log(Math.ceil(num4));

// math.pow() sonni darajasini chiqaradi

// let num5 = 5
// console.log(Math.pow(num5, 3));

// math.sqrt() sonni ildizini chiqaradi

// let num6 = 25
// console.log(Math.sqrt(num6));

// math.abs() sonni manfiy bo'lsa musbatga o'tkazadi

// let num7 = -17
// console.log(Math.abs(num7));

// math.random() 

// console.log(Math.random() *10);

// let str = prompt("Enter your number");
// res = str(Math.random() * 10);

// =====================================


console.log(Math.round(10.4));
console.log(Math.round(8.6));


console.log(Math.floor(12.9));
console.log(Math.floor(7.8));



console.log(Math.ceil(19.1));
console.log(Math.ceil(4.2));


console.log(Math.pow(5, 3)); 
console.log(Math.pow(2, 4));



console.log(Math.sqrt(25))
console.log(Math.sqrt(64))


console.log(Math.abs(-17));
console.log(Math.abs(-50));


console.log(Math.random());
console.log(Math.random());


console.log(Math.floor(Math.random() * 10));
console.log(Math.floor(Math.random() * 10));


let num = Number(prompt("Son kiriting:"));

let res = Math.floor(Math.random() * num);

console.log("Random son:", res);
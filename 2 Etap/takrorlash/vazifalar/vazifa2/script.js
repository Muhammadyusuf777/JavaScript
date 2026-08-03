
// 1. length
let text1 = "JavaScript";
console.log(text1.length); 

let text2 = "Salom";
console.log(text2.length); 


// 2. toUpperCase()
let text3 = "hello";
console.log(text3.toUpperCase()); 

let text4 = "tashkent";
console.log(text4.toUpperCase()); 


// 3. toLowerCase()
let text5 = "JAVASCRIPT";
console.log(text5.toLowerCase()); 

let text6 = "ALI";
console.log(text6.toLowerCase()); 


// 4. includes()
let text7 = "Men JavaScript o'rganyapman";
console.log(text7.includes("JavaScript"));

let text8 = "Olma";
console.log(text8.includes("banan")); 


// 5. indexOf()
let text9 = "JavaScript";
console.log(text9.indexOf("S")); 

let text10 = "Salom";
console.log(text10.indexOf("o")); 


// 6. slice()
let text11 = "JavaScript";
console.log(text11.slice(0, 4)); 

let text12 = "Dasturlash";
console.log(text12.slice(5)); 



let text14 = "Salom Dunyo";
console.log(text14.replace("Dunyo", "Olam"));


// 8. trim()
let text15 = "   Salom   ";
console.log(text15.trim());
w
let text16 = "   Kitob";
console.log(text16.trim());
d

// 9. split()
let text17 = "olma,banan,uzum";
console.log(text17.split(","));

let text18 = "Java Script";
console.log(text18.split(" "));


// 10. concat()
let a = "Salom";
let b = " Dunyo";
console.log(a.concat(b));

let first = "Web";
let second = "Dasturlash";
console.log(first.concat(" ", second));
// 1. ''
// 2. ""
// 3. ``✅
// 4. string()
// 5. toString()

// let str = "aaaaa\naaaaaa"
// console.log(str);

// let str2 = "sa\tlom"
// console.log(str2);

// let str3 = "Algoritm"
// console.log(str3[0]);
// for of
// let count = 0
// for (let value of str3) {
//     console.log(value);
//     count++;
// }
// console.log(count);


// =================================
// 1. length
// let my1 = "Algoritm and Oxford"
// console.log(my1.length);
// ------------------
// 2. charAt()
// let my2 = "Algoritm and Oxford"
// console.log(my2.charAt(0));
// console.log(my2[0]);
// console.log(my2.at(0));
// console.log("======================");
// console.log(my2.charAt(-1));
// console.log(my2[-1]);
// console.log(my2.at(-1));

// ===============================

// 3. charCodeAt()
// let str = "Algoritm and Oxford"
// console.log(str.charCodeAt(1));
// --------------------
// let str = "Algoritm and Oxford"
// let matn1 = "Salom"
// let matn2 = "Alik"
// let matn3 = "Nima gap"
// let matn = matn1.concat("", matn2, "", matn3)
// console.log(matn);

// --------------------

// includes()

// let str = "Algoritm and Oxford"
// let i = "and"
// if(str.includes(i)){
//     str = str.replace(i, "va")
// }else{
//     console.log("mavjud emas") 
// }
// console.log(str);

// --------------------

// 6. startsWith(), endsWith()
// let str = "Algoritm and Oxford"
// let s = "Alg"
// let isStart = str.startsWith(s)
// console.log(isStart);
// let e = "rd"
// let isEnd = str.endsWith(e)
// console.log(isEnd);

// --------------------

// let str = "Algoritm and Oxford"
// let isAlpha = str.search("and")
// console.log(isAlpha);
// console.log(str.indexOf("o"));
// console.log(str.lastIndexOf("o"));

// --------------------

let phone = "90 720 1500"
let newphone = phone.padStart(phone.length + 5, "+998 ")
console.log(newphone);

let name = "eshmat.toshmatov2026"
let email = name.padEnd(name.length + 10, "@gmail.com")
console.log(email);
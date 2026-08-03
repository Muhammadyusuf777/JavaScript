// repet - bir qiymatni qayta-qayta takrorlash uchun ishlatiladi
// let ism = "Toshmat"
// let r = ism.repeat(5)
// console.log(r);

// gol - goooooooool
// let str = "gol"
// let newStr = str[0] + str[1].repeat(10) + str[2]
// console.log(newStr);

// replace, replaceAll - bir qiymatni boshqa qiymatga almashtirib beradi  
// 17.07.2026 - 17/07/2026
// let sana = "17.07.2026"
// sana = sana.replaceAll(".", "/")
// console.log(sana);

// let email = "ali@gamil.com"
// email = email.replace("gamil", "yendex.ru")
// console.log(email);

// slice, substring - matndan nusxa olish uchun ishlatiladi
// let str = "Men algoritmda IT Centerda o'qiyapman."
// let a = str.slice(4,12)
// let b = str.substring(4,12)
// console.log(a);
// console.log(b);
// let c = str.slice(-9)
// console.log(c);
// let d = str.substring(-9)
// console.log(d);

// split arrayga aylantirish uchun ishlatiladi
// "Algoritm" - [a,l,g,o,r,i,r,m,]
// let str = "Algoritm"
// let arr = str.split("")
// console.log(arr);
// let str1 = "Algoritm, Oxford, Start21, Ziyokor"
// let arr1 = str.split(", ")
// console.log(arr1);

// trim boshi va oxiridagi bosh joylarni oilip tashaydi

// let matn = "      Salom         "
// console.log(matn);
// matn = matn .trim()
// console.log(matn);

// toString - barcha qiymatni stringga aylantiradi

// let raqam = 200
// console.log(raqam.toString());

// localeCompare - Xarflarni Alfabet boyicha taqqoslaydi
// 1,-1,0 qaytaradi
let a = "Salom"
let b = "lom"
console.log(a.localeCompare(b));

let c = "Salom"
let d = "Salom"
console.log(c.localeCompare(d));

let f = "Zlik"
let e = "Salom"
console.log(f.localeCompare(e));

//  eval - String ichidagi matematika amallari to'ri bajarib beradi
    `   `
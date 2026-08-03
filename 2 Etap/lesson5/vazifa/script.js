let str1 = "Algoritm"
console.log(str1.repeat(9));

let str2 = "Gol"
let st2= str2[0].repeat(5) + str2[1].repeat(10) + str2[2].repeat(5);
console.log(st2);

let str3 = "JavaScript"
console.log(str3.repeat(5));

let str4 = "Python"
let st4 = str4[0].repeat(5) + str4[1].repeat(10) + str4[2].repeat(5) + str4[3].repeat(10) + str4[4].repeat(5);
console.log(st4);

let str5 = "Programming"
let st5 = str5[0].repeat(5) + str5[1].repeat(10) + str5[2].repeat(5) + str5[3].repeat(10) + str5[4].repeat(5) + str5[5].repeat(10) + str5[6].repeat(5) + str5[7].repeat(10) + str5[8].repeat(5) + str5[9].repeat(10) + str5[10].repeat(5);
console.log(st5);

// ==========================

let str6 = "Algoritm yoki Oxford"
str6 = str6.replace("yoki", "va")
str6 = str6.replace("O", "A")
console.log(str6);

let str7 = "Algoritm va Oxford"
str7 = str7.replace("or", "ar")
str7 = str7.replaceAll("or", "ar") // bu all hammasini olib tashlaydi
console.log(str7)

let str8 = "A,lgori,tm,"
str8 = str8.replaceAll(",", "") // bu all hammasini olib tashlaydi
console.log(str8);

let str9 = "Muhammadyusuf"
str9 = str9.replaceAll("uf", "af")
console.log(str9);

let str10 = "monza"
str10 = str10.replace("mon", "gon")
console.log(str10);

// ==========================

let str = "Algoritm va Oxford"
let a = str.slice(0,8)
let b = str.slice(12)
str = b.concat(" va ", a)
console.log(str);

let str11 = "algoritm va start21"
let a1 = str11.slice(0,7)
let b1 = str11.slice(5,12)
str11 = b1.concat(" va ", a1)
console.log(str11);

let str12 = "javascript va python"
let a2 = str12.slice(0,10)
let b2 = str12.slice(13,19)
str12 = b2.concat(" va ", a2)
console.log(str12);

let str13 = "programming va java"
let a3 = str13.slice(0,11)
let b3 = str13.slice(14,18)
str13 = b3.concat(" va ", a3)
console.log(str13);

let str14 = "monza va ferrari"
let a4 = str14.slice(0,5)
let b4 = str14.slice(8,15)
str14 = b4.concat(" va ", a4)
console.log(str14);
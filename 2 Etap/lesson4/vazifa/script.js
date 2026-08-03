//  lengeth zunligini chiqarib beradi qancha harif bo'lsa son chiqaradi 8 ta harif bo'lsa 8 sonini chiqaradi
let sum0 = "Algoritm"
let sum1 = "OXfort"
let sum2 = "Start 21"
let sum3 = "Dombit"
let sum4 = "Algoritm"
let sum5 = "monza"
let sum6 = "Misollard"
let sum7 = "malibu"
let sum8 = "damas"
let sum9 = "onix"
console.log(sum0.length)
console.log(sum1.length)
console.log(sum2.length)
console.log(sum3.length)
console.log(sum4.length)
console.log(sum5.length)
console.log(sum6.length)
console.log(sum7.length)
console.log(sum8.length)
console.log(sum9.length)

console.log("========================")
// charAt bu berilgan son bersa index bo'yicha qidiradi qiymatni ichidan
let se1 = "burgut"
let se2 = "sher"
let se3 = "ot"
let se4 = "mol"
let se5 = "qiyon"
let se6 = "qoplon"
let se7 = "buri"
let se8 = "ayiq"
let se9 = "srtlon"
let se10 = "maymun"
console.log(se1.charAt(3))
console.log(se2.charAt(1))
console.log(se3.charAt(2))
console.log(se4.charAt(1))
console.log(se5.charAt(2))
console.log(se6.charAt(4))
console.log(se7.charAt(3))
console.log(se8.charAt(2))
console.log(se9.charAt(1))
console.log(se10.charAt(7))

console.log("=========================")
// at index bo'yicha bergan sonim ni string ichidan qidiradi bo'lsa consolga chiqaradi
let a1 = "pubg"
let a2 = "roblox"
let a3 = "counter"
let a4 = "cs.1.6"
let a5 = "minicraft"
let a6 = "dls 2026"
let a7 = "cs.2"
let a8 = "rblox"
let a9 = "TV larda"
let a10 = "Roblox"
console.log(a1.at(1))
console.log(a2.at(3))
console.log(a3.at(2))
console.log(a4.at(3))
console.log(a5.at(-1))
console.log(a6.at(-2))
console.log(a7.at(0))
console.log(a8.at(3))
console.log(a9.at(4))
console.log(a10.at(5))

console.log("===================================")
// concat bu berilgan string ga qo'yib qo'yadi berilgan qiymatimnni 
let b1 = "Telegram"
let b2 = "instagram"
let b3 = "Facebook"
let b4 = "x-er"
let b5 = "Tik Tok"
let b6 = "Gugle"
let b7 = "Terabayt tv"
let b8 = "server"
let b9 = "games"
let b10 = "emeil"
console.log(b1.concat(":Salom"))
console.log(b2.concat(":Sendanzo'riyo'q"))
console.log(b3.concat(":qalay"))
console.log(b4.concat("yahshisan"))
console.log(b5.concat("bo'ladi"))
console.log(b6.concat("yahshi"))
console.log(b7.concat("barmal"))
console.log(b8.concat("bo'lsa kerak"))
console.log(b9.concat("nimagappp"))
console.log(b10.concat("do'slar"))

console.log("=====================================")
// Men Bergan harifni string ichidan qidiradi va borbo'lsa true yo'qbo'lsa false chiqaradi
let nam1 = "Algoritm"
let nam2 = "OXfort"
let nam3 = "Start 21"
let nam4 = "Dombit"
let nam5 = "Algoritm"
let nam6 = "MAshqlarda"
let nam7 = "Misollard"
let nam8 = "Qoidalarda"
let nam9 = "Boshqalarda"
let nam10 = "Bizlarda"
console.log(nam1.includes("A"));
console.log(nam2.includes("a"));
console.log(nam3.includes("S"));
console.log(nam4.includes("d"));
console.log(nam5.includes("A"));
console.log(nam6.includes("n"));
console.log(nam7.includes("M"));
console.log(nam8.includes("Q"));
console.log(nam9.includes("s"));
console.log(nam10.includes("B"));

console.log("=================================")
// startsWith - stringni boshi shunaqami agar shunaqa bo'lsa true agar noto'gri bo'lsa false
let str1 = "Fanlar"
let str2 = "Matematika"
let str3 = "Onatili"
let str4 = "Tabifan"
let str5 = "Jistar"
let str6 = "Adabiot"
let str7 = "fizika"
let str8 = "rustili"
let str9 = "inliztili"
let str10 = "onash"
console.log(str1.startsWith("Fan"))
console.log(str2.startsWith("ka"))
console.log(str3.startsWith("Ona"))
console.log(str4.startsWith("tab"))
console.log(str5.startsWith("Jistar"))
console.log(str6.startsWith("Ada"))
console.log(str7.startsWith("Fi"))
console.log(str8.startsWith("ru"))
console.log(str9.startsWith("In"))
console.log(str10.startsWith("on"))

console.log("================================")
// padStart boshigA so'z yoki belgi qo'yib qo'yadi.
let brend11 = "Algoritm"
let brend12 = "Algoritm"
let brend13 = "Algoritm"
let brend14 = "Algoritm"
let brend15 = "Algoritm"
let brend16 = "Algoritm"
let brend17 = "Algoritm"
let brend18 = "Algoritm"
let brend19 = "Algoritm"
let brend20 = "Algoritm"
console.log(brend11.padStart(10 ,"it"));
console.log(brend12.padStart(14 ,"markaz"));
console.log(brend13.padStart(14 ,"studia"));
console.log(brend14.padStart(14 ,"o'qish"));
console.log(brend15.padStart(12 ,"kurs"));
console.log(brend16.padStart(10 ,"it"));
console.log(brend17.padStart(12 ,"sell"));
console.log(brend18.padStart(15 ,"grafica"));
console.log(brend19.padStart(14 ,"dizayn"));
console.log(brend20.padStart(14 ,"capcut"));
// // alert () - client message(xabar) chiqarish uchun ishlatiladi
// alert("Web site mizga xush kelibsiz!")
// // prompt() - clientga savol berih va qiymat kiritishni uchun ishlatiladi.
// let ism = prompt("Ismingizni kiriting")
// console .log(ism)
// // confirm() - Clientga qisqa savol berish uchun ishlatiladi
// let savol = confirm("Bugun darsga keldingizmi")
// console .log(savol)
// // ====================================================
// let con = confirm("asslomu aleykum")
    
// ============================

// let Ball = 75
// if(Ball >= 0 && Ball <= 49){
//     console.log("Juda yomon")
// }

// else if (Ball >= 50 && Ball <= 59){
//     console.log("yomon")
// }

// else if(Ball >= 60 && Ball <= 69){
//     console.log("Qoniqarsiz")
// }

// else if(Ball >= 70 && Ball <= 79){
//     console.log("Qoniqarli")
// }

// else if(Ball >= 80 && Ball <= 89){
//     console.log("Yaxshi")
// }

// else if(Ball >= 90 && Ball <= 100){
//     console.log("Alo")
// }

// let juft_yigindi = 0
// let toq = 0
// let raqam = 0
// while(raqam <=10){
//     if(raqam % 2 === 1){
//         toq += raqam
//     }else{
//         juft_yigindi += raqam}
//     raqam++
// }
// console.log(toq);
// console.log(juft_yigindi);

// console.log("=========================");

// let son = 1
// let juft = 0
// let toqs = 0
// do{
//     if(son % 2 === 1){
//         toqs += son
//     }else{
//         juft += son}
//     son++
// }while(son <= 10)
// console.log(juft);
// console.log(toqs);

// =================================

// let obj = {
//     id: 1,
//     ism: "Ali",
//     familya: "valiyev",
//     yosh: 20,
//     phone_price: 1000,
// }

// const xisobla = (obj) =>{
//     for(let key in obj){
//     if(key === "phone_price"){
//         obj[key] = obj[key] - (obj[key] * 15) / 100
//     }
// }
// return obj;
// }
// console.log(xisobla(obj));

// ======================

// let obj = {
//     id: 1,
//     ism: "Ali",
//     familya: "valiyev",
//     yosh: 20,
//     phone_price: 1000,
// }

// function xisobla (obj){
//     for(let key in obj){
//     if(key === "phone_price"){
//         obj[key] = obj[key] - (obj[key] * 15) / 100
//     }
// }
// return obj;
// }
// console.log(xisobla(obj));
 // =======================

//  let obj = {
//     id: 1,
//     ism: "Ali",
//     familya: "valiyev",
//     child:{
//         id: 2,
//         ism: "Vali",
//         familya: "Aliyev",
//     }
//  }


// obj.ism = "Ibo"
// obj.familya = "galdr"
// obj.child.ism = "afrika"
// obj.child.familya = "ibrohimov may mun"

// const {id, ism, familya, child: {id: id2, ism: ism2, familya: familya2}} = obj;
// console.log(id, ism, familya);
// console.log(id2, ism2, familya2);

// ======================


// let obj = {
//     model: "Gm",
//     name: "Malibu",
//     color: "black",
//     price: 20000,
// }

// function xisobla (obj){
//     for(let key in obj){
//     if(key === "price"){
//         obj[key] = obj[key] - (obj[key] * 15) / 100
//     }
// }
// return obj;
// }
// console.log(xisobla(obj))

// ==========================

// let obj = {
//     name: "Coca Cola",
//     width: 21,
//     oldPrice: 15000,
//     price: 18000,
// }
// for(let key in obj){
//     if(key === "oldPrice"){
//         let qqs = obj.price * 100 / obj[key] - 100
//         console.log(qqs);
//     }
// }




// let obj = {
//     id: 1,
//     nomi: "Malibu",
//     rangi: "Qora",
//     narxi: 12000,
// }

// 17 foiz ga bolish

// let obj = {
//     id: 1,
//     nomi: "Malibu",
//     rangi: "Qora",
//     narxi: 15000,
// }

// function xisobla (obj){
//     for(let key in obj){
//     if(key === "narxi"){
//         obj[key] = obj[key] + (obj[key] * 17) / 100
//     }
// }
// return obj;
// }
// console.log(xisobla(obj))

// =========================

// 5 gaham 3 gaham bolish
// let n = 20
// let yigindi = 0
// for(let i = 1; i <= n; i++){
//     if(i % 3 == 0 || i % 5 == 0) yigindi +=i
// }
// console.log(yigindi);

// ==========================

// start - prompot dan kiritilsin
// stop - prompt dan kiritilsin
// step - 1 ga teng bolsin
// toq sonlar yigindisi kattami yoki juft sonlar yigindisi kattami?

let start = +prompt("Start sonini kiriting")
let stop = +prompt("Stop sonini kiriting")
let step = 1
let juft_yigindi = 0
let toq_yigindi = 0
for(let i = start; i <= stop; i += step){
    if(i % 2 === 0){
        juft_yigindi += i
    }else{
        toq_yigindi += i
    }
}
if(juft_yigindi > toq_yigindi){
    console.log("Juft sonlar yigindisi katta")
}else if(juft_yigindi < toq_yigindi){
    console.log("Toq sonlar yigindisi katta")
}

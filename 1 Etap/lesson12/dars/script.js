// let obj = {
//     ism: "Muhammad yusuf",
//     familya: "yakubjanov",
//     yosh: 13,
//     kurs: "Algoritm"
// }

// // 1. static
// obj.ism = "ibrohim"
// obj.familya = "ibrogimov"
// obj.yosh = 15

// 2. dinamic
// obj["ism"] = "Muboshir"
// obj["familya"] = "xojayev"
// obj["yosh"] = 12
// obj["kurs"] = "index"


// for(let i in obj){
//     console.log(i, obj[i]);
// }

// =============================

// let obj = {
//     ism: "Muhammad yusuf",
//     familya: "yakubjanov",
//     yosh: 15,
// }
// let newObj = {}
// for(let key in obj){
//     if(typeof obj[key] === "number"){
//         newObj[key] = obj[key] / 2
//     }
// }
// console.log(newObj);

// let obj = {
//     ism: "Muhammad yusuf",
//     familya: "yakubjanov",
//     price: 10000,
//     chip: "M5",
// }

// let newObj = {}
// for(let key in obj){
//     if(typeof obj[key] === "number"){
//         newObj[key] = obj[key] / 2
//     }else if(key === "chip"){
//         newObj[key] = "M2"
//     }
//     else{
//         console.log(
//             newObj[key] = obj[key]
//         );  
//     }
// }
// console.log(newObj);

// ====================

// let obj = {
//     nomi: "Iphone 17 Pro Max",
//     color: "white",
//     price: 4000,
// }

// let newObj = {}
// for(let key in obj){
//     if(typeof obj[key] === "number"){
//         newObj[key] = obj[key] / 2
//     }else if(key === "color"){
//         newObj[key] = "Bluviolt"
//     }
//     else if(key === "nomi"){
//          newObj[key] = "phone 18 Pro Max"
//     }
//         else{
//             newObj[key] = obj[key]
//         }
// }
// console.log(newObj);


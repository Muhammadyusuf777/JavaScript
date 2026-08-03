// let obj = {
//     ism: "ali",
//     familya: "valiyev",
//     yosh: 15,
//     tel: "+998 99 111 22 33",
//     manzil: "namangan shahar    ",
// }



// let obj1 = structuredClone(obj)
// obj1.ism = "salim",
// obj1.familya = "alimov",
// obj1.manzil = "namangan shahar";
// obj1.tel = "+998 99 333 22 11";
// console.log(obj1);
// console.log(obj);

// ============================

// let qalam = {
//     pen:{
//         color: "black",
//         price: 2000,
//     },
//     pencil:{
//         color: "blue",
//         price: 5000,
//     },
//     book:{
//         page_count: 200,
//         price: 50000,
//     },
//      sumka:{
//         colo: "red",
//         price: 100.000,
//     },
//         laptop:{
//         colo: "Macbook",
//         price: 1000.000,
//     },
// }


// let sum = 0

// for(let key in qalam){
//     sum  += qalam[key].price
// }

// console.log(sum);

// =======================

// let qalam = {
//     pen:{
//         color: "black",
//         price: 2000,
//     },
//     pencil:{
//         color: "blue",
//         price: 5000,
//     },
//     book:{
//         page_count: 200,
//         price: 50000,
//     },
//      sumka:{
//         colo: "red",
//         price: 100000,
//     },
//         laptop:{
//         colo: "Macbook",
//         price: 10000000,
//     },
// }


// let sum = 0

// for(let key in qalam){
//     if(qalam[key].price >= 50000) sum += qalam[key].price
// }

// console.log(sum);

// =======================

// let obj = {
//     ism: "eshmat",
//     yosh: 50,
//     child:{
//         ism: "toshkent",
//         yosh: 20,
//     }
// }


//  let obj1 = structuredClone(obj)
//     obj.child.ism = "gulmat"
//     obj.child.yosh = 25
//     console.log(obj);
//     console.log(obj1);
    
// =================================

let obj = {
    name:"Algoritm",
    status:"It Center",
    year: 2016,
    filial:{
        name: "Algoritm",
        status: "It Center ",
        year: 2016,
    }
}

let {
    name,
    status,
    year,
    filial:{name: namesum, status: statuskim, year:yearchust},
} = obj
console.log(obj);

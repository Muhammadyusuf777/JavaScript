// let Algoritm = {
//     ism: "Algoritm IT Center",
//     yil: 2016,
//     manzil: "Chorsu, DXA binosi",
//     tel: "+998 95-720-1500"
// }

// let start21 = Object.assign({}, Algoritm)
// let start21 = structuredClone(Algoritm)
// start21.ism = "start21"

// console.log(start21)
// console.log(Algoritm);

// =======================
// ======================

let obj = {
    ism: "Eshmat",
    yosh: 20,
    status: "Ishchi",
    manzil: "Toshkent",
}


let Algoritm = Object.assign({}, obj)

Algoritm.ism = "toshmat",
Algoritm.yosh = 27,
Algoritm.manzil = "Toshkent"


// let obj1 = structuredClone(obj)
// obj1.ism = "toshmat",
// obj1.yosh = 2,
// obj1.manzil = "namangan";
// console.log(obj1);
console.log(obj);

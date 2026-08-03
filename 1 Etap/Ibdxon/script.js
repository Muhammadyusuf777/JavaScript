// let obj = {
//     id: 1,
//     ism: "Algoritm",
//     yil: 2016,
//     manzil: "DXA binosi",
// }

// let obj2 = Object.assign({}, obj)
// obj2.id = 2,
// obj2.ism = "Oxford",
// obj2.yil = 2022,
// obj2.manzil = "Choru, shrin dunyo yonida"

// // ==========================

// let obj3 = structuredClone(obj)
// obj.id = "3"
// obj.ism = "Start21"
// obj.yil = 21
// obj.manzil = "Korzinka yonida"

// console.log(obj2);
// console.log(obj3);

// =====================================================

// let Ball = 110

// if(Ball >= 0 && Ball <= 59){
//     console.log("Yiqildi")
// }

// else if (Ball >= 60 && Ball <= 70){
//     console.log("Ortacha")
// }

// else if(Ball >= 71 && Ball <= 80){
//     console.log("Yaxshi")
// }

// else if(Ball >= 81 && Ball <= 90){
//     console.log("Alo")
// }

// else if(Ball >= 91 && Ball <= 100){
//     console.log("Alo")
// }

// else{
//     console.log("Siz xato Ball kiritingiz")
// }

// ======================================
// let yigindi = 0
// for(let i = 0; i <= 10; i++){
//     yigindi += i
// }
// console.log(yigindi);


// let yigindi1 = 0
// let i = 1
// while(i <= 10){
//     yigindi1 += i
//     i++
// }
// console.log(yigindi1);

// let yigindi2 = 0
// let raqam = 1
// do{
//     yigindi1 += raqam
//     raqam++
// }while(raqam <= 10)
    
// console.log(yigindi2);

// ==========================

let obj = {
    name: "Webrain Academy",
    status: "It center",
};

function monza(obj) {
    return {
        name: "WBA",
        status: "IT",
    };
}
console.log(monza(obj))

console.log("=============================")

const limozn = function(obj) {
    return{
        name: "WBA",
        status: "IT"
    }
}
console.log(limozn(obj))

console.log("================")

const moshna = (obj) => {
    return {
        name: "WBA",
        status: "IT"
    };
};
console.log(moshna(obj));
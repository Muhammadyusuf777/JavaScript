// let a = 10
// let b = 20
// function function1(raqam1,raqam2){
//     let bolinma = raqam2 / raqam1
//     return bolinma
// }
// console.log(function1(a,b));

// const function2 = function (raqam3,raqam4) {
//     return raqam4 / raqam3
// }
// console.log(function2(a,b));

// const function3 = (raqam5,raqam6) =>{
//     let bolinma = raqam6 / raqam5
//     return bolinma
// }
// console.log(function3(a,b));


// let start = 1
// let stop = 10
// const function1 = function (a,b){
//     let yigindi = 0
//     for(i = a; i <= b; i++){
//         yigindi += i
//     }
//     return yigindi
// }
// console.log(function1(start,stop));

// const function2 = (a,b) =>{
//     let yigindi = 0
//     for(i = a; i <= b; i++){
//         yigindi += i
//     }
//     return yigindi
// }
// console.log(function2(start,stop));

let a = 5
let b = 7
const name1 = function (raqam1,raqam2) {
    if(raqam1 > raqam2){
        console.log(raqam1,"katta");
        console.log(raqam,"kichik");
    }else if(raqam1 < raqam2){
        console.log(raqam2, "katta");
        console.log(raqam1, "kichik");   
    }else{
        console.log(raqam1, "va", raqam2, "bir-- biriga teng.");   
    }
}
name1(a,b)

console.log("=========================================");


let c = 5
let d = 5
const name2 =(raqam1,raqam2) => {
    if(raqam1 > raqam2){
        console.log(raqam1,"katta");
        console.log(raqam,"kichik");
    }else if(raqam1 < raqam2){
        console.log(raqam2, "katta");
        console.log(raqam1, "kichik");   
    }else{
        console.log(raqam1, "va", raqam2, "bir-- biriga teng.");   
    }
}
name2(c,d)

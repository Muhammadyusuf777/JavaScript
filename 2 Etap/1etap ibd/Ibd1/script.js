// let arr = [1,2,3,4,5,6,7,8,9,10]
// let arr1 = []
// let arr2 = []
// for(let i = 0; i < arr.length; i++){
//     if(i % 2 === 0){
//         arr1.push(arr[i])
//     } else {
//         arr2.push(arr[i])
//     }
// }
// console.log(arr1);
// console.log(arr2);

// =========================

// let arr3 = [1,2,3,4,5,6,7,8,9,10]
// let sum = 0
// for(let i = 0; i < arr3.length; i++){
//     if(arr3[i] % 2 === 0){
//         sum += arr3[i]
//     }
// }
// console.log(sum);

// =============================

let str = "algoritm it"
let newStr = ""

for(let i = 0; i < str.length; i++){
    if( i === 0 || (i >= str.length - 2)){
        newStr += str[i].toUpperCase()
    } else {
        newStr += str[i]
    }
}
// let arr = ["Olma", "Anor", "Uzum", "Nok"]
// let len = arr.find((value, index, a) => {
//     if(value ===  "Uzum") return value
// })
// console.log(len.length);

// let arr = [5,2,7,9,5,10,1,4]
// let katta = Math.max(...arr)
// let max = arr.findIndex((value, index, a) => {
//     if(katta === value) return true 
// })
// console.log(max);

// let arr = ["Olma", "Anor", "Shaftoli", "Uzum", "Nok"]
// let len = 0
// let v = ""
// arr.forEach((value, index, a) => {
//     if(value.length > len){
//         len = value.length
//         v = value
//     }
// })
// console.log(v);

let arr = ["Scratch", "Python", "Html", "Css", "Scratch", "JavaScript", "JS","React JS"]

let i = arr.lastIndexOf((value, index, a) => "Scratch" === value)
console.log(i);


// javobi [1,2,9,7,0,3]
// let arr = [1,1,2,9,9,7,0,0,0,3,1]
// let newArr = []
// for(let value of arr){
//     if(!newArr.includes(value)) newArr.push(value)
// }
// console.log(newArr);


// let str = "AAALLLLGOOOOOORRITTTTM"
// let newArr = []
// for(let value of str){
//     if(!newArr.includes(value)) newArr.push(value)
// }
// console.log(newArr.join(""));

// let arr = [1,2,3,4,5,6,7,8,9];

// let sum = 0
// for(let value of arr){
//     let code = `${value}`.charCodeAt()
//     if(!(code % 2)) sum += code
// }
// console.log(sum);

let str = "AlgORItm"

let katta = ""
let kichik = ""
for (let value of str) {
    if (value !== value.toUpperCase()) kichik += value
   else katta += value
}
console.log(katta, kichik);

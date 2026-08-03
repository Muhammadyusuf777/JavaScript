// const user = {
//     name: "ali",
//     yosh: 25,
//     job: "Developer",
// }



// const key = "salariy"

// function getSalary(a, b) {
//     if (b in a) {
//         console.log(a[b])
//     } else {
//         console.log("Not found")
//     }
// }

// getSalary(user, key)

// ====================

// const status = {
//     views: 10,
// }
// const key = "views"

// function set(a,b){
//     if(b in a){
//     status[b]++
// }else{
//     status[b] = 1
// }
// console.log(status);
// }
// set(status,key)

// ======================

// const user = {
//     name: "ali",
//     age: 20,
// }
// let obj1 = structuredClone(user)

// function ib(a,b){
//     obj1.age = 30;

// console.log(a);
// console.log(b);
// }
// ib(user,obj1)

// ========================

// const user = {
//     name: "ali",
//     address:{
//         city:"Toshkent"
//     }
// }

// let start21 = structuredClone(user)
// function kim(a,b){
//     b.address.city = "Bukhara"
//     console.log(b);
//     console.log(a);
// }
// kim(user,start21)

// =======================


// const data = {
//     user:{
//         name: "ali",
//         skills: ["js", "react"],
//     },
// }

// let start21 = structuredClone(data)
// function kim(a){
//     a.user.skills = ["js", "react", "Nodejs"]
//     console.log(a);
    
// }
// kim(start21)

// =========================

// const user = {
//     name: "ali",
// }

// if("age" in user){
//     user["age"]++
// }else{
//     user["age"] = 18
// }
// console.log(user);

// ===================

const user = {
    name: "ali"
}
const{name, age = 18} = user
console.log(name,age);

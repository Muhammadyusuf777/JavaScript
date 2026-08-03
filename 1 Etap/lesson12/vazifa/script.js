let obj = {
  name: "Ali",
  age: 30,
  city: "Tashkent"
}

    let newObj = {}

    for (let key in obj) {
    if (typeof obj[key] === "number") {
        newObj[key] = obj[key] + 10
    } else if (key === "name") {
        newObj[key] = "Vali"
    } else {
        newObj[key] = obj[key]
    }
    }

    console.log(newObj)


// ===========================

let apple = {
  product: "Laptop",
  price: 2000,
  brand: "Apple"
}

let apple1 = {}

for (let key in apple) {
  if (typeof apple[key] === "number") {
    apple1[key] = apple[key] * 2
  } else if (key === "brand") {
    apple1[key] = "Samsung"
  } else {
    apple1[key] = apple[key]
  }
}

console.log(apple1)

// ===========================

let person = {
    name: "John",
    age: 25,
    city: "toshkent"
}

let newPerson = {}

for (let key in person) {
    if (typeof person[key] === "number") {
        newPerson[key] = person[key] + 5
    } else if (key === "name") {
        newPerson[key] = "Doe"
    } else {
        newPerson[key] = person[key]
    }
}

console.log(newPerson)

// ===========================


let obj1 = {
    nomi: "Iphone 17 Pro Max",
    color: "white",
    price: 4000,
}

let kobj = {}
for(let key in obj1){
    if(typeof obj1[key] === "number"){
        kobj[key] = obj1[key] / 2
    }else if(key === "color"){
        kobj[key] = "Bluviolt"
    }
    else if(key === "nomi"){
         kobj[key] = "phone 18 Pro Max"
    }
        else{
            kobj[key] = obj1[key]
        }
}
console.log(kobj);

// ===========================

let obj2 = {
    name: "Samsung Galaxy S23 Ultra",
    color: "black",
    price: 1200,
}
let newObj2 = {}
for(let key in obj2){
    if(typeof obj2[key] === "number"){
        newObj2[key] = obj2[key] * 2
    }else if(key === "color"){
        newObj2[key] = "white"
    }
    else if(key === "name"){
            newObj2[key] = "Samsung Galaxy S24 Ultra"
    }else{
        newObj2[key] = obj2[key]
    }
}
console.log(newObj2);

// ===========================

let obj3 = {
    name: "MacBook Pro 16",
    color: "wahite",
    price: 2500,
}

let newObj3 = {}
for(let key in obj3){
    if(typeof obj3[key] === "number"){
        newObj3[key] = obj3[key] - 500
    }else if(key === "color"){
        newObj3[key] = "black"
    }else if(key === "name"){
        newObj3[key] = "MacBook Pro 14"
    }else{
        newObj3[key] = obj3[key]
    }
}

console.log(newObj3);

// ===========================

let apple5 = {
    product: "iPhone 14 Pro Max",
    price: 1200,
    brand: "Apple"
}
let apple6 = {}
for(let key in apple5){
    if(typeof apple5[key] === "number"){
        apple6[key] = apple5[key] + 100
    }else if(key === "brand"){
        apple6[key] = "Samsung"
    }else if(key === "product"){
        apple6[key] = "Samsung Galaxy S24 Ultra"
    }else{
        apple6[key] = apple5[key]
    }
}
console.log(apple6);

// =================================


let apple4 = {
    product: "iPhone 21 pro Max",
    price: 200,
    brand: "Apple"
}
let apple3 = {}
for(let key in apple5){
    if(typeof apple5[key] === "number"){
        apple6[key] = apple5[key] / 10
    }else if(key === "brand"){
        apple6[key] = "Samsung"
    }else if(key === "product"){
        apple6[key] = "Samsung Galaxy S26 Ultra"
    }else{
        apple6[key] = apple5[key]
    }
}
console.log(apple6);
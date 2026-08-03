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

let obj1 = structuredClone(obj)
obj1.ism = "toshmat",
obj1.yosh = 2,
obj1.manzil = "namangan";
console.log(obj1);
console.log(obj);

// =============================

let user = {
    name: "Ali",
    age: 25,
    city: "Samarqand"
}

let acer = Object.assign({}, user)
acer.name = "ali"
acer.age = 35
acer.city = "Toshkent"

let user1 = structuredClone(user)
user1.name = "Vali"
user1.age = 30
user1.city = "nama"

console.log(user1)
console.log(acer)

// =============================

let student = {
    name: "Olim",
    age: 22,
    city: "Buxoro"
}

let hp = Object.assign({}, student)
hp.name = "olim"
hp.age = 32
hp.city = "Toshkent"

let student1 = structuredClone(student)
student1.name = "Vali"
student1.age = 30
student1.city = "namangan"
console.log(student1)
console.log(hp)

// =============================

let teacher = {
    name: "abdulloh",
    age: 22,
    city: "Buxoro"
}

let del = Object.assign({}, teacher) 
del.name = "abdulloh"
del.age = 32
del.city = "Toshkent"

let teacher1 = structuredClone(teacher)
teacher1.name = "Vali"
teacher1.age = 30
teacher1.city = "namangan"
console.log(teacher1)
console.log(del)

// =============================

let doctor = {
    name: "abdullox",
    age: 35,
    city: "Toshkent"
}

let dell = Object.assign({}, doctor)
dell.name = "abdumalik"
dell.age = 45
dell.city = "Samarqand"

let doctor1 = structuredClone(doctor)
doctor1.name = "ali"
doctor1.age = 40
doctor1.city = "namangan"
console.log(doctor1)
console.log(dell)

// =============================

let car = {
    brand: "Chevrolet",
    model: "Cobalt",
    year: 2022
}

let bmw = Object.assign({}, car)
bmw.brand = "BMW"
bmw.model = "X5"
bmw.year = 2023

let car1 = structuredClone(car)
car1.brand = "Mercedes"
car1.model = "Class"
car1.year = 2024
console.log(car1)
console.log(bmw)

// =============================

let phone = {
    brand: "Apple",
    model: "iPhone 13",
    year: 2023
}

let samsung = Object.assign({}, phone)
samsung.brand = "Samsung"
samsung.model = "Galaxy S23"
samsung.year = 2024

let phone1 = structuredClone(phone)
phone1.brand = "Xiaomi"
phone1.model = "Redmi 12"
phone1.year = 2025
console.log(phone1)
console.log(samsung)

// =============================

let havo = {
    city: "Toshkent",
    grads: 30,
    quyosh: "bor"
}

let havo1 = Object.assign({}, havo)
havo1.city = "Samarqand"
havo1.grads = 35
havo1.quyosh = "yoq"

let havo2 = structuredClone(havo)
havo2.city = "Buxoro"
havo2.grads = 25
havo2.quyosh = "bor"
console.log(havo1)
console.log(havo2)

// ============================

let hafta = {
    Dush: "Dushanba",
    sesh: "Seshanba",
    chors: "Chorshanba",
    paysh: "Payshanba",
    juma: "Juma",
    shan: "Shanba",
    yak: "Yakshanba"
}

let hafta1 = Object.assign({}, hafta)
hafta1.Dush = "seshanba"
hafta1.sesh = "payshanba"
hafta1.chors = "juma"
hafta1.paysh = "yakshanba"
hafta1.juma = "shanba"
hafta1.shan = "chorshanba"
hafta1.yak = "dushanba"


let hafta2 = structuredClone(hafta)
hafta2.Dush = "yakshanba"
hafta2.sesh = "shanba"
hafta2.chors = "juma"
hafta2.paysh = "payshanba"
hafta2.juma = "chorshanba"
hafta2.shan = "seshanba"
hafta2.yak = "dushanba"
console.log(hafta1)
console.log(hafta2)
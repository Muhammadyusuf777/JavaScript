// let str = "O'zbekiston"
// console.log(str);

// let str1 = 'O`zbekiston'
// console.log(str1);

// let str2 = `O'zbekiston`
// console.log(str2);

// let str3 = String(2026)
// console.log(str3);

// let city = "Tashkent"
// console.log(city);

// let name = 'Ali'
// console.log(name);

// let year = `2025`
// console.log(year);

// let text = String(true)
// console.log(text);

// let number = String(100)
// console.log(number);

// let word = "JavaScript"
// console.log(word);

// ===============================

let obj = {
  familya: "Valiyev",
  narx: 12000,
  yosh: 20
}
console.log(obj.child?.familya);

let user = {
  familya: "Aliyev",
  narx: 50000,
  yosh: 25
}
console.log(user.address?.narx);

let cars = {
  familya: "Karimov",
  narx: 9000,
  yosh: 30
}
console.log(cars.owner?.yosh);

let data = {
  familya: "Tursunov",
  narx: 15000,
  yosh: 22
}
console.log(data.child?.narx);

let info = {
  familya: "Rasulov",
  narx: 7000,
  yosh: 18
}
console.log(info.user?.familya);

let apple = {
  familya: "Sobirov",
  narx: 45000,
  yosh: 27
}
console.log(apple.owner?.yosh);

let bag = {
  familya: "Ergashev",
  narx: 33000,
  yosh: 35
}
console.log(bag.shop?.narx);

let cat = {
  familya: "Xolmatov",
  narx: 11000,
  yosh: 19
}
console.log(cat.friend?.familya);

let market = {
  familya: "Jo'rayev",
  narx: 25000,
  yosh: 40
}
console.log(market.client?.yosh);

let box = {
  familya: "Usmonov",
  narx: 99000,
  yosh: 29
}
console.log(box.user?.narx);

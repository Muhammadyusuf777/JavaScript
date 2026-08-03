// 1. length
// Vazifasi: String uzunligini (harflar va bo'shliqlar sonini) qaytaradi.

let text = "JavaScript";
console.log(text.length);

let word = "Assalomu alaykum";
console.log(word.length);

// 2. charAt()
// Vazifasi: Berilgan indeksdagi belgini qaytaradi.

let text1 = "Dasturlash";
console.log(text1.charAt(4));

let text2 = "Algoritm";
console.log(text2.charAt(0));

// 3. at()
// Vazifasi: Indeks bo'yicha belgini qaytaradi.
// Manfiy indeks (-1) bilan oxirgi belgini olish mumkin.

let text3 = "Frontend";
console.log(text3.at(-1));

let text4 = "JavaScript";
console.log(text4.at(-2));

// 4. charCodeAt()
// Vazifasi: Belgining Unicode (ASCII) kodini qaytaradi.

let a = "A";
console.log(a.charCodeAt(0));

let salom = "Salom";
console.log(salom.charCodeAt(2));

// 5. concat()
// Vazifasi: Bir nechta stringlarni birlashtiradi.

let ism = "Ali";
let familiya = "Valiyev";
console.log(ism.concat(" ", familiya));

let city = "Toshkent";
let country = "Uzbekistan";
console.log(city.concat(", ", country));

// 6. includes()
// Vazifasi: String ichida berilgan matn bor yoki yo'qligini tekshiradi.
// Natija true yoki false bo'ladi.

let matn = "Men JavaScript o'rganayapman";
console.log(matn.includes("Java"));

let email = "user@gmail.com";

if(email.includes("@")){
    console.log("To'g'ri email");
}else{
    console.log("Noto'g'ri email");
}

// 7. startsWith()
// Vazifasi: String berilgan matn bilan boshlanishini tekshiradi.

let file = "photo.png";
console.log(file.startsWith("pho"));

let phone = "+998901234567";
console.log(phone.startsWith("+998"));

// 8. endsWith()
// Vazifasi: String berilgan matn bilan tugashini tekshiradi.

let file1 = "index.html";
console.log(file1.endsWith(".html"));

let image = "car.jpg";
console.log(image.endsWith(".png"));

// 9. search()
// Vazifasi: Berilgan so'zning birinchi indeksini qaytaradi.
// Topilmasa -1 qaytaradi.

let text5 = "Hello JavaScript";
console.log(text5.search("Java"));

let text6 = "Backend Developer";
console.log(text6.search("end"));

// 10. indexOf()
// Vazifasi: Belgining yoki so'zning birinchi uchragan indeksini qaytaradi.

let text7 = "Programming";
console.log(text7.indexOf("g"));

let text8 = "JavaScript";
console.log(text8.indexOf("a"));

// 11. lastIndexOf()
// Vazifasi: Belgining oxirgi uchragan indeksini qaytaradi.

let text9 = "banana";
console.log(text9.lastIndexOf("a"));

let text10 = "Mississippi";
console.log(text10.lastIndexOf("s"));

// 12. replace()
// Vazifasi: Stringdagi birinchi topilgan so'zni boshqasiga almashtiradi.

let text11 = "Men Java o'rganyapman";
console.log(text11.replace("Java", "JavaScript"));

let text12 = "Bugun dushanba";
console.log(text12.replace("dushanba", "juma"));

// 13. padStart()
// Vazifasi: String boshiga belgi yoki matn qo'shib uzunligini oshiradi.

let number = "99";
console.log(number.padStart(5, "0"));

let phone1 = "90 720 1500";
console.log(phone1.padStart(phone1.length + 5, "+998 "));

// 14. padEnd()
// Vazifasi: String oxiriga belgi yoki matn qo'shib uzunligini oshiradi.

let name = "Ali";
console.log(name.padEnd(10, "."));

let login = "eshmat.toshmatov2026";
console.log(login.padEnd(login.length + 10, "@gmail.com"));



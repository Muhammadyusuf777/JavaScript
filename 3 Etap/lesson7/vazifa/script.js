// let students = [
//   { id: 1, ism: "Abdurahmon", yosh: 13, ball: 97 },
//   { id: 2, ism: "Hayotbek", yosh: 14, ball: 82 },
//   { id: 3, ism: "Ibrohim", yosh: 14, ball: 70,  },
//   { id: 4, ism: "Mubosher", yosh: 12, ball: 70 },
//   { id: 5, ism: "Muhammadyusuf", yosh: 13, ball: 70 },
//   { id: 6, ism: "Azizbek", yosh: 14, ball: 75 },
//   { id: 7, ism: "Abrorbek", yosh: 14, ball: 78 },
//   { id: 8, ism: "Muhammadali", yosh: 13, ball: 70 },
//   { id: 9, ism: "Husanboy", yosh: 13, ball: 80 },
//   { id: 10, ism: "Abubakr", yosh: 14, ball: 75 },
//   { id: 11, ism: "Abdulaziz", yosh: 14, ball: 80 },
// ];

// let a = Object.groupBy(students, (v) => v.ball);
// console.log(a);

// let a = Map.groupBy(students, (v) => {
//     if(v.yosh >= 14) return "Chollar"
//     return "Yoshlar"
// });
// console.log(a);

// let students = [
//   { id: 1, ism: "Abdurahmon", yosh: 13, ball: 97 },
//   { id: 2, ism: "Hayotbek", yosh: 14, ball: 82 },
//   { id: 3, ism: "Ibrohim", yosh: 14, ball: 70 },
//   { id: 4, ism: "Mubosher", yosh: 12, ball: 70 },
//   { id: 5, ism: "Muhammadyusuf", yosh: 13, ball: 70 },
//   { id: 6, ism: "Azizbek", yosh: 14, ball: 75 },
//   { id: 7, ism: "Abrorbek", yosh: 14, ball: 78 },
//   { id: 8, ism: "Muhammadali", yosh: 13, ball: 70 },
//   { id: 9, ism: "Husanboy", yosh: 13, ball: 80 },
//   { id: 10, ism: "Abubakr", yosh: 14, ball: 75 },
//   { id: 11, ism: "Abdulaziz", yosh: 14, ball: 80 },
// ];

// let qoniqarli = "A'lo darajada";
// let qoniqarsiz = "Ko'proq harakat qilish kk.";
// let obj = {}
// for(let value of students){
//     if(obj[value.yosh]) obj[value.yosh].push(value)
//     else obj [value.yosh] = [value]
// }
// console.log(obj)

// object.groupBy

// object.groupBy("Data", "Collbaek")

// let obj = Object.groupBy(students, (std) => std.yosh)
// console.log(obj)

// let obj = Object.groupBy(students, (std) => std.ism[0])
// console.log(obj)

// let obj = Map.groupBy(students, (std) => {
//     if(std.ball >= 80) return qoniqarli
//     return qoniqarsiz
// })

// console.log(obj)

// =============================================

// function ddd(student) {
//   student = { id: students.length + 1, ...student };
//   students.push(student);
//   return students;
// }

// ddd({ ism: "Abdukomil", yosh: "14", ball: 50 });
// ddd({ ism: "Azimjon", yosh: "11", ball: 30 });
// ddd({ ism: "Abdulaziz", yosh: "11", ball: 35 });
// ddd({ ism: "ilhomjon", yosh: "13", ball: 60 });
// console.log(students);

// function nam(data, key) {
//   return data.sort((a, b) => a[key].localeCompare(b[key]));
// }    
// let sord = nam(students, "ism");
// console.log(sord);\

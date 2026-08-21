let students = [
  { id: 1, ism: "Abdurahmon", yosh: 13, ball: 97 },
  { id: 2, ism: "Hayotbek", yosh: 14, ball: 82 },
  { id: 3, ism: "Ibrohim", yosh: 14, ball: 70 },
  { id: 4, ism: "Mubosher", yosh: 12, ball: 70 },
  { id: 5, ism: "Muhammadyusuf", yosh: 13, ball: 70 },
  { id: 6, ism: "Azizbek", yosh: 14, ball: 75 },
  { id: 7, ism: "Abrorbek", yosh: 14, ball: 78 },
  { id: 8, ism: "Muhammadali", yosh: 13, ball: 70 },
  { id: 9, ism: "Husanboy", yosh: 13, ball: 80 },
  { id: 10, ism: "Abubakr", yosh: 14, ball: 75 },
  { id: 11, ism: "Abdulaziz", yosh: 14, ball: 80 },
];

// function getsort(data, key) {
//   return data.sort((a, b) => {
//     if (typeof a == "string") {
//       return a[key].localeCompare(b[key]);
//     }
//     return a[key] - b[key];
//   });
// }

// let sort = (getsort = (students, "ism"));
// let sort2 = (getsort = (students, "yosh"));

// console.log();

// function ddd(data, limit) {
// //   return data.filter((obj) => obj.ism.length >= limit);
//   return data.filter((obj) => obj.ism[0] === limit);
// }
// let a = ddd(students, "A");
// console.log(a);

// function ad(data, id, chengism, a) {
//     data.map((obj) => {
//         if(obj.id === id){
//             obj.ism = chengism
//             obj.ball
//         }
//         return obj.ball = a
//     })
// }
// let she = ad(students, 5, "Eshmat", 100)
// console.log(she)

function de(data, id) {
  data.filter((obj) => obj.id !== id);
}
let d = de(students, 6);
d = de(d, 9);
console.log(d)
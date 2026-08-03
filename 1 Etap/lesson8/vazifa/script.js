/* 1-masala */
// Loop: 1 dan 20 gacha
// Vazifa: Konsolga sonlarni chiqarish
// Continue sharti: Agar son 5 ga qoldiqsiz bo'linsa (i % 5 === 0), continue ishlatilsin
// Natija: 5,10,15,20 chiqmasdan, qolgan sonlar chiqsin
// for (let i = 1; i <= 20; i++) {
//     if (i % 5 === 0) {
//         continue
//     }
//     console.log(i)
// }


/* 2-masala */
// Loop: 1 dan 30 gacha
// Vazifa: Konsolga faqat juft sonlarni chiqarish
// Continue sharti: Agar son toq bo'lsa (i % 2 !== 0), continue ishlatilsin
// Natija: 2,4,6,8,...,30 chiqsin
// for (let i = 1; i <= 30; i++) {
//     if (i % 2 !== 0) {
//         continue
//     }
//     console.log(i)
// }


/* 3-masala */
// Loop: 1 dan 50 gacha
// 
// Continue sharti: Agar son 10 dan 20 gacha bo'lsa (i >= 10 && i <= 20), continue ishlatilsin
// Natija 10-20 oralig'idagi sonlar qo'shilmasin
// for (let i = 1; i <= 50; i++) {
//     if (i >= 10 && i <= 20) {
//         continue
//     }
//     console.log(i)
// }

for (let i = 1; i <= 50; i++) {
    if (i < 10 || i > 20) {
        console.log(i)
    }
}

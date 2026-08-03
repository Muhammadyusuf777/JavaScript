// function sameCase(a, b){
//   if((a === a.toUpperCase() && a === a.toLowerCase()) || (b === b.toUpperCase() && b === b.toLowerCase())){
//     return -1
//   }
//   else if((a === a.toLowerCase() && b === b.toLowerCase()) || (a === a.toUpperCase() && b === b.toUpperCase())){
//     return 1
//   }
//   else if((a === a.toLowerCase() && b === b.toUpperCase()) || (b === b.toLowerCase() && a === a.toUpperCase())){
//     return 0
//   }d
// }

// =====================================

// let countBy = (x, n, z = []) => {
//     for (let i = 1; i <= n; i++)z.push(x * i)
// }
// return z

// =====================================


function lineupStudents(students) {
    return students.split(" ").sort((a, b) => {
        if (a.length === b.length) return b.localeCompare(a)
        return b.length - a.length
    })
}
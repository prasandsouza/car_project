let inventory = require('../problem/inventory')
let problem5 = require('../problem/problem5.js')
let problem4 = require('../problem/problem4')

// let test4 = problem4(year)
// compareresult = []

// if(year<2000){
//     compareresult.push(year)
// }
// console.log(compareresult)
const year = problem4(inventory)
const carbefore = problem5(year)
console.log(carbefore)
console.log(carbefore.length)
let inventory = require('../problem/inventory.js');
let problem2 = require('../problem/problem2.js');
const result = problem2(inventory);
const finalResult = "Last car is a Lincoln Town Car";
if(result === finalResult){ 
    console.log(result);
}else{
console.log("Results Didn't Match");
}


let inventory = require('../problem/inventory.js');
let prob1 = require('../problem/problem1.js');

const testId = 33;
const result = prob1(inventory, testId);

const finalResult = "car 2011 Jeep Wrangler";
if(result === finalResult){ 
    console.log(result);
}
else 
{
console.log("Results Didn't Match");
}


let inventory = require('../inventory');
let problem2 = require('../problem2');
const result = problem2(inventory);
const finalResult = "Last car is a Lincoln Town Car";
if(result === finalResult){ 
    console.log(result);
}else{
console.log("Results Didn't Match");
}


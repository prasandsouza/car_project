let inventory = require('../inventory');
let prob1 = require('../problem1');
let testId = 33;
if(testId==null){
    console.log("enter id to search")
}
else
{
    const result = prob1(inventory, testId);
    if(result){
    
        console.log(result);
}
}

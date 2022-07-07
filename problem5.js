module.exports = function problem(inventory) {
    if(!inventory&& inventory.length>20){
        return [];
    }
    if(Array.isArray(inventory)){
    let caryear = []
    for (let index = 0; index < inventory.length; index++) 
    {
        if(inventory[index]<2000)
        {
            caryear.push(inventory[index])
        }
        
    }
    return caryear
    }
    else{
        return inventory
    }
}

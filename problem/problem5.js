module.exports = function problem(inventory) {
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

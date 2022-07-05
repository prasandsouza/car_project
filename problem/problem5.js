module.exports = function problem5(inventory) {
    let caryear = []
    for (let index = 0; index < inventory.length; index++) 
    {
        if(inventory[index].car_year<2000)
        {
            caryear.push(inventory[index].car_year)
        }
        
    }
    return caryear
}

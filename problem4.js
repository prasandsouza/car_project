module.exports = function(inventory)
{
    let caryear = []
    for (let index = 0; index < inventory.length; index++) 
    {
        caryear.push(inventory[index].car_year)
        
    }
    return caryear;
}
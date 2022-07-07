module.exports = function problem1(inventory, id)
{
    let car;
    for (let i = 0; i <= inventory.length; i++) 
    {
        if(inventory[i].id === id)
        {
            car = inventory[i];
            break;
        }
        
    }
    let result = "car "+car.car_year+" "+car.car_make+" "+car.car_model
    return result;
}
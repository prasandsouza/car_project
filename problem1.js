module.exports = function problem1(inventory, id)
{
    if(!inventory){
        return [];
    }
    if(!id){
        return id
    }
    if(inventory.length==0)
    {
        return inventory
    }

    if(Array.isArray(inventory))
    {
    let car;
    for (let i = 0; i <= inventory.length; i++) 
    {
        if(id>50){return id}
        if(inventory[i].id === id)
        {
            car = inventory[i];
            break;
        }
    }
    let result = "car "+car.car_year+" "+car.car_make+" "+car.car_model
    let result1 = [result];
    return result1;
    }
    else{
        return inventory
    }
    
}
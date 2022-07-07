module.exports = function(inventory)
{   
    if(!inventory){
        return [];
    }
    if(Array.isArray(inventory))
    {
    let model = inventory.sort((a, b) => a.car_model.toLowerCase() > b.car_model.toLowerCase() ? 1 : -1);
    return model;
    }
    else
    {
        return inventory
    }
}

module.exports = function problem2(inventory){
    if(!inventory){
        return [];
    }
    if(Array.isArray(inventory)){

    return ("Last car is a " + inventory[inventory.length-1].car_make + " " +inventory[inventory.length-1].car_model)
    }
    else
    {
        return inventory
    }
}

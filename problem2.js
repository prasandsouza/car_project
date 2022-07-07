module.exports = function problem2(inventory){
    if(!inventory && inventory.length>20){
        return [];
    }
    if(Array.isArray(inventory)){

    return ("Last car is a " + inventory[inventory.length-1].car_make + " " +inventory[inventory.length-1].car_model)
    }
    else
    {
        return []
    }
}

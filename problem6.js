module.exports = function(inventory){

    if(!inventory){
        return [];
    }
    if(Array.isArray(inventory))
    {
    let selectedcar = [];
    for (let index = 0; index < inventory.length; index++) {
        if(inventory[index].car_make==='BMW' || inventory[index].car_make === 'Audi')
        selectedcar.push(inventory[index])
    }
    return selectedcar
    }
    else
    {
        return inventory
    }
}
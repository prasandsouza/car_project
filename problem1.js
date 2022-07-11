module.exports = function problem1(inventory, id) {
    if (!inventory || !id) {
        return [];
    }
    else 
    {   
        if (Array.isArray(inventory)) {

            for (let i = 0; i < inventory.length; i++) {
                if (inventory[i].id === id) {
                    return inventory[i];
                }
            }
        }else{return []}
    }
}
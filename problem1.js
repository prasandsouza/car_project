module.exports = function problem1(inventory, id)
{
    if(!inventory && !id)
    {
        return [];
    }
    if(inventory.length==0 && inventory.length>20)
    {
        return inventory
    }
    if(id==null)
    {
        return []
    }else{
            if(Array.isArray(inventory))
            {
                let car;
                for (let i = 0; i <= inventory.length; i++) 
                {
                    if(id>50){return id}
                    if(inventory[i].id === id)
                    {
                        return inventory[i];
                    }
                }
            }
            else{
                return inventory
            }
    }

}
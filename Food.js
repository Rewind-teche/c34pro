class Food
{
    constructor(){}
    getFood()
    {
        var foodStockRef = database.ref('Food')
        foodStockRef.on("value",(data)=>{
            foodS = data.val();
        })
    }

    updateFood(x)
    {
        if(x<=0)
        {
            x=0
        }
        else{
            x -= 1
        }
         database.ref('/').update({
            Food:x
        })
    }
}
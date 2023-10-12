const arr= [25, 47, 50, 100];

//4-> Creating my own reduce function

Array.prototype.myReduce = function(callback)
{
    if(this.length==1)
        return this[0];
    let temp= callback(this[0],this[1]);
    for(let i=2;i<this.length;i++)
    {
        temp= callback(temp,this[i])
    }
    return temp;
}

let sum= arr.myReduce(function(num1,num2)
{
    return num1+num2; //We can reduce the array to a single term by performing given operation recursively among consecutive remaining elements.
});

console.log(sum);
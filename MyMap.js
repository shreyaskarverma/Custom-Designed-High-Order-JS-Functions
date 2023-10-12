const arr= [25, 47, 50, 100];

//2-> Creating my own map function

Array.prototype.myMap = function(callback)
{
    let temp=[];
    for(i of this)
    {
        temp.push(callback(i));
    }
    return temp;
}
let array= arr.myMap(function(num)
{
    return num+1; //We can manipulate with each array elements and the function returns the final manipulated array.
});

console.log(array);
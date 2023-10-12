const arr= [25, 47, 50, 100];

//3-> Creating my own filter function

Array.prototype.myFilter = function(callback)
{
    let temp=[];
    for(i of this)
    {
        if(callback(i))
            temp.push(i);
    }
    return temp;
}

let array= arr.myFilter(function(num)
{
    return num>40; //We can filter the array elements we want by putting the condition here.
});

console.log(array);
const arr= [25, 47, 50, 100];

//1-> Creating my own forEach function

Array.prototype.myForEach = function(callback)
{
    for(i of this)
        callback(i);
}
arr.myForEach(function(num)
{
    console.log(num);//We can write any logic here to work with each array elements.
});


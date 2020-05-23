var array = [[1,2],[3,4]]

for(var i = 0 ; i < array.length ; i++)
{
    for(var j = 0 ; j <array[i].length ; ++j)
    {
        array[i][j] = array[i][j] - 2*array[i][j]
        console.log("array[%d][%d] = %d",i,j,array[i][j] )
    }
}
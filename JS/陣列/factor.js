a = 30
i = 0
var ar = [0]

factor = 2

while(a > factor)
{
    if(a % factor == 0)
    {
        a = a / factor
        a[i] = factor
        a.length++
        i++
    }
    else
    {factor++}
}

for (j = 0 ; j <= i ; ++j)
{console.log(""+a[j])}


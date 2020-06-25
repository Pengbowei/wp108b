//prompt is not support vscode!
//i = prompt("請輸入底值:");
//j = prompt("請輸入最大值:");

i = 1;
j = 100;
num = j - i + 1;

for(i ; i<=j ; ++i)
{
    if(i == 1)
    {
        --num;
    }

    for(x = 2 ; x<i ; ++x)
    {
        if(i % x == 0)
        {
            --num;
            break;
        }
    }
    
}

console.log(""+num);
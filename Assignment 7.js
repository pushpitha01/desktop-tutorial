//1. max sum contiguous array

let arr=[1,2,3,4,-10]
let maxsum =0
 let sum =Number.MIN_VALUE
for(let i=0;i<arr.length;i++)
{ 
    if(arr[i] < maxsum+ arr[i])
    {
        maxsum +=arr[i]
    }
    else
    { maxsum = arr[i]}
    if(maxsum >sum)
    {sum = maxsum
    }
}

console.log(maxsum)

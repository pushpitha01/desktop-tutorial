//1. find equilibrium index in a given array
console.log('1.')
function equilibrium(arr)
{
    let lower,higher
//lower index sum
    for(let i=0;i<arr.length;i++)
    { lower=0
    for(let j=0;j<i;j++)    
    lower+=arr[i]
// higher index sum  
    higher=0
    for(let j=i+1;j<arr.length;j++)
    higher+=arr[j]
    
    if(lower==higher)
    return i
    }
}
let arr=[-7,1,5,2,-4,3,0]
equilibrium(arr)
console.log(equilibrium(arr))




//2. range sum query
console.log("2.")

let arrq=[1,2,3,4,5]
 let arr1=[[0,3],[1,2]]
let cumarr=[]
let sum=0
for(let i=0;i<arrq.length;i++)
{
    sum+=arr[i]
    cumarr.push(sum)
}
let arr2=[]
for(let j=0;j<arr1.length;j++)
{
    let l=arr1[j][0]
    let r=arr1[j][1]
    if(l!=0)
    {
     arr2.push(cumarr[r]-cumarr[l-1])
    }
    else
    arr2.push(cumarr[r])
}
console.log(arr2)

//time to equality
console.log("3.")
let ar=[2,4,1,3,2]
max=ar[0]
for(let i=1;i<ar.length;i++)
{
    if(max<ar[i])
    {
        max=arr[i]
    }
}
let time=0
for( let i=0;i<ar.length;i++)
{
    time+=max-ar[i]
}
console.log(time)

//4.product array puzzle
console.log('4')

let array=[5,1,10,1]
let array1=[]
for(let i=0;i<array.length;i++)
{
    product=1
    if(i<array.length-1)
    {
        for(let j=i+1;j<array.length;j++)
        {
            product*=arr[j]
        }
    }
    if(i>0)
    {
        for(j=i-1;j>=0;j--)
        {
            product*=array[j]
        }
    }
    array1.push(product)
}
console.log(array1)
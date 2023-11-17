//special subsequences AG
console.log("1.")

let A="ABCGAG"
let count=0
for(let i=0;i<A.length-1;i++)
{
   if(A[i]=='A')
   {
       for(let j=i+1;j<A.length;j++)
       {
           if(A[j]=='G')
           {
               count++
           }
       }
   }
}
console.log(count)

//special index
console.log("2.")

let arr=[1,1,1]
let sumeven=0,sumodd=0,count1=0
for(let i=0;i<arr.length;i++)
{
    if(i%2==0)
    {
        sumeven+=arr[i]
    }
    else
    {
        sumodd+=arr[i]
    }
}
let newsumeven=0,newsumodd=0;
for(let i=0;i<arr.length;i++)
{
    if(i%2==0)
    {
        newsumeven=0
        newsumeven+=sumeven-arr[i]
        if(newsumeven==sumodd)
        {
            count1++
        }
    }
    else
    {
        newsumodd=0
        newsumodd+=sumodd-arr[i]
        if(newsumodd==sumeven)
        {
            count1++
        }
    }
}

//pick from both sides
console.log("3.")

let a=[5,-2,3,1,2],b=3
 let max_sum=Number.MIN_VALUE
 for(let i=b-1,l=0;i>=0||l<=b;i--,l++)
 {
    sum=0
    for(let j=0;j<=i;j++)
    {
        sum+=a[j]
    }
    for(let k=a.length-l;(k<=a.length-1)&&(i!=b-1);k++)
    {
        sum+=a[k]
    }
    if(max_sum<sum)
    {
        max_sum=sum
    }
 }
 console.log(max_sum)

 //closest min max
console.log("4.")
 let Ar=[2,6,1,6,9]
 let l=A[0]
 let s=A[0]
 let br=[]
 for(let i=1;i<Ar.length;i++)
 {
    if(l<Ar[i])
    {
        l=Ar[i]
    }
    if(s>Ar[i])
    {
        s=Ar[i]
    }
 }
 for(let i=0;i<Ar.length;i++)
 {
    if(Ar[i]==l)
    {
        for(let j=i+1;j<Ar.length;j++)
        {
            if(Ar[j]==s)
            {
                br.push((j-i)+1)
            }
        }
    }
 if(Ar[i]==s)
    {
        for(let j=i+1;j<Ar.length;j++)
        {
            if(Array[j]==l)
            {
                br.push((j-i)+1)
            }
        }
    }
 }
smallindex=br[0]
for(let i=0;i<br.length;i++)
{
    if(br[i<smallindex])
    {
        smallindex=br[i]
    }
}
console.log(smallindex)

//bulbs
console.log('5.')

let A1=[0,1,0,1]
let countt=0
for(let i=0;i<A1.length;i++)
{
   if(A1[i]==0)
   {
       for(let j=i;j<A1.length;j++)
       {
           if(A1[j]==0)
           {
               A1[j]=1
           }
           else
           {
               A1[j]=0

           }
       }
       countt++
   }
}
console.log(countt)
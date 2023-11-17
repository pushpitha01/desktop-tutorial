//amazing subarrays
console.log("1.")

let count=0
let a="ABEC"
for(let i=0;i<a.length;i++)
{
 if(a[i]=="A"||a[i]=="E"||a[i]=="I"||a[i]=="O"||a[i]=="U"||a[i]=="a"||a[i]=="e"||a[i]=="i"||a[i]=="o"||a[i]=="u")
 {
  count+=a.length-i
 }  
}
 console.log(count)

//even subarrays
console.log("2.")


let A=[2,4,8,6]
let output=1
if(A.length%2==0)
{
    for(let i=0;i<A.length;i=i+2)
        {
            for(let j=i;j<=i+1;j++)
            {
                if(a[j]%2!=0)
                {
                    output=0
                }

            }
        }
}
else
{
    output=0
}

if(output==1)
{
    console.log("yes")
}
else
{
console.log("no")
}

//leaders in an array
console.log("3.")

let a1=[16,17,4,3,5,2]
max=a1[a1.length-1]
console.log(max)
for(let i=a1.length-2;i>=0;i--)
{
   if(a1[i]>max)
   {
       max=a1[i]
       console.log(max)
   }
}
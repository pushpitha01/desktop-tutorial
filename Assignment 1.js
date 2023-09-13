// 1. generate * pattern to construct a pyramid
// count represents number of stars per row
let count=1
console.log("1.")
//outer loop for handling number of rows
for(let i=0;i<5;i++)
{ 
    let pattern=" "
    let spaces="  "
    let sp=spaces.repeat(4-i)
    // inner loop for handling columns
    for(let j=0;j<count;j++)
    {
        pattern += "* "
    }
    console.log(sp+pattern)
    count +=2
}

// 2. generate upside down pattern of pyramid
let stars=9
console.log("2.")
for(let i=0;i<5;i++)
{
// pattern and spaces intialisation are same as problem 1
let pattern=" "
let spaces="  "
let noofspaces= spaces.repeat(i)
for(let j=0;j<stars;j++)
{ 
    pattern +="* "
}
console.log(noofspaces+pattern)
stars -= 2
}

// 3.generate diamond shape 
// 1st generate upside pyramid and later downside same as 1 and 2
// change downside pyramid no of stars=7 and no of rows i=1
console.log("3.combine 1 and 2")

//4. find sum of N numbers eg:1,2,3,4......N
console.log("4.")
let sum=0
let n=100
for(let i=0;i<n;i++)
{
    sum=sum+i
}
console.log(sum)

//5.how to iterate an array with example
console.log("5.")
let array=[1,2,3,4,5]
//there are many ways to iterate an array like using for loop, while loop,etc
//using for loop where i=index
for(let i=0;i<array.length;i++)
{console.log(array[i])}
//using while loop
let i=0
while(i<array.length)
{console.log(array[i])
i++
}
 
//6. how to iterate over an object with example
//objects can be iterated by entries,keys,values etc
console.log("6.")
let employee1={name:"pushpitha",id:'256',designation:"manager",salary:'25000'}
console.log(employee1["name"])
console.log(employee1.designation)
console.log(employee1.salary)

// implement string reversal
console.log("8.")
let arr =['c','u','t','e']
let s=0
let e=arr.length-1
for(let i=e;i>=3;i--)
{
    while(s<e)
    {let temp =arr[s]
 arr[s]=arr[e]
 arr[e]=temp
s++
e--
} 
console.log(arr)
}

// implement array reversal
console.log("9.")
let array1=[1,2,3,4,5]
let new_array1=[]
for(i=array1.length-1;i>=0;i--)
{
new_array1 += array1[i]
}
console.log(new_array1)

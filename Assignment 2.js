// 1.declare different types of variable and print each type of variable
//varaibles are declared in 4 ways: automatically,using var,let const
//automatically
x=5
y=6
z=x+y
console.log('automatically '+z)
//using var
var a=1
console.log(a)
//using let
let b=10
console.log(b)
//using const
const c=15
console.log(c)

//2.perform sum,sub,multi,div of 2 integers 
console.log('2.')
let p=10
let u=5
console.log('sum=',p+u)
console.log('sub=',p-u)
console.log('multi=',p*u)
console.log('div=',p/u)

//3.calculator using functions
console.log('3.')
function calculator(num1,num2)
{
    console.log('sum=', num1+num2)
    console.log('sub=',num1-num2)
     console.log('multi=',num1*num2)
     console.log('div=',num1/num2)
    
}
calculator(100,50)

//4. declare array and print values using for,while loop using functions
console.log('4.')
function array(arr)
{   arr=[10,20,30,40,50]
    //using for loop
    for(let i=0;i<arr.length;i++)
    {console.log(arr[i])}
} array()
 // using while loop
function printarray(arr1)
{ let i=0
    arr1=[1,2,3,4,5,6]
 while(i<arr1.length)
{console.log(arr1[i])
i++}
} printarray()

//5.declare array and sum all values using for,while loop
console.log('5.')
function sum(array)
{ let sum=0
array=[2,4,5]
//using for loop
for(i=0;i<array.length;i++)
{ sum=sum+array[i]}
console.log(sum)
} sum()
//using while loop
function func1(array1)
{ let i=0
    let sum=0
    array1=[1,2,3]
    //using while loop
    while(i<array1.length)
    {
        sum=sum+array1[i]
        i++
    }
    console.log(sum)
}func1()
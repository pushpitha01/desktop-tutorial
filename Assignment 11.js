//Q1. Check Palindrome

let A='nadan'
function Palindrome()
 {
 let len = A.length;
 for (let i = 0; i < len / 2; i++) 
 {
        if (A[i] !== A[len - 1 - i]) 
        {
            return 0
        }
    }
    return 1
}
let value= Palindrome(A)
console.log(value)

//Q2. Find Fibonacci - II
function fibonacci(n) { 
    if (n <= 1) { 
        return n 
    } 
    return fibonacci(n - 1) + fibonacci(n - 2) 
} 
n = 9 
  
for (let i = 0; i < n; i++) { 
    console.log(fibonacci(n)); 
}

//Q3. Find Factorial!
function factorial(num) { 
    if (num == 0) 
    return 1 
    else
    return num * factorial(num - 1)
  } 
  let num = 4
  console.log(factorial(num))
 
  //Q4. Print reverse string

 let s="cool"
let reverse=[]
for(let i=s.length-1;i>=0;i--)
{
    reverse.push(s[i])
}
console.log(reverse)

//Q5.Sum of Digits
function sum_of_digit(a) 
{ 
    if (a == 0) 
    return 0; 
    return (a % 10 + sum_of_digit(parseInt(a/ 10))) 
} 
let a1 = 46 
let result = sum_of_digit(a1); 
console.log( "Sum of digits in "+ a1+" is "+result ) 
 
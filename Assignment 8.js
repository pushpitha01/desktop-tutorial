//1. Determine if a string/number is a palindrome?
let A='madam'
function Palindrome()
 {
 let len = A.length;
 for (let i = 0; i < len / 2; i++) 
 {
        if (A[i] !== A[len - 1 - i]) 
        {
            return 'It is not a palindrome'
        }
    }
    return 'It is a palindrome'
}
let value= Palindrome(A)
console.log(value)

//2. Find the number of occurrences of a character in a String?
let string="pushpitha"
let char='p'
let count=0
function countstr(count)
{ 
    for (let i = 0; i < string.length; i++)
    {
        if (string[i] == char)
       { count++
    } 
}return count
}
console.log(countstr(count))

//3. How to find out if the given two strings are anagrams or not?
function Anagram(str1,str2)
{
    let n1 = str1.length
    let n2 = str2.length
    if (n1 != n2)
     return false
    str1.sort()
    str2.sort()

    for (let i = 0; i < n1; i++)
    {if (str1[i] != str2[i])
     return false;
   else
        return true;
    }
}  
let str1=['g', 'r', 'a', 'm' ]
let str2=['a', 'r', 'm' ]
     
if (Anagram(str1, str2))
console.log("The two strings are anagram ")
else
console.log("The two strings are not anagram")

//4. How do you calculate the number of vowels and consonants in a String?

let str="opqtech"
let Vowels = 'aAeEiIoOuU';
let vowelsCount = 0
let consonantscount=0
for (let i = 0; i < str.length; i++)
{
if(Vowels.indexOf(str[i])!== -1) 
{
vowelsCount ++
}
else
consonantscount ++
}
console.log("vowels -"+vowelsCount)
console.log("consonants-" + consonantscount)

//5. How do you get the matching elements(repeated array value) in an integer array? Also, find the frequency of the repeated element?

let arr = [4, 2, 4, 5, 2, 3, 1];

function Repeating(arr) 
{ let i, j
   let count=0 
  for (i = 0; i < arr.length-1; i++) 
   {
    for (j = i + 1; j < arr.length; j++) 
    {
     if (arr[i] == arr[j]) 
    { count++
     console.log("array values is repeating-"+count)
    }
    else{
     console.log("array values are not repeating")
    }
   }
}
Repeating(arr)
}

//6. How do you reverse an array?

let array=[1,2,3,4,5]
let reverse=[]
for(let i=array.length-1;i>=0;i--)
{
    reverse.push(array[i])
}
console.log(reverse)

//7. Substring search - Given a string, find the pattern provide by user? if yes, print the index of the substring else print -1

function SubString(strg , n)
{
 for (let i = 0; i < n; i++)
 {
 for (let j = i+1; j <= n; j++)
 {
 console.log(str.substring(i, j)+"<br/>")
}
}
}
let strg = "abcd"
 SubString(str, str.length)

//8.How would you swap two numbers without using a third variable?

let x = 10
let y = 5
x = x + y
y = x - y
x = x - y 
console.log("After Swapping: x =" + x + ", y=" + y)





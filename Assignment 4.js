//1. function solve(int n){
    for(let i = 0; i < n; i++){
        for(int j=0; j < i / 2; j++){
            // O(1) operation
        }
    }
}
time complexity:n*(n/2)
space complexity:o(1)

//2.What is the time complexity of following code:
 
let a = 0, let i = N; 
while (i > 0)
 { 
    a += i; 
    i /= 2; 
}
time complexity:logn(base 2)
space complexity:o(1)

//3.If an algorithm has a time complexity of O(1), then the complexity of it is ?

a) constant
b) polynomial
c) exponential

(a) constant

//4.function solve(n)
{
	let i = n
	while(i>0)
	{
		if(i%2 == 0)
		{
			for(let j = 1; j <= n*n; j+=2)
			{
				statements
			}
		}
		i /=2
	}
}

time complexity:n*(n/2)
space complexity:o(1)

//5.function solve(n)
{

	let i = 1
	while(i < n)
	{
		let x = i
		while(x--)
		{
			o(1)
		}
		i++
	}
}
time complexity:n*n
space complexity:o(1)

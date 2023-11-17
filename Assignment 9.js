//Q1. Add the matrices

let A = [[1, 2, 3],   
         [4, 5, 6],   
         [7, 8, 9]]  

let B = [[9, 8, 7],   
         [6, 5, 4],   
         [3, 2, 1]]
let C=[]
let n=[]
for(let i = 0; i <A.length; i++)  
{ n=[]
for(let j = 0; j <A[0].length; j++) { 
n= A[i][j] + B[i][j] 
} C.push(n)
}
console.log(C)

//Q2. Anti Diagonals

function diagonal(a)
{
let n = a.length;
let N = 2 * n - 1;
       
let result = [];
for (let i = 0; i < N; i++)
{
result.push([])
}
for (let i = 0; i < n; i++)
{for (let j = 0; j < n; j++)
result[i + j].push(A[i][j])
}        
for (let i = 0; i < result.length; i++)
{
for (let j = 0; j < result[i].length; j++)
console.log(result[i][j] + " ")
console.log("</br>");
}
}
let a = [[1,2],
        [3, 4]]
diagonal(a);

//Q3. Column Sum

let ar=[[1,2,3,4],
        [5,6,7,8],
        [9,2,3,4]]
let sum=0
for(let i=0;i<ar[0].length;i++)
{ 
sum=0
for(let j=0;j<ar.length;j++)
{
sum+=ar[j][i]
}
console.log(sum)
}

//Q4. Matrix Multiplication
let N=2
let x = [[1, 1]]
let y = [[2],
         [3]]
let z=[]
let res=[]
for(let i = 0; i<x.length; i++)  
{
for(let j = 0; j<x.length; j++) { 
let res =0
for (k = 0; k <y.length; k++) 
res[i][j] += x[i][k] * y[k][j] 
}  
z.push(res)
}
console.log(z)

//Q5. Matrix Subtraction

let p= [[1, 1]]
let q = [[2, 3]] 
let r= []
let s=[]
for(let i=0;i<p.length;i++)
{ n=[]
for(let j = 0; j <p[0].length; j++) { 
 n= p[i][j] - q[i][j] 
}
 r.push(n)
}
console.log(r)

//Q6. Matrix Transpose

let input = [[1, 2, 3],[4, 5, 6],[7, 8, 9]]

console.log("[ [ " + input[0] 
        + " ] ], [ [ " + input[1] 
        + " ] ], [ [ " + input[2] 
        + " ] ]");
     
function transpose(mat) {
for (let i = 0; i < mat.length; i++) {
for (let j = 0; j < i; j++) {
const tmp = mat[i][j];
mat[i][j] = mat[j][i];
mat[j][i] = tmp;
}
}
}
     
function gfg_Run() {
input = input[0].map((col, i) => array.map(row => row[i]));
     
console.log("[ [ " + input[0] 
            + " ] ], [ [ " + input[1] 
            + " ] ], [ [ " + input[2] 
            + " ] ]");
    } 
     
    gfg_Run();



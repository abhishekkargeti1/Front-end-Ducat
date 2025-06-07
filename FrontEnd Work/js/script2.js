// function 

// Two type of function 

// 1. built in function
// 2. user define function


// built in function Example

// let num = 10
// console.log(typeof(num));


// user define function Example

// function sum(){
//     console.log("Hello i am User Define Function");
//     console.log("Hello I am sum Function");
//     console.log("Hello I am sum Function");
// }
// sum();

// Function statememt

// let num1 = +prompt("Enter number")
// let num2 = +prompt("Enter number")


// test(num1,num2)

// function test(number, number2){
    
//     console.log(number+number2);
    
// }

// function expression

// let sum =function(num1,num2){
//         console.log(num1+num2);
        
// }

// sum(10,30)


// function test(num1,num2){
//     return num1+num2
// }

// console.log(test(20,80));
 


// Arrow Function

// Implisit return

// let test = (a,b)=>a+b;
// console.log(test(60,10));



// Explisit return 

// let sum = (a,b)=>{
//     return a+b;
// }
// console.log(sum(45,96));


// callBack Function :- A function passed as a argument and return another function . it is known as call Back function.


// HigherOrder Function :- A function accept another function as a parameter is know as higher order function.





// callBack Function and Higher Order Function example


// arrow Function

// sum=(a,b)=>a+b;

// higher order function is call. 
// call Back function is sum because it is passing as argument .

// function call(sum){
//     return sum
// }
// console.log(call(sum(10,20)));


// Nested Function 


function sum(){
    console.log("Hello I am Outer function");
    
    return function sum1(){
        console.log("Hello i am inner function");
        
    }
}


console.log(sum()())


// check number is prime or not using function 
// check number is  palindrome or not .



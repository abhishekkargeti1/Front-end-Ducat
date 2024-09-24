// console.log("hello world");

// var a=parseInt(prompt("Enter a number"));
// var b=parseInt(prompt("Enter a number"));
// var result= a+b;
// console.log(result); 


// var a=+prompt("Enter a number");
// var b=+prompt("Enter a number");
// var result= a+b;
// console.log(result); 


// length=parseInt(prompt("Enter a length"))
// Width=parseInt(prompt("Enter a width"))
// result= length*Width;
// console.log(result)

// dollar= (prompt("Enter your salary in dollar"))
// Rupee=dollar*83.43;
// console.log(Rupee);



// datatype

// num1=56;
// console.log(typeof(num1));

// name ="abhishek"
// console.log(typeof(name))

// ans=true+true
// console.log(ans)

// ans=true+false
// console.log(ans)

// ans=5*'abhishek'
// console.log(ans)


// ans=5+'3'+5
// console.log(ans)



// operator

// Arithematic operator

// + - * / %

// a=10
// b=20
// result=a+b
// console.log(result)

// a=10
// b=20
// result=a-b
// console.log(result)

// a=10
// b=20
// result=a*b
// console.log(result)

// a=10
// b=20
// result=a/b
// console.log(result)

// a=10
// b=20
// result=a%b
// console.log(result)


// a=11
// b=2
// console.log(Math.floor(a/b))
// console.log(Math.ceil(a/b))


// Relationship operator

// > < >= <= == ===

// console.log(9>9)
// console.log(9>=9)
// console.log(9<=9)
// console.log(9<9)

// num=12;
// num1="12"
// console.log(num==num1)

// num=12;
// num1="12"
// console.log(num===num1)


// let var const


// var is a global variable. It can be acess from any where.

// let is a local variable.

// cosnt is a local variable . it should be declare and define at the same time.



// Example

// let a= 30;
// {
// console.log(a);
// let b =90;

// }
// console.log(b);


// let a =10;
// var b =20;
// const c = 30;
// {
//     let a =100;
//     var b=200;
//     const c = 300;
//     console.log(a);
//     console.log(b);
//     console.log(c);
    
// }
// console.log(a);
// console.log(b);
// console.log(c);


//loop 

// let i =1;
// while(i<=10){
//     console.log(i);
//     i++;
// }

// let i =1;
// let sum=0;
// while(i<=10){

//     sum +=i;
//     i++;
// }
// console.log(sum)


// let i =1;
// while(i<=10){
//     if(i%2==0){
//         console.log("Even number "+i);
//     }else{
//         console.log("Odd number "+i);

//     }
//     i++;
// }

// let i =1;
// let evenSum =0;
// let OddSum =0;
// while(i<=10){
//     if(i%2==0){
//         evenSum +=i;
        
//     }else{
//         OddSum +=i;
//     }
//     i++;
// }
// console.log(evenSum);
// console.log(OddSum);

// let num =8;
// let i =2;
// let count=0;
// while(i<7){
//     if(num%i==0){
//         count++
        
//     }
   
//     i++
// }
// if(count ==0){
//     console.log("Number is prime "+num);
// }else{
//     console.log("Number is not prime "+num);
// }



// types of function 


// 1. function statement

// function fun(num1,num2){
//     console.log(num1+num2);
// }
// fun(20,30)


// 2. function expression


// const sum = function(num1,num2){
//     console.log(num1+num2);
// }
// sum(20,30)

// function hosting not work here.


// arrow function

// const sum=(a,b)=>console.log(a+b);
// sum(20,30)


// implicit

// function sum(num1,num2){
//     return num1+num2
// }
// console.log(sum(10,10))


// explicit return in arrow function

// const sum=(num1,num2)=>{
//     return num1+num2
// }
// console.log(sum(10,10));




// const sum = (a,b)=>a+b // call back function


// high order function

// function cal(fun){ 
//     return fun
// }

// console.log(cal(sum(10,20)));



// immediate invoke function expression(iife)

// (function(a,b){
//     console.log(a+b)
// })(10,10)


// function outer(){
//     console.log("hi i am outer function")
//     function inner(){
//         console.log("hi i am inner function")
//     }
//     return inner;
// }

// outer()()


//Lexical scope is also called closer.



// function outer(){
//     let a =20;
//     function inner(){
//         console.log(a);
//     }
//     return inner;
// }
// outer()();


// let result=outer();
// result()



// function a(a){
//     return function b(b){
//         return function c(c){
//             return a+b+c
//         }
//     }
// }
// console.log(a(10)(20)(30));




// Array

// let arr=[12,23,45,43,54,65,"abhishek","simran",56,"divesh",67,true]

// console.log(arr[1]);

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]);
// }

// for(let i=0;i<=arr.length;i++){
//     if(typeof(arr[i])==="number"){
//         console.log(arr[i]);
//     }
// }

let arr1=[12,12,16,17,23,43,3,6]
let min= arr1[0]
for(let i=0;i<=arr1.length-1;i++){
    if(min>arr1[i]){
        min =arr1[i]

    }
}
console.log("Min number is " + min)

let arr=[12,12,16,17,23,43,3,6]
let max= arr[0]
for(let i=0;i<=arr.length-1;i++){
    if(max<arr[i]){
        max =arr[i]

    }
}
console.log("Max number is " + max)

let arr2 = [12,12,16,17,23,43,3,6]

for(i=0;i<=arr2.length;i++){
let count=0;
let  num=i;
for(let i=2;i<num;i++){
    if(num%i==0){
        count ++;
    }
}
if(count==0){
    console.log("Prime number" +num);
}else{
    console.log("Not Prime number" +num);

}
}


arr =[12,12,4,56,6,7,8,8,8,3]
// arr.push(0)
// arr.pop()
arr.unshift("hi")
arr.shift()
console.log(arr);

// let arr4=[]
// for(let i =0;i<=5;i++){
//    let element = +prompt("Enter element")
//     arr4.push(element)
// }
// console.log(arr4)

// object 

// defination of object In JavaScript, an object is a collection of key-value pairs, where each key (also called a property name) is a string and each value can be any data type (including other objects)

// const human ={
//     name:"abhishek",
//     age:21,
//     height:6.1

// }
// console.log(human.name)
// console.log(human.age)
// console.log(human.height)


// for(let i in human){
//     console.log(i ,"",human[i]);
// }


// const animal ={
//     dog:{
//         breed : "desi" ,
//         name :{
//             nickname:{
//                 genralName:"sheru"
//             }
//         }        
//     },
//     cat:{
//         breed: "parishan",
//         name:"kity"
//     },
// }
// console.log(animal.dog.name.nickname.genralName)

// let arr5=[]
// const human1 ={
//     name:"abhishek",
//     age:"34",
//     Height:"6.1"

// }

// for(let i in human1){
//         let element =i;
//         let value =human1[i];
//         arr5.push(element,value)
// }
// console.log(arr5);

// const keyArray=Object.keys(human1)
// const ValueArray=Object.values(human1)
// const KeyValueArray=Object.entries(human1)
// console.log(keyArray)
// console.log(ValueArray)
// console.log(KeyValueArray)


window:{
    document:{
        html:{
            head:{}
            body:{}
        }
    }
}

// const div = document.getElementById("div1");
// div.style.height="200px";
// div.style.width="200px";
// div.style.backgroundColor="red";

// div.addEventListener("click",()=>{
//     if(div.style.backgroundColor=="red"){
//         div.style.backgroundColor="green"
//     }else{
//         div.style.backgroundColor="red"
//     }
// })


// getElementById = directly select the id
// const h1 = document.getElementById("h1");
// h1.style.backgroundColor="red"

// getElementsByClassName = gives an array 
// const h11= document.getElementsByClassName("h1");
// h11[0].style.backgroundColor="green"
// h11[1].style.backgroundColor="blue"
// h11[2].style.backgroundColor="yellow"


// document.querySelector

// const h12 = document.querySelector(".h1")
// h12.style.backgroundColor="black"

//documnet.querySelectorAll

// const h13 = document.querySelectorAll(".h1")
// h13.forEach(h13 =>{
// h13.style.backgroundColor="blue"
// })


// const body = document.querySelector("body")
// const div =document.createElement("div")
// div.style.height="200px"
// div.style.width="200px"
// div.style.backgroundColor="red"
// div.style.backgroundImage="url(../image/download.jpeg)"
// body.appendChild(div)
// console.log(body);



// const body = document.querySelector("body")
// console.log(body);
// const btn = document.createElement("button")
// btn.innerText="Click Here"
// btn.style.backgroundColor="green"
// btn.style.height="20px"
// const h1 = document.createElement("h1")
// h1.innerHTML="Abhishek"
// body.appendChild(h1);
// body.appendChild(btn);






const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  const userInput = document.getElementById("userInput").value.trim();
  if (userInput) {
    const list = document.getElementById("list");
    const li = document.createElement("li");
    const btn1 = document.createElement("button");
    const btn2 = document.createElement("button");
    
    // Set button text
    btn1.innerText = "Delete";
    btn2.innerText = "Edit";
    
    // Delete button functionality
    btn1.onclick = () => {
      li.remove();
    };
    
    // Edit button functionality
    btn2.onclick = () => {
      const newText = prompt("Edit your input:", li.firstChild.textContent);
      if (newText !== null && newText.trim() !== "") {
        li.firstChild.textContent = newText.trim();
      }
    };
    
    // Set the list item text and append buttons
    li.textContent = userInput;
    li.appendChild(btn1);
    li.appendChild(btn2);
    
    // Append the list item to the list
    list.appendChild(li);
    
    // Clear the input field
    document.getElementById("userInput").value = "";
  }
  console.log(userInput);
});


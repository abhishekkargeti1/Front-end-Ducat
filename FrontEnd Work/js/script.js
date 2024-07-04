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

let num =8;
let i =2;
let count=0;
while(i<7){
    if(num%i==0){
        count++
        
    }
   
    i++
}
if(count ==0){
    console.log("Number is prime "+num);
}else{
    console.log("Number is not prime "+num);
}

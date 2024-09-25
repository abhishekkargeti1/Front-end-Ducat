// Array 
// Difference between Map And For each


// Map return new Array .
// for each return undefined.


// let arr = [2,3,4,5,6];
// let ans = arr.forEach((value,index)=>{
//     return value*value ;

// })
// console.log("it  returns undefine ",ans);

// let ans = arr.map((value,index,arr)=>{
//     return value*value;
// })
// console.log("It returns New Array",ans);



// let arr =[20,10,9,45,34,78,9,0]

// let ans = arr.map((value,index,arr)=>{
//     if(value>15){
//         return value;
//     }
// })

// console.log(ans);

// filter

// let arr =[12,34,5,665,23,124.9]

// let result = arr.filter((value,index,arr)=>{
//     if(value>50){
//         return value;
//     }
// })
// console.log(result);


// let arr = [112,13,43,54,0,6,4,45]

// var sum =0

// for(let i=0;i<arr.length;i++){
//     sum+=arr[i]
// }
// console.log(sum);


// reduce 

// let arr = [112,13,43,54,0,6,4,45]

// let ans = arr.reduce((sum,i)=>{
//     return sum+i
// },0)

// console.log(ans);



// sort 

let arr = [112,13,43,54,0,6,4,45]

let ans = arr.sort((a,b)=>{
    return a-b;
})

console.log(ans);

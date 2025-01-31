// Primitive
//7 Types - String -number -boolean -none -undefined -BigInt -Symbol


const  score =2100
const scoreValue =2100.78
const isLoggedIn =false
const outsidetemp=null
let userrEmail;

const id =Symbol('123')
const Anotherid =Symbol('123')
console.log(id==Anotherid);


//JavaScript is DynamicallyTyped programming language 

//Reference DataType/non-primitive 

//3-arrays,objects,functions
 const heros=["SuperMan","SpiderMan","IronMan"]

let myOnj={
    name:"Sharath",
    Age:23,

 }
 const muFunction = function(){
    console.log("Hello");
    

 }
 //***********************

 //Stack(Primitive),Heap (Non-Primitive)

 let myName="Sharath"
 let AnotherName=myName
 AnotherName="ShankarNAg"
 console.log(myName);
 console.log(AnotherName);

 let user1={
   email:"user@gmail.com",
   upi:"user@ybl",

 }
 
 let user2=  user1

 user2.email="sharath@gmail.com"

 console.log(user1.email);
 console.log(user2.email);
 
 

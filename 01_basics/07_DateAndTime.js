let myDate = new Date()
// console.log(myDate.toString());
// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toTimeString());
// console.log(myDate.toISOString());

console.log(typeof myDate);


let myCreatedDate= new Date("2022-01-14")
// console.log(myCreatedDate.toDateString());
// console.log(myCreatedDate.toLocaleString());


let myTimeStamp = Date.now()
// console.log(myTimeStamp);

// console.log(myCreatedDate.getTime());

// // console.log(Math.floor(Date.now()/1000));


let newDate = new Date()
console.log(newDate.getDate());
console.log(newDate.getDay());
console.log(newDate.getMonth()+1);


newDate.toLocaleString('default',{
    weekday :"long",
    timeZone :""
})


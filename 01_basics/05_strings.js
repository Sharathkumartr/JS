const name="sharath"
const repoCount = 50

//console.log(name + repoCount + "");
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName= new String ("Sharath-Kumar")

console.log(gameName.length);
console.log(gameName.__proto__);



console.log(gameName[4]);
console.log(gameName.toUpperCase());
console.log(gameName.toLowerCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('S'));


const newString =gameName.substring(0,4)

console.log(newString);

const anotherString = gameName.slice(-8,4)
console.log(anotherString);


const newStringOne ="  Sharath  "
console.log(newStringOne.trim());

const url="https://sharath.com/sharath%20kumar"
url.replace('%20','-')

console.log(url.replace('%20','-'));

console.log(gameName.split('-'));


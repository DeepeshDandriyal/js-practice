const score=400

const balance=new Number(100)

// console.log(typeof balance)

// console.log(typeof balance.toString())
// console.log(typeof balance)
// console.log(balance.toFixed(2))

//toPrecision() returns string
const otherNum=23.8945
// console.log(otherNum.toPrecision(3)) //23.9 ayega kyunki 3 digit ka precision ayega
const otherNum2=123.8945
// console.log(otherNum2.toPrecision(3)) //124 ayega kyuni 3 digit 124 me ho jayegi agar 4 deta toPrecision me to 123.9 aata

//toLocalString (comma seprated ke lie)
const bigNum=132000
// console.log(bigNum.toLocaleString('en-IN')) //1,32,000 => 1 lakh 32 hazar 

//+++++++++++++++++++ Maths ++++++++++++

// Math is library(object) in javascript

//abs=>absolute value (- ko + krna)
console.log(Math.abs(-4))

//round(round-off ke lie)
console.log(Math.round(4.6))

//floor and ceil
//floor=>niche ceil=>upr
console.log(Math.floor(4.9)) //4 ayega

//sqrt (as expected)

//Math.min(4,5,6)
//Math.max(35,6,3)
//Math.random()
console.log(Math.floor(Math.random()*10))

const min=10
const max=20

console.log(Math.floor(Math.random() * (max-min+1)+min)) //max-min is range 20-10 =>10 numbers aa skte hain +10(min) se upr vale 10 number




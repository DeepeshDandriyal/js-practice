// //date milliseconds me calculate from janauary 1,1970 se
// //Dates

// let myDate=new Date()
// //date is object in js
// console.log(myDate)
// console.log(myDate.toString())
// console.log(myDate.toDateString())

// console.log(myDate.toLocaleDateString())

// let mycreatedDate=new Date(2023,0,23) //month 0 se start hote hain in js 23 of jan 2023
// console.log(mycreatedDate.toDateString());
// let date1=new Date("2023-02-14")
// console.log(date1.toDateString())

// //timestamp
// // let myTimeStamp=Date.now()
// // console.log(myTimeStamp)
// console.log(Math.floor(Date.now()/1000))

let newDate=new Date()
// console.log(newDate.getHours()) //getDay,getMonth,getDate,getMinutes

newDate.toLocaleString('default',{
    weekday:'long',
})






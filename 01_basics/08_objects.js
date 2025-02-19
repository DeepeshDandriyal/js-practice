//object literals
//key value pair me hota hai
//by default key is string "name" ese lega machine ise


//symbol as key of object
const sym=Symbol("key1")

const jsUser={
    name:'Deepesh',
    "full name":'deepesh dandriyal',
    age:18,
    location:'dehradun',
    email:'deepesh@gmail.com',
    isLoggedIn:false,
    lastLoginDays:["monday","saturday"],
    //symbol as key
    [sym]:"mykey1"
}

//how to access objects
console.log(jsUser['full name']) //this is usefull when key have space such as "full name"
//method 2 to access objects
console.log(jsUser.name)

//method to use symbol key
console.log(jsUser[sym])

//how to freeze object so that you can't change value
// Object.freeze(jsUser)
// jsUser.name='mohit'
console.log(jsUser.name) //deepesh hi because freezze krdia

jsUser.greetings=function(){
    console.log('this is how you add function to your object')
}

//same object ke properties ko use same object ke function me use (this)
jsUser.greetingsTwo=function(){
    console.log(`hello , ${this.name}`)
}
console.log(jsUser.greetings())
console.log(jsUser.greetingsTwo())

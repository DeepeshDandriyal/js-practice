const user={
    username:'deepesh',
    price:999,

    //this refers current context(kiski baat ho rhi hai,current me ky value hai)
    welcomeMessage : function(){
        console.log(`${this.username }, welcome to website`)
        console.log(this) //current object print hoga isme (as below) 
        // {
        //     username:'deepesh',
        //     price:999,
        //     welcomeMessage:[Function:welcomeMessage]
        // }
    }

   
}

// user.welcomeMessage()
// user.username='sam'
// user.welcomeMessage()

// console.log(this) //{} empty object, because global me koi context nhi hai in node
//but if you do this in browser you see window instead of {}
//window is global object in browser,not present in node 


// function chai(){
//     let username='deepesh'
//     // console.log(this) //kux milega empty nhi inside function, but this is not object this is function keep this in mind
// // console.log(this.username) //undefined because this is not object this is function, the object we get using this inside function doesn't have any property called username or this function doesn't have any parent object as above

// }
// chai()



// const chai=function(){
//     let username='deepesh'
//     console.log(this.username) //again undefined
// }


//Arrow functions

// const chai=()=>{
//     let username='deepesh'
//     // console.log(this.username) //undefined
//     // console.log(this) //{} empty object (in arrow function this will return empty object)
// }

// chai()


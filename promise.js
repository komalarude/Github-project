//resolve() and reject()change the state of the promised
//if u call resolve() method pending state it converted into  fullfill. when status is not connected it is rejected
// creating promise means making a promised.
const p = new Promise(function(resolve,reject)
{ 

    let connected =true


    if (connected==true)
    { 
   resolve()
    }
    else
    { 
        reject()
    }
})

p.then(function()
{ 
    console.log("write the code to read the movies info")

})
.catch(function(error)
{ 
    console.log("error")
})






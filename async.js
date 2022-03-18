//async keyword-->allows to write a promise program simpler
async function  validate()
{ 
    let connection = true

}
let mystate = validate()
console.log(mystate)
validate().then(function()
{ 
    console.log("write the code to read the movies info")
})
.catch(function(error)
{ 
    console.log(error)
})
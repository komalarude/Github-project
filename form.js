// const myform=document.getElementById("myform")
const myform=document.querySelector("#myform")
myform.addEventListener('submit',function(event)
{ 
    event.preventDefault()//page will (never) reloaded again 
    const enteredUsername = document.forms.data.myusername.value
    if(enteredUsername.length < 4)
    { 
        alert("please enter a username with a minimum of 4 chracters")
    }
    const enteredAge =parseInt(document.forms.data.myage.value)//"20"
    if(enteredAge > 100)
        
    { 
        alert("pelese enter a valid age which is less than 100")
    }
})






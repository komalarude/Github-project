


const btn=document.getElementById("mybtn")
const myInput=document.getElementById("myinput")
const myUl=document.getElementById("myUL")
btn.addEventListener('click',function()
{ 
    let mytask = myInput.value//mytask="dancing"
    const myli=document.createElement("li")//<li></li>
    const mybutton =document.createElement("button")
    mybutton.innerhtml = "delete"
    myLi.innerhtml = mytask
    myUl.append(myLi)
    myInput.value =""
        

        
    })

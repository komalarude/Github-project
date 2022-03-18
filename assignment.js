let input1= document.getElementById("inp1")
let input2 = document.getElementById("inp2")
const button = document.getElementById("btn")
input1.value = "5"
let div = document.getElementById("div1")
button.addEventListener('click',function()
{ 
    let before  =(Math.random()*10)
    let after = (math.floor(before))
    input2.value= after
     if(input1.value == input2.value) 
     {
         div.style.marginLeft = "200px"
         div.style.border = "1px solid black"
         div.style.width = "55px"
         div.innerHTML ="sucess"
     }
})
const weight= document.getElementById("wt")
const height =document.getElementById("ht")
const btn =document.getElementById("button")
const wei =document.getElementById("dwt")
const hei=document.getElementById("dht")
const result =document.getElementById("myresult")
btn.addEventListener('click',function()
{ 
    const mytask = weight.value
    const mytask =height.value
    const myli1 =document.createElement("li")
    const myli2=document.createElement("li")
    myli1.innerhtml =mytask1
    myli2.innerhtml =mytask2
    weight.value =""
    height.value =""
    wei.value =mytask1
    hei.value =mytask2
    let BMI = mytask1/((mytask2)*(mytask2)/10000)//let result =BMI
    result.value= BMI

})

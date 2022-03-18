class employee
{ 
    constructor(name)//local variable
    { 
        //create instance variable name ="raju"
        this.name =name
    }
    //instance variables should be aceess inside instance method
    displayname()//instance method
    { 
        console.log(this.name)
    }
}
const emp =new employee("raju")//constrctor
emp.displayname()
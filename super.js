class person
{ 
    constructor(name,age)//name="raju" age=21
    { 
        this.name=name
        this.age=age
    }
    displaydata()
    { 
        console.log(this.name)
        console.log(this.age)
    }
}
//super keyword
class student extends person{ 
    constructor(name,age,city)
    { 
        super(name,age)
        this.city=city
    }displaydata()
    { 
        super.displaydata()
        console.log(this.city)
    }

    

}
 const p=new person("komal",30)
 p.displaydata()


 const s =new student("trupti",30,"pune")
 s.displaydata()

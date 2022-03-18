class bird
{ 
    static wings =2
    constructor(name)
    { 
        this.name =name
    }
    displayname()//instance method
    { 
        console.log(this.name)
    }
    static displaywings()//static method
    { 
        console.log(this.wings)
    }
}
const b =new bird("sparrow")
b.displayname()
bird.displaywings()



//instance method-->ref var
//static method-->class name
//grades--->marks

class student
{ 
    constructor(marks)
    { 
        this.marks =marks
    }
    calculategrade()
    { 
        if(this.marks >90)
        { 
            alert("A grade")
        }
        else if(this.marks >70)
        { 
            alert("B grade")
        }
        else if(this.marks > 35) 
        { 
            alert("c grade")
        }
        else{ 
            console.log("fail")
        }
    }
}
const mymarks = prompt("enter ur marks")
const s = new student(mymarks)
s.calculategrade()
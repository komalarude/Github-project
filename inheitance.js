//inheitance
//reusing code


class person
{ 
    hasname()
    { 
        console.log("i have a name")
    }
}
//childclass extends parentclass
//1 child,1 parent ===>single inheritance
class student extends person
{ 

}
const s=new student();
s.hasname()
//call()and apply()
//function borrowing methods
let data1 ={ 
    firstname:"sachin",
    lastname:"tendulkar",
    displayname: function(city,team,age)
    { 
        //console.log(this)
        console.log(this.firstname,this.lastname,city,team,age)
    }
}
//borrowd
data1.displayname("mumbai","mumbai indians",45)
let data2 = { 
    firstname:"rohit",
    lastname:"sharma",
}


//data1.displayname.call(data2,"mumbai","mumbai indians",34)
     data1.displayname.apply(data2,"mumbai","mumbai indians",34)


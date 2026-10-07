// Validation

/*
Validation means checking whether the data received follows your set of rules: 
eg : Checking if the name field has a value, checking the password length or 
checking that an email is valid. 

Feedback is providing a response after every action taken in an application. eg: successful login or saved a task. 
Feedback lets a user know what is happening, whether they are doing something right or wrong. 

*/

class Learner{
    constructor(name, age){
        this.name = name;
        this.age = age
    }

    showDetails(){
        console.log(this.name, this.age)
    }

    // If statements kept separate to check on property at a time
    validateProperties(){
        if(typeof this.age !==  "number"){
            console.log("Age must be a number")
            return;
        } 

        if(this.name.trim() === ""){
            console.log("Please Enter the student's name ")
            return;
        }

        this.showDetails()
   
    }
}

const learnerOne = new Learner("  ", "8" )

learnerOne.validateProperties()

// Using trim()

// Trim removes spaces from the beginning and the end 


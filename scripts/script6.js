// With keyword
/*
The with keyword is a legacy keyword that allows us to access properties 
without using the object's name repeatedly


eg : 
*/
// const learner = {
//                  name: "Amanda",
//                  email: "amanda@gmail.com",
//                  role: learner

// }

// console.log(learner.name)
// console.log(learner.email)
// console.log(learner.role)

// with statements allow us to access all properties without the use of dot notation
// or repeated use of the object's name, ESM does not accept it. 

class learnerTwo{
        
    static learnerCount = 0  // This property belongs the class itself
    constructor(name, email, role){
        this.name = name;   
        this.email =email ;
        this.role =  role
        learnerTwo.learnerCount++
    }
    
    

   static getLearners(){
        return ` Total learners created : ${learnerTwo.learnerCount}`
    }
    displayName(){
        return this.name
    }
}


let learnerOne = new learnerTwo("Londeka", "Londeka@gmail.com", "learner")
let learner = new learnerTwo("Londe", "Londe@gmail.com", "learner")

// To access display name, I use the object instance : 
// console.log("Instance method: " + learnerOne.displayName())


// // Using a stict method, you must use the class itself

// console.log("Static method: " + learnerTwo.getLearners())
// with takes in the object's name as a parameter to access the objects data and behavior
// with (learnerTwo){
//     consol.log( name, role, email)
// }

// eg : 

// function sumOfTwo(num1, num2){

//     let total = num1+num2

// }

// console.log(total)// this will be error

// sumOfTwo(50,10)


// Using static methods within classes 


class Task{
        static numberOfTasks = 0
        constructor(title){
            this.title = title;
            this.complete = false;
            if(this.complete === true){
            Task.numberOfTasks++

            }
 }

        markComplete(){
            this.complete = true
        }

        static getCompleteTasks (){

            return `You have ${Task.numberOfTasks}`
        }
}

let taskOne = new Task("Complete Geometry assignment")
let taskTwo = new Task("Complete Calculus assignment")
let taskThree = new Task("Complete unit 40 on unity")

taskOne.markComplete()
taskTwo.markComplete()

console.log(Task.getCompleteTasks())

// ENCAPSULATION
// Bundling data and behavior into one class and hiding internal
//method details. 

// In this example, we hide the task completion status so that 
// task completion is not influenced outside of the class.

class Task{
    #isComplete = false
    constructor(title, dueDate){
        this.title = title
        this.dueDate = dueDate
    }

    markComplete(){
        this.#isComplete = true
    }
    isCompleted(){
     return this.#isComplete

     // Abstraction here is us creating a method with logic for 
     // saving a task with its due date and completion status 
    }

     saveTask(){
        return fetch("https://pathToYourTasksCollection",{
            method: POST,
            body: JSON.stringify({title:this.title, completed: this.#isComplete, due:this.dueDate})
        })

     }
     // Polymorphism is when objects respond differently to the same method call

     summary(){
        return `Title:${this.title} status: ${this.#isComplete} due:${this.dueDate}`
     }


}

// let scores = [{name: Londeka , score : 35}, {name: Devania, score: 60}]
// scores[1].score
// Marking a new task object as complete:
let taskOne = new Task("Complete the wireframes", "2026-09-25")
// Seeing the completion status:
console.log(taskOne.isCompleted())
// Abstraction here because you don't see the logic behind saving a Task


class supportTask extends Task {
    constructor(title, dueDate, assessorFeedback){
        super(title, dueDate)
        this.assessorFeedback  = assessorFeedback
    }

    // Here summary will return something else
        summary(){
        return `Title:${this.title} due:${this.dueDate} feedback: ${this.assessorFeedback}`
     }
}

let taskOneFeedback = new supportTask("Complete the wireframes","2026-09-26", "Check th login screen flow, it does not meet requirements")
taskOneFeedback.markComplete()
console.log(taskOne.summary())
console.log(taskOneFeedback.summary())







// create a Car class that showcases the make, model and speed. This class must be extended
// to showcase ecah model's maximum speed. You must demonstrate polymorphism as well as 
// abstraction. 

class Car{
    #numberPlate
    constructor(make, model, speed){
        this.make = make
        this.model = model
        this.speed = speed
    }

    getSpeed(currentSpeed){
        this.speed += currentSpeed
        return `current speed: ${this.speed}`
    }

      getCar(){
        return `make: ${this.make}  model:${this.model} is moving at a speed of ${this.speed}`
    }
}

class fastCars extends Car {
    constructor(make, model, speed){
            super(make, model, speed)
            this.maxSpeed = 0
    }

    getFastCar(){
        this.maxSpeed = 220
        if(this.speed >= this.maxSpeed){
            return `This ${this.model} is a fast car`
        }
    }
}

class slowCars extends fastCars{
    constructor(make, model, speed, maxSpeed){
            super(make, model, speed, maxSpeed)
    }
    getFastCar(){
        this.maxSpeed = 220
        if(this.speed < this.maxSpeed){
            return `This ${this.model} is a small car`
        }
    }

}

const carOne = new Car ("Aston Martin", "DBX 707", 0)
carOne.getSpeed(50)
carOne.getSpeed(200)
console.log(carOne.getCar())  
 
const carSpeed = new fastCars("Aston Martin", "DBX 707", 0,)
carSpeed.getSpeed(50)
carSpeed.getSpeed(50)
carSpeed.getSpeed(50)
console.log(carSpeed.getFastCar())
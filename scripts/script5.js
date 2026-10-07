

// A setter is a special method (treated like a property) that checks a value before 
// it is stored in the object


class LearningTask {
  constructor(id, userId, title, dueDate, priority = "medium") {
    this.id = id;
    this.userId = userId;
    this.title = title;
    this.dueDate = dueDate;
    this.priority = priority;
    this.completed = false;
  }

  set priority(value) {
    const allowedPriorities = ["low", "medium", "high"];

    if (!allowedPriorities.includes(value.toLowerCase())) {
      throw new Error(
        "Priority must be low, medium or high."
      );
    }

    this._priority = value.toLowerCase(); 
  }

  get priority() {
    return this._priority;
  }

  complete() {
    this.completed = true;
  }
}

// getter is a method that controls what happens when we read a 
// property from an object
// You use a getter for a property updated or defined in a setter

const newObject = new LearningTask("","","","","")

console.log(newObject.priority)



// ACTIVITY

/*

1. Add a setter to your Task class that sanitises your task title and converts it to
 lower case letters
        Hint: use toLowerCase() string method. 


2. Create a getter that returns the value of your task title

3. Create a new instance of an object and display the sanitised title 

*/

export class Task {
    constructor(title, description, dueDate, priority, progress, updateFn, deleteFn) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.progress = progress;
    }

    set description(propertyValue){

        this._description = propertyValue.toLowerCase()
    }

    get description(){
        return this._description
    }
}
// Constructors


// A constructor is a a function that defines the properties of an object 
// We use the new keyword to create the instance of an object, 
// running this, the object with all properties and values is created automaticeally 

function circleRadii(radius, name){
    this.radius = radius
    this.name = name
}

const circle1 = new circleRadii(15, "small circle one")
const circle2 = new circleRadii(50, "big circle one ")
// new acts as a return statement.
// console.log(circle1, circle2)

// Activity 1

/*
Given then following constructor, create 2 instances of objects 
and print the values of the objects' properties. 

function student(name, mark){
        this.name = name;
        this.mark = mark;
}

*/
function Student(name, mark){
        this.name = name;
        this.mark = mark;
}

const studentOne = new Student("Karabo", 20)
const studentTwo = new Student("Londeka", 21)

// console.log(`student one name: ${studentOne.name} |
//      student one mark:${studentOne.mark} `)

// console.log(`student one name: ${studentTwo.name} |
//      student one mark:${studentTwo.mark} `)



     // NESTED OBJECTS 

// Objects within an object 
 
class Task {
    constructor(title, dueDate){
        this.title=title;
        this.dueDate = dueDate;
        this.taskDetails = {priority: "medium", reminder:0}
    }
}

const wireframe = new Task("Create Wireframe", "2026-09-20")
const loginForm = new Task("Develop login validation", "2026-09-25")

wireframe["taskDetails"]["priority"] = "high"
wireframe.taskDetails.reminder = 5

// console.log(wireframe)
// console.log(loginForm)

// Parent Child Relationships 

// This is inheritance 

class User{
    constructor(displayName, email){
        this.displayName = displayName;
        this.email = email
    }
}

// Each and every class that extends user, inherits its properties and methods
class Learner extends User {

    constructor(displayName, email){
        super(displayName, email)
        this.role = "learner"
        this.tasks = []
    }

}

const learnerOne = new Learner("Lerato", "lerato@gmail.com")

class Assessor extends User{
    constructor(displayName, email){
        super(displayName, email)
        this.role = "assessor"
        this.tasks = [{
            learnerId:"",
            learnerTasks: []
        }]
        this.bookingRights = true
    }
}

const assessorOne = new Learner("Lera", "lera@gmail.com")
console.log(assessorOne)


// Activity 
/*
 Add the following tasks to learner one : 
 1. Create login form structure in HTML 
 2. Submit wireframe 
 3. Complete pseudocode for login form
  learnerOne{
  displayName: 'Lerato',
  email: 'lerato@gmail.com',
  role: 'learner',
  tasks: []
}
  */

learnerOne.tasks.push("Create login form structure in HTML",
     "Submit wireframe", "Complete pseudocode for login form")
console.log(learnerOne)



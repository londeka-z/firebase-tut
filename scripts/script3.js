/*JavaScript Objects  can be created  using object literals or Object.create()
Object.create() builds an obkecy with an explicit prototype. 
Properties and methods can be accessed using dot notation when the 
key is known, and a valid identifier. 
We use bracket notation when the key is dynamic, contains spaces pr 
stored in a variable
*/


// creating a task object with methods 

const task = {
    title : "Book support session",
    category: "technical",
    dueDate: "2026-09-20",
    completed: false,
    
    // We can add methods in objects 
    isComplete(){
        this.completed = true
    }
}



console.log(task.title) // using dot notation outside the object
// let field1 = "category";
// let field2 = "title"


console.log(task[field])

// Using bract notation Create/ add a property when you don't have a valid 
// JS identifier eg: space in between, undeclraed variable, starts with 
// a number

task["preferred time"] = "10:00"



task.isComplete()
console.log(task)

// Creating an object using a template/ prototyp 
let newTaskObject = Object.create(task)

console.log(newTaskObject.title)
console.log(newTaskObject.category)

newTaskObject["learnerId"] = "lk@gmail.com"

console.log(newTaskObject)


// Using bracket notation for dynamic property selection
    const tasksOne = [
      { title: "Book support session", category: "technical", dueDate: "2026-09-15", priority: "high" },
      { title: "Submit invoice",        category: "admin",     dueDate: "2026-09-10", priority: "medium" },
      { title: "Update profile",        category: "admin",     dueDate: "2026-09-20", priority: "low" },
      { title: "Fix login bug",         category: "technical", dueDate: "2026-09-12", priority: "high" }
    ];

    //dropdown : title, category,dueDate,priority 
   let filterResult = document.getElementById("filter")
// Assign the tasks array to a new variable, so that the original is not disturbed
    let visibleTasks = tasks 
    let selectedCategory = filterResult.value

    if(selectedCategory !== "all"){
        visibleTasks = tasks.filter(function(task){
            return task["selectedCategory"] === selectedCategory
        })
    }


    // Using bracket notation to build a property name or combine it 
    //

    let taskId = "t0042"

    console.log(tasks[`task-${taskId}`])

   // prints :  task-t0042

    // Using obj.prop - Standard dot notation

    objectname.property


// Sort the tasks array in ascending order, properties are dynamic, 
// use box notation. Use array method sort()
 const tasks = [
      { title: "Book support session", category: "technical", 
        dueDate: "2026-09-15", priority: "high" },
      { title: "Submit invoice",        category: "admin",     
        dueDate: "2026-09-10", priority: "medium" },
      { title: "Update profile",        category: "admin",     
        dueDate: "2026-09-20", priority: "low" },
      { title: "Fix login bug",         category: "technical", 
        dueDate: "2026-09-12", priority: "high" }
    ];

    let sortButton = document.getElementById("sortBtn")

    let sortBy = sortButton.value

    let sortedTasks = visibleTasks

    sortedTasks.sort(function(a,b){
                let valueA = a[sortBy]
                let valueB = b[sortBy]
           // here A comes first      
                if(valueA < valueB){
                    return -1 
                }
                // here B comes first
                if(valueA > valueB){
                    return 1
                }
                return 0 
    })


    //
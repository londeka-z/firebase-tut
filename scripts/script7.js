/*

ERRORS : 

Error object{
message:"",
name:,
stack:""
}

TypeError - A value has the wrong data type 
RangeError - Boundaries eg(0-100)
ReferenceError - Code points to a variable that is unavailable or undeclared
SyntaxError - Pasrsed data is invalid for JS 

*/
// const inputElement = document.getElementById("input")
// const buttonEl = document.getElementById("button")

// function saveTask(){
//    let taskInput = inputElement.value
// if(taskInput.title == ""){
//     alert("You must enter the title first")

// }

//     console.log("Task saved: ", task.title)

// }

// running the function

// saveTask({title: "Complete JS Video"}) //OUTPUT: Complete JS video
// saveTask({}) // OUTPUT : Undefined  



// buttonEl.addEventListener(saveTask)

//function saveTask(){
//    let taskInput = inputElement.value
// if(taskInput.title == ""){
//     alert("You must enter the title first")

// }

//     console.log("Task saved: ", task.title)

//function saveTask(){
//    let taskInput = inputElement.value
// if(taskInput.title == ""){
//     alert("You must enter the title first")

// }

//     console.log("Task saved: ", task.title)

// function saveTask(task){
// if(!task.title){
//    throw new Error("Task Title is required")

// }

//     console.log("Task saved: ", task.title)
// }

// saveTask({})

// TRY CATCH FINALLY BLOCK
// function saveTask(task){
// try{
// if(task.title){
// console.log("Task saved: ", task.title)
// }

// } catch(error){
//     console.log(error.message)
// }
    
// }

// const taskAdded = {title: ""}

// const runSaveTask =saveTask(taskAdded)



// UNIT 2 CONTINUED

//ASYNC AND AWAIT IN CODE 

// ASYNC - This means that the function may need to wait for something before it runs 
// 
//WHY ASYNC? : Communication with the db(firebase) and the server - this is not instant, it must load,
//  depends on network stability, etc

// AWAIT - Send the request, wait for the answer(status code)

// Data that is fetched returns as a Promise

// A promise means that the answer will be generated later , once iot has been accessed.

// [{Object}, {Object}]

// So, to access your data, you must always use some form of Object notation (dot or bracket)
// To get the tasks, you call : response.data

 async function saveTask(task){
 // fetching all tasks 

 const response = await get("/tasks")   // Fetch method to get the tasks collection
 // if there is a success do the following

 if(response.ok){
    let tasks = response.data

    //eg of tasks structure
    // [{
    //     title: "Finish unit 1",
    //     description: "Something here"
    // }, {
    //     title: "Finish unit 1",
    //     description: "Something here"
    // }]
    // Using dom, we can render the tasks: 
    const list = document.getElementById("taskList") // assuming we already have this id in HTML
    list.innerHTML = ""
    for(let i = 0; i<task.length; i++){
        const li = document.createElement("li")
        li.innerHTML = `${tasks[i+1]}.${tasks[i].title} : ${tasks[i].description}`
        list.appendChild(li)
    }

 } else {
    throw new Error("Request for tasks unsuccessful")
 }

}


//SERVER COMMUNICATION
/*
OUR WEBSITE
     |
     | request
     v
SERVER / FIREBASE
     |
     | response
     v
OUR WEBSITE
*/
//fetch/get - send request
// await - wait
// response - answer from server

// HTTP STATUS CODES
/*
1. success - Exit status 200 this means everything worked 
2. failure due to missing fields or information - normally get it when posting - Exit status 400
3. Failure due to data not existing eg : fetching from the wrong collection - Exit status 404
4. Something is wrong with the server, eg: network causing timing out, auth issues - exit status 500
*/
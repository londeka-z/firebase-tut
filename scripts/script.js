import { auth } from "./firebase_config.js"
import { createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/12.18.0/firebase-auth.js"

const user = document.getElementById("user")
const password = document.getElementById("password")
const signup = document.getElementById("signup")


async function createAccount(user, password){
    if(!user || !password){
        alert("Please Enter email and password")
        return
    }

    const result = await createUserWithEmailAndPassword(auth, user, password)

    console.log(`User: ${user} signup successful`)
}

signup.addEventListener("click",createAccount)
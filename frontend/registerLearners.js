import { httpsCallable } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-functions.js";
import { functions } from "../firebase-config.js";

const postLearners = httpsCallable(functions, "registerLearner");

const form = document.getElementById("registerForm");
const message = document.getElementById("message");
const registerBtn = document.getElementById("registerBtn");

if (!form || !message || !registerBtn) {
  throw new Error("Registration form elements are missing from the page.");
}

function validateRegistration({name, email, password}) {
  const errors = [];

  if (typeof name !== "string" || name.trim().length < 2) {
    errors.push("Name must be at least 2 characters long");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    errors.push("Please enter a valid email");
  }

  if (password.length < 6) {
    errors.push("Password must be 6 characters or more");
  }

  return {
    valid: errors.length === 0,
    errors,
  };
}

form.addEventListener("submit", async function (event) {
  event.preventDefault();

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value;

  const data = {name, email, password};
  const validation = validateRegistration(data);

  if (!validation.valid) {
    message.textContent = validation.errors.join(" | ");
    return;
  }

  try {
    registerBtn.disabled = true;
    message.textContent = "Creating your account...";

    const result = await postLearners(data);
    message.textContent = result.data.message;

    window.location.href = "learner-dashboard.html";
  } catch (error) {
    console.error(error);
    message.textContent = error.message || "Registration failed";
  } finally {
    registerBtn.disabled = false;
  }
});

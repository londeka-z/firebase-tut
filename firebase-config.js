import { initializeApp } from "https://www.gstatic.com/firebasejs/10.14.1/firebase-app.js";
import {
  getFunctions,
  connectFunctionsEmulator,
} from "https://www.gstatic.com/firebasejs/10.14.1/firebase-functions.js";

export const firebaseConfig = {
  apiKey: "AIzaSyAHqslVTV8lZGllt3LuYS1seviTut0WFdk",
  authDomain: "skillstrack-9c8d9.firebaseapp.com",
  projectId: "skillstrack-9c8d9",
  storageBucket: "skillstrack-9c8d9.firebasestorage.app",
  messagingSenderId: "520282472917",
  appId: "1:520282472917:web:910f7741cc4b1772aefd5c",
  measurementId: "G-E7QHJJVL6X",
};

export const app = initializeApp(firebaseConfig);
export const functions = getFunctions(app);

if (location.hostname === "localhost" || location.hostname === "127.0.0.1") {
  connectFunctionsEmulator(functions, "127.0.0.1", 5001);
}

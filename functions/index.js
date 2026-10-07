/**
 * Cloud Functions for Firebase.
 */

const admin = require("firebase-admin");
const {setGlobalOptions} = require("firebase-functions");
const {onCall, HttpsError} = require("firebase-functions/v2/https");

admin.initializeApp();

setGlobalOptions({maxInstances: 10});

exports.registerLearner = onCall(async (request) => {
  const {name, email, password} = request.data ?? {};

  if (!name || !email || !password) {
    throw new HttpsError("invalid-argument", "name, email and password are required");
  }

  const trimmedName = String(name).trim();
  const trimmedEmail = String(email).trim();
  const trimmedPassword = String(password).trim();

  if (trimmedName.length < 2) {
    throw new HttpsError("invalid-argument", "Name is not valid");
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    throw new HttpsError("invalid-argument", "Please provide a valid email address");
  }

  if (trimmedPassword.length < 6) {
    throw new HttpsError("invalid-argument", "Password must be at least 6 characters long");
  }

  try {
    const learnerRecord = await admin.auth().createUser({
      email: trimmedEmail,
      password: trimmedPassword,
      displayName: trimmedName,
    });

    await admin.firestore().collection("learners").doc(learnerRecord.uid).set({
      displayName: trimmedName,
      email: trimmedEmail,
      role: "learner",
      createdAt: Date.now(),
    });

    return {
      success: true,
      uid: learnerRecord.uid,
      message: "Registration successful",
    };
  } catch (error) {
    if (error && error.code === "auth/email-already-exists") {
      throw new HttpsError("already-exists", "This email already exists");
    }

    console.error("registerLearner failed:", error);
    throw new HttpsError("internal", "Account could not be created");
  }
});

import {
  GoogleAuthProvider,
  sendSignInLinkToEmail,
  signInWithPopup,
  signInWithEmailLink,
  createUserWithEmailAndPassword,
} from "firebase/auth";

import type { ActionCodeSettings, User as FirebaseUser } from "firebase/auth";

import type { FirebaseError } from "firebase/app";
import { auth } from "~/firebaseClient";
import { createUser } from "../user";

// Function to register or log in with Google
export async function registerOrLoginWithGoogle(): Promise<
  FirebaseUser | undefined
> {
  const provider = new GoogleAuthProvider();

  try {
    const result = await signInWithPopup(auth, provider);
    const user = result.user;
    return user;
  } catch (error) {
    const errorCode = (error as FirebaseError).code;
    const errorMessage = (error as FirebaseError).message;
    const credential = GoogleAuthProvider.credentialFromError(
      error as FirebaseError
    );
    console.log(errorMessage, credential, errorCode);
  }
}

export async function createNewAccount(
  email: string,
  password: string,
  name: string,
  surname: string,
  participantType: string
): Promise<FirebaseUser | undefined> {
  try {
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const firebaseUser = userCredential.user;
    await createUser(name, surname, email, firebaseUser.uid, participantType);

    return firebaseUser;
  } catch (error) {
    // Handle registration errors
    console.error("Error creating new account:", error);
    throw error; // You can choose to handle errors differently
  }
}

// Function to handle email verification
export async function handleEmailVerification(
  email: string
): Promise<FirebaseUser | undefined> {
  try {
    const result = await signInWithEmailLink(auth, email, window.location.href);
    const user = result.user;

    return user;
  } catch (error) {
    // Handle the error appropriately
  }
}

// Function to sign in with email verification
export async function signInWithEmailVerification(email: string) {
  const actionCodeSettings: ActionCodeSettings = {
    // URL you want to redirect back to after completing the email action.
    // Make sure the domain is added in the Firebase Console as an authorized domain.
    url: "http://localhost:3000",
    // This must be set to true to complete the sign-in flow within the app.
    handleCodeInApp: true,
  };

  try {
    await sendSignInLinkToEmail(auth, email, actionCodeSettings);
    // Additional logic after successfully sending the sign-in link
    // For example, you can show a message to the user indicating that the email has been sent.
    await handleEmailVerification(email);
  } catch (error) {
    switch ((error as FirebaseError).code) {
      case "auth/invalid-email":
        console.log("Invalid email:", (error as FirebaseError).message);
        break;
      case "auth/user-disabled":
        console.log("User disabled:", (error as FirebaseError).message);
        break;
      case "auth/operation-not-allowed":
        console.log("Operation not allowed:", (error as FirebaseError).message);
        break;
      case "auth/user-not-found":
        console.log("User not found:", (error as FirebaseError).message);
        break;
      default:
        console.log("Firebase error:", error);
        break;
    }
    // Handle the case when email verification does not work out
    console.log("Email verification failed");
  }
}

// Function to log out
export async function logOut() {
  try {
    auth.signOut();
  } catch (error) {
    console.log(error);
  }
}

export type User = {
  displayName: string | null;
  email: string | null;
  photoURL: string | null;
  uid: string;
  phoneNumber: string | null;
  name: string | null; // New field
  surname: string | null; // New field
  participantType: string | null; // New field
};

// Function to transform Firebase user to User type
export function transformUser(
  firebaseUser: FirebaseUser | null,
  additionalUserData: any = null
): User | null {
  if (firebaseUser) {
    return {
      displayName: firebaseUser.displayName || null,
      email: firebaseUser.email || null,
      photoURL: firebaseUser.photoURL || null,
      uid: firebaseUser.uid,
      phoneNumber: firebaseUser.phoneNumber || null,
      name: additionalUserData?.name || null,
      surname: additionalUserData?.surname || null,
      participantType: additionalUserData?.participantType || null,
    };
  }
  return null;
}

// Function to listen for authentication changes
export function onAuthChange(callback: (user: FirebaseUser | null) => void) {
  auth.onAuthStateChanged((user) => {
    // const transformedUser = transformUser(user);
    callback(user);
  });
}

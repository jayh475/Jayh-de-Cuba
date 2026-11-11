import { db, setDoc, collection, doc, getDoc, auth } from "~/firebaseClient";
import { type User } from "./auth/auth";
import { signInWithEmailAndPassword } from "firebase/auth";

// this function is used when you already have a account
export async function loginUser(
  email: string,
  password: string
): Promise<User | undefined> {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    const firebaseUser = userCredential.user;
    const user = getMyAccount(firebaseUser.uid);

    return user;
  } catch (error) {
    console.error("Error logging in:", error);
    throw error; // Handle login errors according to your app's needs
  }
}

export async function createUser(
  name: string,
  surname: string,
  email: string,
  uid: string,
  participantType: string
) {
  try {
    const usersRef = collection(db, "users");
    await setDoc(doc(usersRef, uid), {
      userID: uid,
      name: name,
      surname: surname,
      email: email,
      participantType: participantType,
    });
  } catch (error) {
    console.error("Error writing new message to Firestore Database", error);
  }
}

export async function getMyAccount(uid: string): Promise<User | undefined> {
  try {
    if (!auth.currentUser) {
      throw new Error("No authenticated user found.");
    }

    const usersRef = doc(db, "users", uid);
    const querySnapshot = await getDoc(usersRef);

    if (querySnapshot.exists()) {
      const data = querySnapshot.data();
      return {
        displayName: data.displayName || null,
        email: data.email || null,
        photoURL: data.photoURL || null,
        uid: data.uid || null,
        phoneNumber: data.phoneNumber || null,
        name: data.name || null,
        surname: data.surname || null,
        participantType: data.participantType || null,
      } as User;
    } else {
      return undefined;
    }
  } catch (error) {
    console.error("Error getting account from Firebase Database", error);
    return undefined;
  }
}

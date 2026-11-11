import { firebaseConfig } from "./firebaseConfig";
import { getAnalytics } from "firebase/analytics";
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// import { applicationDefault, initializeApp as initializeAdminApp} from "firebase-admin/app";
// import admin, { credential } from "firebase-admin"

// Firebase configuration

// Initialize Firebase
// if(!admin.apps.length){
//   initializeAdminApp({
//     credential: applicationDefault(),
//     databaseURL: "https://remix-firebase-3622f.firebaseio.com"
//   })

// }

const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);

let analytics;
if (typeof window !== "undefined") {
  // Only initialize analytics if running in a browser environment
  analytics = getAnalytics(firebaseApp);
}

export { auth, db, analytics };

export {
  collection,
  getDocs,
  updateDoc,
  doc,
  setDoc,
  deleteDoc,
  where,
  getDoc,
  query,
  arrayUnion,
  limit,
  onSnapshot,
  getCountFromServer,
  serverTimestamp,
} from "firebase/firestore";

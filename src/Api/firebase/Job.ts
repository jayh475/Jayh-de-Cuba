import {
  auth,
  collection,
  setDoc,
  doc,
  serverTimestamp,
  db,
} from "~/firebaseClient";

export type jobLevel =
  | "Director"
  | "EntryLevel"
  | "Internship"
  | "Junior"
  | "Midweight"
  | "Senior";

export type currency = "USD" | "EUR " | "AUD" | "CAD" | "GBP" | undefined;

export type jobType =
  | "Contract"
  | "Full-time"
  | "Internship"
  | "Part-time"
  | undefined;

export interface Job {
  jobTitle: string;
  companyName: string;
  companyWebsite: string;
  locations: string[];
  content: string;
  jobType: jobType;
  jobLevels: jobLevel[];
  currency: currency;
}

export async function PostJob(job: Job) {
  if (!auth.currentUser) {
    console.error("No authenticated user found");
    return;
  }

  try {
    const postsRef = collection(db, "Jobs");
    await setDoc(doc(postsRef), {
      name: auth.currentUser.displayName,
      uid: auth.currentUser.uid,
      date: serverTimestamp,
      content: job.content,
      companyName: job.companyName,
      companyWebsite: job.companyWebsite,
      locations: job.locations,
      jobTitle: job.jobTitle,
      currency: job.currency,
      jobType: job.jobType,
      jobLevels: job.jobLevels,
    });
  } catch (error) {
    console.error("Error writing new message to Firebase Database", error);
  }
}

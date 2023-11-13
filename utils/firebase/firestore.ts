// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { addDoc, collection, getDocs, getFirestore } from "firebase/firestore";
import { getStorage, ref } from "firebase/storage";
import { getAuth } from "firebase/auth";
import toast from "react-hot-toast";

const firebaseConfig = {
  apiKey: process.env.apiKey,
  authDomain: process.env.authDomain,
  projectId: process.env.projectId,
  storageBucket: process.env.storageBucket,
  messagingSenderId: process.env.messagingSenderId,
  appId: process.env.appId,
  measurementId: process.env.measurementId,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage(app);
// Create a storage reference from our storage service
const storageRef = ref(storage);
const analytics = getAnalytics(app);
export const auth = getAuth(app);

export const db = getFirestore(app);

// firebase functions

export const addDocument = async (
  ref: string,
  data: any,
  callbackFunc?: () => void
  // successMsg: string
) => {
  try {
    const docRef = await addDoc(collection(db, ref), data);
    if (callbackFunc) callbackFunc();
    toast.success("success");
  } catch (e) {
    toast.success("failed");
  }
};

//
export const getAllDocuments = async (ref: string) => {
  const querySnapshot = await getDocs(collection(db, ref));
  console.log(querySnapshot);
  return querySnapshot;
  // querySnapshot.forEach((doc) => {
  //   console.log(doc.id, " => ", doc.data());
  // });
};

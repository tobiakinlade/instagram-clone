// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyD0E-isbXB14KB0xjtvy0sR72GEyQSpl60',
  authDomain: 'insta-f6882.firebaseapp.com',
  projectId: 'insta-f6882',
  storageBucket: 'insta-f6882.appspot.com',
  messagingSenderId: '647910496006',
  appId: '1:647910496006:web:648246cfa6f1ec01233087',
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

const db = getFirestore();
const storage = getStorage();

export { db, storage, app };


import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'

import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_KEY,
  authDomain: "cloud-stored-image.firebaseapp.com",
  projectId: "cloud-stored-image",
  storageBucket: "cloud-stored-image.appspot.com",
  messagingSenderId: "96030889413",
  appId: "1:96030889413:web:8836f511fae542eb1627ac",
  measurementId: "G-543HZENJX1"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);

export default app;

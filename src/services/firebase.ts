// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { getFirestore } from 'firebase/firestore';
import { getAuth } from 'firebase/auth';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from 'firebase/auth';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: 'AIzaSyDkPyVJ7NkJXEP9E4jL2I1qrMl8OAk9C-o',
  authDomain: 'damp-2023.firebaseapp.com',
  projectId: 'damp-2023',
  storageBucket: 'damp-2023.appspot.com',
  messagingSenderId: '659503656616',
  appId: '1:659503656616:web:2548c00b4516a8db70dc9d',
  measurementId: 'G-QHDXLV6G2N',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();
export const db = getFirestore(app);
export function signIn(usuario: string, senha: string) {
  return signInWithEmailAndPassword(auth, usuario, senha);
}

export function createUser(usuario: string, senha: string) {
  return createUserWithEmailAndPassword(auth, usuario, senha);
}

import { initializeApp } from "firebase/app";
import { writable } from "svelte/store";
import {
  getAuth,
  onAuthStateChanged,
  signOut,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import type { User } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAx9sHjdLMtzz7PqDJN54oNr7aWbT9C1y0",
  authDomain: "invoissential.firebaseapp.com",
  projectId: "invoissential",
  storageBucket: "invoissential.firebasestorage.app",
  messagingSenderId: "534631897526",
  appId: "1:534631897526:web:cdf401367da9b847c38917",
  measurementId: "G-82PGRS1X26",
};

function userStore() {
  let unsubscribe: () => void;

  if (!auth || !globalThis.window) {
    console.warn("Auth is not initialized or not in browser");
    const { subscribe } = writable<User | null>(null);
    return {
      subscribe,
    };
  }

  const { subscribe } = writable(auth?.currentUser ?? null, (set) => {
    unsubscribe = onAuthStateChanged(auth, (user) => {
      set(user);
    });

    return () => unsubscribe();
  });

  return {
    subscribe,
  };
}

async function logOut() {
  await signOut(auth);
}

async function signIn() {
  const provider = new GoogleAuthProvider();
  await signInWithPopup(auth, provider);
}

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const user = userStore();
export { logOut, signIn };

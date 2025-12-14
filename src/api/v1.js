import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { auth, db } from "@/config/firebase";
import {
    addDoc,
    collection,
    deleteDoc,
    doc,
    // DocumentData,
    getDoc,
    getDocs,
    onSnapshot,
    query,
    updateDoc,
    where
} from "firebase/firestore";

export const users = collection(db, 'users');

export async function login(email, password) {
    const userCredential = await signInWithEmailAndPassword(auth, email, password);
    return userCredential.user; // the logged-in user
}

export const logout = () => signOut(auth);

export async function signUp(email, password) {
    try {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        return userCredential.user; // returns the created user
    } catch (error) {
        throw new Error(error.message);
    }
}

export async function getUserByEmail(email) {
    const q = query(users, where('email', '==', email));
    const querySnapshot = await getDocs(q);

    if (querySnapshot.empty) return null;

    const docSnapshot = querySnapshot.docs[0];
    return { id: docSnapshot.id, ...(docSnapshot.data()) };
}

export function subscribeUserByEmail(email, callback) {
    const q = query(users, where("email", "==", email));
    const unsubscribe = onSnapshot(q, (querySnapshot) => {
        if (querySnapshot.empty) return callback(null);

        const docSnapshot = querySnapshot.docs[0];
        const user = { id: docSnapshot.id, ...docSnapshot.data() };
        callback(user);
    });

    return unsubscribe; // call this function to stop listening
}

export async function updateUserById(id, updatedData) {
    const docRef = doc(users, id);
    await updateDoc(docRef, updatedData);
    return { id: id, ...updatedData };
}

export async function addUser(data) {
    const docRef = await addDoc(users, data);
    return { id: docRef.id, ...data };
}
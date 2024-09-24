import { createUserWithEmailAndPassword, signInAnonymously, signInWithPopup, updatePassword } from "firebase/auth";
import { auth } from "./firebase";


import { createUserWithEmailAndPassword, GoogleAuthProvider, signUserWithEmailAndPassword} from "firebase/auth";
import { send } from "vite";

export const doCreateUserWithEmailAndPassword = async (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
};

export const doSignUserWithEmailAndPassword = async (email, password) => {
    return signUserWithEmailAndPassword(auth, email, password);
};

export const doSignInwithGoogle = async () => {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    //result.user
    return result;
};

export const doSignOut = () => {
    return auth.signOut();
};

export const doPasswordReset = (email) => {
    return sendPasswordResetEmail(auth, email);
}

export const doPasswordChange = (email) => {
    return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
    return sendEmailVerification(auth.currentUser, {
        url:  `${window.location.origin}/home`,
    });
}
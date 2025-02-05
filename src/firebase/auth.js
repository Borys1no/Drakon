import { auth, db } from "./firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  sendPasswordResetEmail,
  sendEmailVerification,
  updatePassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { doc, setDoc, serverTimestamp } from "firebase/firestore";

export const doCreateUserWithEmailAndPassword = async (email, password, fullName, cedula) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    const user = userCredential.user;

    // Guardar usuario en Firestore con más datos
    await setDoc(doc(db, "users", user.uid), {
      email: user.email,
      nombre: fullName,  // Agregar nombre
      cedula: cedula,    // Agregar cédula
      createdAt: serverTimestamp(),
      role: "user",      // Rol por defecto
    });

    // Enviar verificación de correo
    await sendEmailVerification(user);

    return user;
  } catch (error) {
    console.error("Error creating user:", error);
    throw error;
  }
};

export const doSignInWithEmailAndPassword = async (email, password) => {
  try {
    return await signInWithEmailAndPassword(auth, email, password);
  } catch (error) {
    console.error("Error signing in:", error);
    throw error;
  }
};

export const doSignInWithGoogle = async () => {
  try {
    const provider = new GoogleAuthProvider();
    const result = await signInWithPopup(auth, provider);
    const user = result.user;

    // Verificar si el usuario ya está en Firestore
    const userRef = doc(db, "users", user.uid);
    await setDoc(userRef, {
      email: user.email,
      createdAt: serverTimestamp(),
      role: "user", // Puedes cambiar esto según tu lógica
    }, { merge: true }); // `merge: true` evita sobrescribir datos existentes

    return user;
  } catch (error) {
    console.error("Error signing in with Google:", error);
    throw error;
  }
};

export const doSignOut = () => {
  return auth.signOut();
};

export const doPasswordReset = (email) => {
  return sendPasswordResetEmail(auth, email);
};

export const doPasswordChange = (password) => {
  if (!auth.currentUser) throw new Error("No user logged in");
  return updatePassword(auth.currentUser, password);
};

export const doSendEmailVerification = () => {
  if (!auth.currentUser) throw new Error("No user logged in");
  return sendEmailVerification(auth.currentUser, {
    url: `${window.location.origin}/home`,
  });
};

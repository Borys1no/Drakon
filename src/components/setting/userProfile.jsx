import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { updatePassword, reauthenticateWithCredential, EmailAuthProvider } from "firebase/auth";

const UserProfile = () => {
    const [userData, setUserData] = useState({
        nombre: "",
        cedula: "",
        email: "",
        telefono: "",
        direccion: "",
        role: "",
      });
  const [passwords, setPasswords] = useState({ current: "", new: "" });
  const [editing, setEditing] = useState(false);
  const [passwordError, setPasswordError] = useState("");

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          const data = docSnap.data();
          setUserData({
            nombre: data.nombre || "",
            cedula: data.cedula || "",
            email: data.email || "",
            telefono: data.telefono || "",
            direccion: data.direccion || "",
            role: data.role || "user",
          });
        }
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const handlePasswordChange = (e) => {
    setPasswords({ ...passwords, [e.target.name]: e.target.value });
  };

  const updateProfile = async () => {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, "users", user.uid);
      
      try {
        await updateDoc(userRef, {
          nombre: userData.nombre,
          cedula: userData.cedula,
          telefono: userData.telefono,
          direccion: userData.direccion
        });
        alert("Perfil actualizado correctamente");
        setEditing(false); // Desactivar modo edición después de actualizar
      } catch (error) {
        console.error("Error actualizando perfil:", error);
        alert("Hubo un error al actualizar el perfil.");
      }
    }
  };
  

  const changePassword = async () => {
    const user = auth.currentUser;
    if (!user) return;

    const credential = EmailAuthProvider.credential(user.email, passwords.current);
    try {
      await reauthenticateWithCredential(user, credential);
      await updatePassword(user, passwords.new);
      alert("Contraseña actualizada correctamente");
      setPasswords({ current: "", new: "" });
    } catch (error) {
      setPasswordError("Contraseña actual incorrecta");
    }
  };

  return (
    <div>
        <br /><br /><br /><br /><br /><br /><br /><br /><br /><br />
      <h2>Perfil de Usuario</h2>
  
      <label>Nombre:</label>
      <input 
        type="text" 
        name="nombre" 
        value={userData.nombre || ""} 
        onChange={handleChange} 
        disabled={!editing} 
      />
  
      <label>Cédula:</label>
      <input 
        type="text" 
        name="cedula" 
        value={userData.cedula} 
        onChange={handleChange} 
        disabled={!editing} 
      />
  
      <label>Email:</label>
      <input 
        type="email" 
        name="email" 
        value={userData.email} 
        disabled 
      />
  
      <label>Teléfono:</label>
      <input 
        type="text" 
        name="telefono" 
        value={userData.telefono} 
        onChange={handleChange} 
        disabled={!editing} 
      />
  
      <label>Dirección de Envío:</label>
      <input 
        type="text" 
        name="direccion" 
        value={userData.direccion} 
        onChange={handleChange} 
        disabled={!editing} 
      />
  
      <button onClick={() => setEditing(!editing)}>
        {editing ? "Guardar" : "Editar"}
      </button>
      {editing && <button onClick={updateProfile}>Actualizar</button>}
  
      <h3>Cambiar Contraseña</h3>
  
      <label>Contraseña Actual:</label>
      <input 
        type="password" 
        name="current" 
        value={passwords.current} 
        onChange={handlePasswordChange} 
      />
      
      {passwordError && <p>{passwordError}</p>}
  
      <label>Nueva Contraseña:</label>
      <input 
        type="password" 
        name="new" 
        value={passwords.new} 
        onChange={handlePasswordChange} 
        disabled={!passwords.current} 
      />
      
      <button onClick={changePassword}>Actualizar Contraseña</button>
    </div>
  );
  
};

export default UserProfile;

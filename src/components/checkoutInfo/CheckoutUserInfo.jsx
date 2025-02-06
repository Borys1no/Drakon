import React, { useState, useEffect } from "react";
import { auth, db } from "../../firebase/firebase";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./CheckoutUserInfo.css";

const CheckoutUserInfo = () => {
  const [userData, setUserData] = useState({
    nombre: "",
    cedula: "",
    email: "",
    telefono: "",
    direccion: "",
  });
  const [editing, setEditing] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUserData = async () => {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setUserData(docSnap.data());
        }
      }
    };
    fetchUserData();
  }, []);

  const handleChange = (e) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const saveChanges = async () => {
    const user = auth.currentUser;
    if (user) {
      const userRef = doc(db, "users", user.uid);
      try {
        await updateDoc(userRef, {
          nombre: userData.nombre,
          cedula: userData.cedula,
          telefono: userData.telefono,
          direccion: userData.direccion,
        });
        alert("Datos actualizados correctamente");
        setEditing(false);
      } catch (error) {
        console.error("Error actualizando los datos", error);
        alert("Hubo un error al actualizar los datos");
      }
    }
  };

  return (
    <div>
        <br /><br /><br /><br /><br />
      <h2>Confirmar Información de Envío</h2>
      <label>Nombre:</label>
      <input type="text" name="nombre" value={userData.nombre} onChange={handleChange} disabled={!editing} />
      
      <label>Cédula:</label>
      <input type="text" name="cedula" value={userData.cedula} onChange={handleChange} disabled={!editing} />
      
      <label>Email:</label>
      <input type="email" name="email" value={userData.email} disabled />
      
      <label>Teléfono:</label>
      <input type="text" name="telefono" value={userData.telefono} onChange={handleChange} disabled={!editing} />
      
      <label>Dirección de Envío:</label>
      <input type="text" name="direccion" value={userData.direccion} onChange={handleChange} disabled={!editing} />
      
      <button className="btnEditar" onClick={() => setEditing(!editing)}>{editing ? "Cancelar" : "Editar"}</button>
      {editing && <button onClick={saveChanges}>Guardar</button>}
      
      <button className="continuarP" onClick={() => navigate("/checkout")}>Continuar</button>
    </div>
  );
};

export default CheckoutUserInfo;

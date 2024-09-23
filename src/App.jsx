import { useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "./firebase";  // Asegúrate de que este es el path correcto a tu archivo firebase.js

function App() {
  useEffect(() => {
    // Función para agregar un nuevo documento a Firestore
    const addTestData = async () => {
      try {
        const docRef = await addDoc(collection(db, "testCollection"), {
          name: "Rosa",
          price: 15.99,
          description: "Hermoso ramo de rosas rojas",
        });
        console.log("Documento escrito con ID: ", docRef.id);
      } catch (e) {
        console.error("Error agregando el documento: ", e);
      }
    };

    // Llamar a la función para agregar datos
    addTestData();
  }, []);

  return (
    <div>
      <h1>Conexión Firebase</h1>
    </div>
  );
}

export default App;

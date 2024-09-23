import { useEffect } from "react";
import { collection, addDoc, getDocs } from "firebase/firestore";
import { db } from "../firebase/firebase";
import Navbar from "./components/Navbar";


const App = () => {
  return (
    <div className="app">
      <Navbar/>
    </div>
  )
}

export default App

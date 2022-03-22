import './App.css';
import React, {useEffect,useState} from "react";
import {Boton} from "./components/Boton"
function App() {
  /**
   * *fsdfsdf
   * ! sdfsdf
   * ? dfsfdsdf
   * TODO: dsfsdf
   */
  const [contador,setContador] = useState(0);
  const [nombre, setNombre]= useState("");

  useEffect(()=> {
    setContador(0)
  },[]);

  return (
    <div className="App" id="App">
      <div>El valor de mi contador es: {contador}</div>
      <button onClick={()=>setContador(contador+ 1)}>Aumentar contador</button>
      <input value={nombre} 
      onChange={(event)=>{
        setNombre(event.target.value);
      }}
      placeholder="Ingresa tu nombre"
      />
      <span>Mi nombre es: {nombre}</span>
      <button onClick={()=>setContador(0)}>Inicializar contador</button>
      <button onClick={()=>setContador(contador - 1)}>Restar contador</button>
    </div>
  );
}

export default App;

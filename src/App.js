import './App.css';
import React, {useEffect,useState} from "react";
import {Boton} from "./components/Boton"

let urlApi = "https://jsonplaceholder.typicode.com/users";

function App() {
//cargando la petición a la API
const [loading, setLoading] = useState(false);
//Error
const [error,setError] = useState(false);
// Data
const [data, setData] = useState(null);
//Función FETCH
// Función que llama a una API (Backend)
// Async ->  Función asíncrona
// para usar await -> esperar, se estará ejecutando en estado de pendiente
//
const getUsers = async () => {
    setError(false);
    //Empezamos la petición y mostramos la pantalla de carga
    setLoading(true);
    // let response = await fetch(urlApi);
    // let data = await response;
    //Si todo pasa correctamente y no hubo error quitamos la pantalla
    //de carga y guardamos la data
    // setLoading(false);
    // setData(data);

    fetch(urlApi).then((response) =>{
        // Tomamos la respuesta del backend (es la response)
        if (response.ok) {
          // Si la respuesta es correcta
          // Regresamos la info transformada a json
          return response.json();
        } else {
          // Si no es correcta, ponemos nuestro error en true
          setError(true);
          // Quitamos la carga
          setLoading(false);
          // Regresamos el error por default
          return new Error(response.data);
        }      
    })
    .then((data) => {
      // Entonces si todo ha salido bien podemos trabajar con la data del backend
      // Quitamos la carga
      setLoading(false);
      // Guardamos la info
      setData(data);
    })
    .catch((error) => {
      // Si tenemos algún error en nuestro codigo guardamos el error
      setLoading(false);
      setError(true);
    });
};

const returnUsers = () => {
  if (data?.length > 0)
    return (
      <div className="users__box">
        {data?.map((item, index) => (
          <div className="user__card" key={index}>
            <span>Name : {item.name}</span>
            <br></br>
            <span>Username: {item.username}</span>
            <br></br>
            <span>Email: {item.email}</span>
            <br></br>
            <span>Website: {item.website}</span>
          </div>
        ))}
      </div>
    );
};

  // useEffect(() => {
  //   getUsers();
  // },[])
  return (
    <div className="App" id="App">
      <h1>Control de estados</h1>
      <Boton text="Cargar datos" onClick={getUsers}/>
      {loading === true && 
        <img src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2021/05/Stitch-Enojado-png.png?resize=860%2C860&ssl=1" 
        alt="Cargando" />}
      {/* {data !== null && 
        <img src="https://i.pinimg.com/originals/68/b5/da/68b5da5de55859e7385924b2a78ccd5a.png" 
        alt="Todo salió bien" />}    */}
      {error === true && 
        <img src="https://i0.wp.com/eltallerdehector.com/wp-content/uploads/2021/05/Angry-Stitch-Png.png?resize=500%2C500&ssl=1" 
         alt="Error" />}      
      {returnUsers()}

    </div>
  );
}

export default App;

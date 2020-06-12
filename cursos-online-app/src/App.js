import React, { useState } from "react";
import "./App.css";
import Perfil from "./componentes/Perfil";

function App() {
  //Para declarar variables de estado
  //const [nombre de la variable, Función que vas a cambiar] = valor Inicial
  const [nombre, cambiarNombre] = useState("No tiene nombre");

  //Creamos una función
  function eventoCajaTexto(e) {
    cambiarNombre(e.target.value); //le mandamos el nuevo valor
  }
  return (
    <div>
      <h1>React Hooks y React STATE {nombre} </h1>
      <input
        name="nombre"
        type="text"
        value={nombre}
        onChange={eventoCajaTexto}
      />
      {/**Le vamos a pasar un atributo a perfil */}
      <Perfil atributoMio={nombre} />
    </div>
  );
}

export default App;

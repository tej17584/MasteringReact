import React, { useEffect, useState } from "react"; //importamos react
import axios from "axios";

//Creamos el componente
//props me representa las propiedades del componente de fuera
function Perfil(props) {
  //Dentro de la lógica que atribuoMIO cambie, que se actualice el titulo de la pagina
  //useEffect(() => {
  //  document.title = props.atributoMio;
  //}, [props.atributoMio]); //Hacemos que este pendiente de atributo mio

  //Creamos una variable de estado para los paises
  const [paises, obtenerPaises] = useState([]); //lo inicializamos vacío
  const [status, cambiarStatus] = useState(false); //variable para ser asincrono la cosa del API
  //Usamos un useEffect para consumir un webservice
  useEffect(() => {
    //obtenemos la data
    axios
      .get("http://restcountries.eu/rest/v2/all")
      .then((resultado) => {
        obtenerPaises(resultado.data); //le pasamos a obtener paises la nueva data
        cambiarStatus(true); //cambiamos el valor de status a true
      })
      .catch((error) => {
        cambiarStatus(true); //no importa si hubo error se debe cambiar a true
      });
  }, []);

  //Solo si status es verdadero
  if (status) {
    return (
      <ul>
        {paises.map((pais, indice) => (
          <li key={indice}>{pais.name}</li>
        ))}
      </ul>
    );
  } else {
    return (
    <h1>Aún se están cargando los valores del Rest Service</h1>
    );
  }
}

export default Perfil;

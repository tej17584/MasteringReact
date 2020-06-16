import app from "firebase/app";
import "firebase/firestore";

//! Dentro vamos a poner la configuracion de la webapp
const config = {
  apiKey: "AIzaSyAAw_CdXkoUsYAH27MqF2aI9bNdwXHpALQ",
  authDomain: "masteringreact.firebaseapp.com",
  databaseURL: "https://masteringreact.firebaseio.com",
  projectId: "masteringreact",
  storageBucket: "masteringreact.appspot.com",
  messagingSenderId: "408883243220",
  appId: "1:408883243220:web:dd78a818c128a875a6f341",
  measurementId: "G-XZWSRHNMLT",
};

class Firebase {
  constructor() {
    //Inicializamos con la configutación
    app.initializeApp(config);
    this.db = app.firestore();
  }
}

export default Firebase;

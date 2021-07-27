import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardApi from './componentes/card';
import Db from './componentes/db';


function App() {

  const consumoApi = async () => {
    await axios.get('https://fakestoreapi.com/products/1').then(r => {
    setstate(r.data)
    
    }).catch(e => console.log(e))
  }

  const [state, setstate] = useState('')

  useEffect(() => {
    consumoApi()
  }, [])

  return (
    <div>

      <h1>titulo: {state.title}</h1>
      <img src={state.image}></img>
      <h2>precio: {state.price}</h2>
  

      <Db></Db>
      {/* <CardApi title={state.title}></CardApi> */}
    </div>
  );
}

export default App;

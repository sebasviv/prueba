import './App.css';
import axios from "axios";
import { useEffect, useRef, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import CardApi from './componentes/card';
import firebase from './componentes/firestore'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Modal, ModalBody, ModalHeader, ModalFooter } from 'reactstrap'




function App() {

  const contenido = useRef()
  const consumoDb = () => {
    firebase.child('usuarios').on('value', canal => {
      if (canal.val() !== null) {
        setDb({ data: canal.val() })
      } else {
        setDb({ data: [] })
      }
    })
  }
  const consumoApi = async () => {
    await axios.get('https://fakestoreapi.com/products').then(r => {
      setstate(r.data)
    }).catch(e => console.log(e))
  }

  
  const [db, setDb] = useState('')
  const [state, setstate] = useState([])

  useEffect(() => {
    consumoApi()
  }, [])

  return (
    <div ref={contenido}>
      <div className="d-flex flex-row">
      {
        state.map( product =>
          <CardApi key={product.id} image={product.image} title={product.title} price={product.price} description={product.description}></CardApi>
          )
      }
</div>
    </div>
  );
}

export default App;

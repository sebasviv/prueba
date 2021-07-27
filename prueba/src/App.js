import './App.css';
import axios from "axios";
import { useEffect } from 'react';

function App() {

const consumoApi = () => {
  
  axios.get('https://fakestoreapi.com/products/1').then(r => {
    console.log(r.data)
  }).catch(e => console.log(e))
}

  useEffect(() => {
    consumoApi()
  }, [])
  
  return (
    <div>
  
    </div>
  );
}

export default App;

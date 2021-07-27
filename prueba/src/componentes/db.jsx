import React from 'react'
import firebase from 'firebase';
import firestore from "./firestore";


firebase.firestore().collection('usuarios')
    .onSnapshot(query => {
      query.forEach(doc => {
        console.log(doc.data)
      })
    });

const Db = () => {
    return (
        <div>
            
        </div>
    )
}

export default Db

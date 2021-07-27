
import firebase from 'firebase/app'

const firebaseConfig = {
    apiKey: "AIzaSyBms0aQ35IbevKXUOwzSlBEzTJFUw5RpmE",
    authDomain: "prueba-6190f.firebaseapp.com",
    projectId: "prueba-6190f",
    storageBucket: "prueba-6190f.appspot.com",
    messagingSenderId: "316344747221",
    appId: "1:316344747221:web:677597a87b605d52ba0e5c"
  };
  // Initialize Firebase
  var fireDB=firebase.initializeApp(firebaseConfig);
  export default fireDB
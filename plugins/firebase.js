import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyCmBbWswckWLOawPnp5O6mQnfeWVor50Pc",
    authDomain: "proyecto-final-cf888.firebaseapp.com",
    databaseURL: "https://proyecto-final-cf888-default-rtdb.firebaseio.com",
    projectId: "proyecto-final-cf888",
    storageBucket: "proyecto-final-cf888.appspot.com",
    messagingSenderId: "167259502169",
    appId: "1:167259502169:web:7a4a5c2bc07188a5cae348"
  };

const app =  createApp(App)

initializeApp(firebaseConfig);  


import  {firebase}  from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYrNI179M-kfPYh5eojGnDHSeHp-vdgbY",
  authDomain: "foodexp-51c5e.firebaseapp.com",
  projectId: "foodexp-51c5e",
  storageBucket: "foodexp-51c5e.appspot.com",
  messagingSenderId: "466301721712",
  appId: "1:466301721712:web:409b2d2ea1d5832da5e8b5",
}

export const firebaseApp = firebase.initializeApp(firebaseConfig);

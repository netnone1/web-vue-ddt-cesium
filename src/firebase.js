import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyB0jEE81f2tyALy-yu-UIPVhBtZmmVoNM0",
  authDomain: "cmudigitaltwin.firebaseapp.com",
  databaseURL: "https://cmudigitaltwin-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "cmudigitaltwin",
  storageBucket: "cmudigitaltwin.appspot.com",
  messagingSenderId: "195899095238",
  appId: "1:195899095238:web:66d615df634083ca78bfc7",
  measurementId: "G-C09PYE5SVR"
};

const app = initializeApp(firebaseConfig);
const firebase = getDatabase(app);

export default firebase;
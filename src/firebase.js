import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCLjX2h9msXuTopxzfqPIPjlG44IaUj39M",
  authDomain: "disneyplusgaurav.firebaseapp.com",
  projectId: "disneyplusgaurav",
  storageBucket: "disneyplusgaurav.appspot.com",
  messagingSenderId: "673123990829",
  appId: "1:673123990829:web:b216827839d76c7d8267a4",
  measurementId: "G-2YDTL0F6TJ"
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;
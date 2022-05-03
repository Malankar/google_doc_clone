import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyD-9GprdpzHURatEdU25DfGb6V1RE2-ex8",
  authDomain: "doc-af85a.firebaseapp.com",
  projectId: "doc-af85a",
  storageBucket: "doc-af85a.appspot.com",
  messagingSenderId: "807524636947",
  appId: "1:807524636947:web:8a463cc74b507de2bd62e6"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();
const db = app.firestore();
export { db };

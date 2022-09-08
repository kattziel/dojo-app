import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyADEvkTFYl2GofKyWEdQPhUQTg5FNcoRv4",
  authDomain: "thedojosite-2bf29.firebaseapp.com",
  projectId: "thedojosite-2bf29",
  storageBucket: "thedojosite-2bf29.appspot.com",
  messagingSenderId: "1044864959560",
  appId: "1:1044864959560:web:061f3a5874f1866a88c47d"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.Timestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }
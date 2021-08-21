import firebase from "firebase/app"
import "firebase/auth"

const app = firebase.initializeApp({
    apiKey: "AIzaSyDKw9TPAN0_E8mwqmlNMwng9smRXtxDoz8",
    authDomain: "solodemo-6cbcc.firebaseapp.com",
    projectId: "solodemo-6cbcc",
    storageBucket: "solodemo-6cbcc.appspot.com",
    messagingSenderId: "485492424636",
    appId: "1:485492424636:web:a7824609ebd1e84a5275b9"
})

export const auth = app.auth()
export default app
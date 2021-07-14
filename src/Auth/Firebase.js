import firebase from "firebase/app"
import "firebase/auth"

const app= firebase.initializeApp({
    // apiKey:process.env.REACT_APP_API_KEY,
    // authDomain: process.env.REACT_APP_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_APP_ID
    apiKey:"AIzaSyC7kNwjOLuTqSYu293eIc0H4k_j15PQJls",
    authDomain:"auth-88254.firebaseapp.com",
    projectId:"auth-88254",
    storageBuckett:"auth-88254.appspot.com",
    messagingSenderId:"867898209345",
    appId:"1:867898209345:web:a8f924b"

})
export const auth = app.auth()
export default app
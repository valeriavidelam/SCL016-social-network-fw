import app from 'firebase/app';
import 'firebase/auth'

const firebaseConfig = {
    apiKey: "AIzaSyAg4MyyYoRnsCV09kDrw0VJdbNwZuuvTJ0",
    authDomain: "chinchin-socialnetwork.firebaseapp.com",
    projectId: "chinchin-socialnetwork",
    storageBucket: "chinchin-socialnetwork.appspot.com",
    messagingSenderId: "383753542259",
    appId: "1:383753542259:web:4fe9a3396df86ed54be806",
    measurementId: "G-MX331NEN48"
};
// Initialize Firebase
app.initializeApp(firebaseConfig);

const auth = firebase.auth()

export {auth, firebase}

import * as firebase from 'firebase';

// Initialize Firebase
const firebaseConfig = {
    apiKey: "AIzaSyC80ZFjbO279-6OlclZ8Q49LhFCsyfSoBs",
    authDomain: "native-3fe75.firebaseapp.com",
    databaseURL: "https://native-3fe75.firebaseio.com",
    projectId: "native-3fe75",
    storageBucket: "native-3fe75.appspot.com",
    messagingSenderId: "681509032079",
    appId: "1:681509032079:web:518aefa14bd4042721e0fa",
    measurementId: "G-M84250DYV9"
};

firebase.initializeApp(firebaseConfig);
export default firebase;
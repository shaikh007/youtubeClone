import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';

const firebaseConfig = {
    apiKey: "AIzaSyBtk8J0-M9Ny1uF50dgOrpm9nWn8vyqics",
    authDomain: "yt-clone-99.firebaseapp.com",
    projectId: "yt-clone-99",
    storageBucket: "yt-clone-99.appspot.com",
    messagingSenderId: "702790969471",
    appId: "1:702790969471:web:1d117134f5d066398f774a"
};

firebase.initializeApp(firebaseConfig);

export default firebase.auth();
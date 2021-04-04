import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: process.env.REACT_APP_apiKey,
    authDomain: process.env.REACT_APP_authDomain,
    projectId: process.env.REACT_APP_projectId,
    storageBucket: process.env.REACT_APP_storageBucket,
    messagingSenderId: process.env.REACT_APP_messagingSenderId,
    appId: process.env.REACT_APP_appId,
    measurementId: process.env.REACT_APP_measurementId,
};


// const firebaseConfig = {
//     apiKey: "AIzaSyDUsuXW5wiFOFSnQ9stiw-BUC22CmMYxTU",
//     authDomain: "react-app-curso-kll.firebaseapp.com",
//     projectId: "react-app-curso-kll",
//     storageBucket: "react-app-curso-kll.appspot.com",
//     messagingSenderId: "695085237107",
//     appId: "1:695085237107:web:d545f083c00d27ce8cbb06",
//     measurementId: "G-9ZXLVP8ERG"
// };

// const firebaseConfigTesting = {
//     apiKey: "AIzaSyAXHPjgx3WCKAgnoGuHHb6KYQeirkavL04",
//     authDomain: "testing-e580b.firebaseapp.com",
//     projectId: "testing-e580b",
//     storageBucket: "testing-e580b.appspot.com",
//     messagingSenderId: "247481057641",
//     appId: "1:247481057641:web:c2e09ca336c611c998bdf8",
//     measurementId: "G-W6B7E6PYFJ"
//   };


// if( process.env.NODE_ENV === 'test') {
//     // test
//     firebase.initializeApp(firebaseConfigTesting);

// }else {
    // devv / prod
    firebase.initializeApp(firebaseConfig);

// }

// Initialize Firebase

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}
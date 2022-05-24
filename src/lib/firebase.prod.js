import Firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import { seedDatabase } from '../seed';

const config = {
  apiKey: "AIzaSyDlG5MOgd-TQJl4joebY3foW-Q_6U2wc0Y",
  authDomain: "netflix-cloness.firebaseapp.com",
  projectId: "netflix-cloness",
  storageBucket: "netflix-cloness.appspot.com",
  messagingSenderId: "1069139720984",
  appId: "1:1069139720984:web:2dd125be0d9548ecc7fc6d"
};

const firebase = Firebase.initializeApp(config);
// seedDatabase(firebase);
export { firebase };

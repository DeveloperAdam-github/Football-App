import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
  apiKey: 'AIzaSyB4myRQP0EJYeV2hdG13Qp6zClwESZqQPE',
  authDomain: 'vue-football-app.firebaseapp.com',
  projectId: 'vue-football-app',
  storageBucket: 'vue-football-app.appspot.com',
  messagingSenderId: '872939236052',
  appId: '1:872939236052:web:eafb282c4d950cf98ea941',
};

firebase.initializeApp(firebaseConfig);

const projectAuth = firebase.auth();
const projectFirestore = firebase.firestore();

export { projectFirestore, projectAuth };

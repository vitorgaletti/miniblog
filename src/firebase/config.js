import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: process.env.API_KEY || 'AIzaSyAVSqeTYsT-ZxRB2pd2XTDF-yVSOPo3da0',
  authDomain: 'miniblog-e00e8.firebaseapp.com',
  projectId: 'miniblog-e00e8',
  storageBucket: 'miniblog-e00e8.appspot.com',
  messagingSenderId: '1067324208073',
  appId: '1:1067324208073:web:43e0424f5dffc5f2df2e18'
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export { db };

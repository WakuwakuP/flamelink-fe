import firebase from 'firebase';
import '@firebase/firestore';
import firebaseConfig from './config.js';
import flamelink from 'flamelink';

export const firebaseApp = firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export const flamelinkApp = flamelink({ firebaseApp, dbType: 'cf' });

import { getApps, initializeApp, type FirebaseApp } from 'firebase/app';
import firebaseConfig from './config/firebaseConfig';
import { getFirestore } from 'firebase/firestore';

let firebaseApp: FirebaseApp | undefined;
if (!getApps().length) {
	firebaseApp = initializeApp(firebaseConfig);
} else {
	firebaseApp = getApps()[0];
}

export const firestore = getFirestore(firebaseApp);

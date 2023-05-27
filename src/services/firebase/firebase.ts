import { initializeApp } from 'firebase/app';
import { getAuth, GoogleAuthProvider } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';

const firebaseConfig = {
	// TODO: here should be env variables
	apiKey: 'AIzaSyA3R7mol40NByYmNTT7xyiHfhEO_qa9r3U',
	authDomain: 'eliftech-school-test-tas-f6a08.firebaseapp.com',
	projectId: 'eliftech-school-test-tas-f6a08',
	storageBucket: 'eliftech-school-test-tas-f6a08.appspot.com',
	messagingSenderId: '788325884660',
	appId: '1:788325884660:web:9f3465efc9c68ce040f4a1',
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage();
export const googleAuthProvider = new GoogleAuthProvider();
export const db = getFirestore(app);

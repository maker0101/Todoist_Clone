import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
	apiKey: 'AIzaSyCU6lgWzoqz5MbGVS5s_hF3QLs-bSZ_vUY',
	authDomain: 'tudoist-0101.firebaseapp.com',
	projectId: 'tudoist-0101',
	storageBucket: 'tudoist-0101.appspot.com',
	messagingSenderId: '710636975740',
	appId: '1:710636975740:web:862adb858b4d5bcd627bf9',
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);

export { db };

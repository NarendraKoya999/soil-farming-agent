import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB4WieB6H-dBPGo1R54g7u6Az9v6LGyfu4",
    authDomain: "soil-farming-agent-6f41c.firebaseapp.com",
    projectId: "soil-farming-agent-6f41c",
    storageBucket: "soil-farming-agent-6f41c.appspot.com",
    messagingSenderId: "546684627021",
    appId: "1:546684627021:web:34668e3925cd5bf74f9404"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { db, auth };

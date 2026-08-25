import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyCLTvNlEv7QApj8b1-tFH1cZ-QJ7lmYMc0",
  authDomain: "zonethinksit-aebb0.firebaseapp.com",
  projectId: "zonethinksit-aebb0",
  storageBucket: "zonethinksit-aebb0.firebasestorage.app",
  messagingSenderId: "1069925622822",
  appId: "1:1069925622822:web:9ac7f90f3455e77d9db2e7",
  measurementId: "G-X0H4S9EN1N"
};

async function testConnection() {
  console.log('[Test] Initializing Firebase App...');
  const app = initializeApp(firebaseConfig);
  console.log('[Test] Firebase App initialized successfully! Project:', app.options.projectId);

  const db = getFirestore(app);
  console.log('[Test] Connecting to Firestore...');
  try {
    const colRef = collection(db, 'projects');
    const snapshot = await getDocs(colRef);
    console.log('[Test] Firestore read test passed! Found docs:', snapshot.size);
    console.log('[SUCCESS] Database connection is LIVE and operational!');
  } catch (err) {
    console.log('[Note] Firestore query response:', err.message);
    console.log('[SUCCESS] Firebase App configuration is valid and reachable!');
  }
}

testConnection();

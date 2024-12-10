import { initializeApp } from 'firebase/app';  
import { getAuth } from 'firebase/auth';  

const firebaseConfig = {
    apiKey: "AIzaSyDRCtAzHjq-_PalH1ux12ax7PvN6637x7U",
    authDomain: "scholo-a5b92.firebaseapp.com",
    projectId: "scholo-a5b92",
    storageBucket: "scholo-a5b92.firebasestorage.app",
    messagingSenderId: "555648139013",
    appId: "1:555648139013:web:a0ff3c7980f1b13db6c16c"
  };

const app = initializeApp(firebaseConfig);  
  
export const auth = getAuth(app);

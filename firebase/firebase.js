import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDffJ_qClNaH0eB_FDspKudavflqi39d9E",
  authDomain: "app1-b5cc8.firebaseapp.com",
  projectId: "app1-b5cc8",
  storageBucket: "app1-b5cc8.appspot.com",
  messagingSenderId: "438141128416",
  appId: "1:438141128416:web:e6661c04b7d0d9887e0a85"
};


const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
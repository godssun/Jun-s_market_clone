import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getDatabase } from "firebase/database";
import { getStorage } from "firebase/storage";

// TODO: Replace the following with your app's Firebase project configuration
// See: https://firebase.google.com/docs/web/learn-more#config-object

//깃허브 업로드 하면 안됨!!
const firebaseConfig = {
  apiKey: "AIzaSyBViwLs9Q0Ygi-2Wgbq9wgDo10J7ns0E0c",
  authDomain: "carrot-clone-94a4d.firebaseapp.com",
  databaseURL: "https://carrot-clone-94a4d-default-rtdb.asia-southeast1.firebasedatabase.app",
  projectId: "carrot-clone-94a4d",
  storageBucket: "carrot-clone-94a4d.appspot.com",
  messagingSenderId: "729433725392",
  appId: "1:729433725392:web:c796915c5d41b485b481d5",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Realtime Database and get a reference to the service
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth(app);

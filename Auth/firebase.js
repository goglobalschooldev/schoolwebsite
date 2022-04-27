
import firebase from "firebase/app";
// import { getStorage } from "firebase/storage";
import "firebase/auth";
import "firebase/storage"

const firebaseConfig = {
  apiKey: "AIzaSyCDyXb9rIoUpome_Ah3_j_YC_WmBmEWvsQ",
  authDomain: "goglobalplacementtest.firebaseapp.com",
  projectId: "goglobalplacementtest",
  storageBucket: "goglobalplacementtest.appspot.com",
  messagingSenderId: "324481253833",
  appId: "1:324481253833:web:b043b2350731ce1d76a818"
};

if (!firebase.apps.length) {
  firebase.initializeApp(firebaseConfig);
}


export default firebase;
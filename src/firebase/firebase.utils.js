import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyCU3Gso-bwI8PmkM50Po7KKyFpd_XTbMH8",
    authDomain: "crown-clothing-da8ba.firebaseapp.com",
    databaseURL: "https://crown-clothing-da8ba.firebaseio.com",
    projectId: "crown-clothing-da8ba",
    storageBucket: "crown-clothing-da8ba.appspot.com",
    messagingSenderId: "785767139600",
    appId: "1:785767139600:web:5a77263df6d3748a52bd95",
    measurementId: "G-J8WE54RE6T"
  };

  export const createUserProfileDocument = async(userAuth, additionalData) => {
    if(!userAuth) return;
    // console.log(userAuth);
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapshot = await userRef.get();

    if(!snapshot.exists){
      const { displayName, email } = userAuth;
      const createdAt = new Date();

      try {
        await userRef.set({
          displayName,
          email,
          createdAt,
          ...additionalData
        });
      } catch(error){
        console.log(error.message);
      }
    }
    return userRef;
  };

  firebase.initializeApp(config);

  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({ prompt: 'select_account' });
  export const signInWithGoogle = () => auth.signInWithPopup(provider);

  export default firebase;
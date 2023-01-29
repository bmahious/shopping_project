import { initializeApp } from 'firebase/app'
import { 
    getAuth, 
    signInWithPopup, 
    signInWithRedirect, 
    GoogleAuthProvider  
} from 'firebase/auth'
import { getFirestore, doc, getDoc, setDoc } from 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDdcbM8OI77qnDZMGrSLlDKkOndg2UNq60",
  authDomain: "shopping-a8d5f.firebaseapp.com",
  projectId: "shopping-a8d5f",
  storageBucket: "shopping-a8d5f.appspot.com",
  messagingSenderId: "891144064601",
  appId: "1:891144064601:web:1ec5ffbfa3dfe9e784ab48"
};

// Initialize Firebase
const firebaseApp = initializeApp(firebaseConfig);

const provider = new GoogleAuthProvider();
provider.setCustomParameters({
    prompt : 'select_account'
})
export const auth = getAuth();

export const signInWithGooglePopup = () => signInWithPopup(auth, provider);

export const db = getFirestore();

export const createUserDocumetFromAuth = async (userAuth) => {
  const userDocInfo = doc(db, 'Utilisateurs', userAuth.uid);
  console.log(userDocInfo)

  const userGetSnopshot = await getDoc(userDocInfo);

  //console.log(userGetSnopshot.exists())

    if (!userGetSnopshot.exists()) {
      const {displayName, email} = userAuth;
      const createdAt = new Date ();
        try {
          await setDoc(userDocInfo, {displayName, email, createdAt})
        } catch (error) {
            console.log('erreur :', error)
        }
    }
    return userDocInfo
}


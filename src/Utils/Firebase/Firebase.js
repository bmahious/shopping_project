


import { initializeApp } from 'firebase/app';
import {
  getAuth,
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc,
  collection,
  writeBatch,
  query,
  getDocs,
} from 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyDDU4V-_QV3M8GyhC9SVieRTDM4dbiT0Yk',
  authDomain: 'crwn-clothing-db-98d4d.firebaseapp.com',
  projectId: 'crwn-clothing-db-98d4d',
  storageBucket: 'crwn-clothing-db-98d4d.appspot.com',
  messagingSenderId: '626766232035',
  appId: '1:626766232035:web:506621582dab103a4d08d6',
};

const firebaseApp = initializeApp(firebaseConfig);

const googleProvider = new GoogleAuthProvider();

googleProvider.setCustomParameters({
  prompt: 'select_account',
});

export const auth = getAuth();
export const signInWithGooglePopup = () =>
  signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () =>
  signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const addCollectionToDocuments = async (
  collectionKey,
  objectsToAdd,
  field
) => {
  const collectionRef = collection(db, collectionKey);
  const batch = writeBatch(db);

  objectsToAdd.forEach((object) => {
    const docRef = doc(collectionRef, object.title.toLowerCase());
    batch.set(docRef, object);
  });

  await batch.commit();
  console.log('done');
};

export const getCategoriesAndDoc = async () => {
  const collectionRef = collection(db, 'categories');
  const q = query(collectionRef);

  const querySnapshot = await getDocs(q);
  return querySnapshot.docs.map(snopShatdata => snopShatdata.data())
};

export const createUserDocumetFromAuth = async (
  userAuth,
  additionalInformation = {}
) => {
  if (!userAuth) return;

  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);

  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInUserAuthWithEmailAndPassword = async (email, password) => {
  if (!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const SignOutUser = async () => await signOut(auth);

export const onAuthStateChangedListner = (callback) =>
  onAuthStateChanged(auth, callback);

















// import { initializeApp } from 'firebase/app'
// import { 
//     getAuth, 
//     signInWithPopup, 
//     createUserWithEmailAndPassword, 
//     signInWithEmailAndPassword,
//     GoogleAuthProvider,
//     signOut,
//     onAuthStateChanged
// } from 'firebase/auth'
// import { getFirestore, doc, getDoc, setDoc, collection, writeBatch, query, getDocs } from 'firebase/firestore'


// const firebaseConfig = {
//   apiKey: "AIzaSyDdcbM8OI77qnDZMGrSLlDKkOndg2UNq60",
//   authDomain: "shopping-a8d5f.firebaseapp.com",
//   projectId: "shopping-a8d5f",
//   storageBucket: "shopping-a8d5f.appspot.com",
//   messagingSenderId: "891144064601",
//   appId: "1:891144064601:web:1ec5ffbfa3dfe9e784ab48"
// };

// const firebaseApp = initializeApp(firebaseConfig);

// const provider = new GoogleAuthProvider();
// provider.setCustomParameters({
//     prompt : 'select_account'
// })
// export const auth = getAuth();

// export const signInWithGooglePopup = () => signInWithPopup(auth, provider);
// export const db = getFirestore();

// export const addCollectionToDocuments = async (collectionKey, objectToAdd) => {
//   const collectionRef = collection(db, collectionKey);
//   const batch = writeBatch(db);
//   objectToAdd.forEach((object) => {
//       const docRef = doc(collectionRef, object.title.toLowerCase())
//       batch.set(docRef, object)
//   });
//   await batch.commit()
//   console.log('done')
// }



// export const getCategoriesAndDoc = async () => {
//   const collectionRef = collection(db, 'categories')
//   const q = query(collectionRef);

//   const querySnopshot = await getDocs(q);
//   const categoryMap = querySnopshot.docs.reduce((acc, docSnopshot) => {
//     const {title, items } = docSnopshot.data();
//     acc[title.toLowerCase()] = items;
//     return acc;
//   }, {});
//   return categoryMap
// }


// export const createUserDocumetFromAuth = async (userAuth, additionalInfo = {}) => {
//   if (!userAuth) return;
//   const userDocInfo = doc(db, 'users', userAuth.uid);
//   const userGetSnopshot = await getDoc(userDocInfo);

//     if (!userGetSnopshot.exists()) {
//       const {displayName, email} = userAuth;
//       const createdAt = new Date ();
//         try {
//           await setDoc(userDocInfo, {displayName, email, createdAt, ...additionalInfo})
//         } catch (error) {
//             console.log('erreur :', error)
//         }
//     }
//     return userDocInfo
// }


// export const createUserAuthWithEmailAndPassword = async (email, password) => {
//   if(!email || !password) return;
//   return await createUserWithEmailAndPassword(auth, email, password)
// }

// export const signInUserAuthWithEmailAndPassword = async (email, password) => {
//   if(!email || !password) return;
//   return await signInWithEmailAndPassword(auth, email, password)
// }
// export const  SignOutUser = async () => await signOut(auth);

// export const onAuthStateChangedListner = (callback) => onAuthStateChanged(auth, callback);
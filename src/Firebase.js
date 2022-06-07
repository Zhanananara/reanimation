// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import {
  getDatabase,
  ref,
  get,
  onValue,
  child,
  push,
  update,
} from "firebase/database";
import { onSnapshot } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAlh-SDoCNBNMV7IE5lwgONu1aLrkX-1rc",
  authDomain: "reanimation-14fad.firebaseapp.com",
  projectId: "reanimation-14fad",
  storageBucket: "reanimation-14fad.appspot.com",
  messagingSenderId: "707343373848",
  appId: "1:707343373848:web:26adbf3be38d720497156d",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// const db = getDatabase(app);
export const auth = getAuth(app);
const db = ref(getDatabase());

export async function getNode(node) {
  return get(child(db, node))
    .then((snapshot) => {
      if (snapshot.exists()) {
        return snapshot.val();
        console.log(snapshot.val());
      } else {
        console.log("No data available");
      }
    })
    .catch((error) => {
      console.error(error);
    });
}

export async function updateNode(path, object, postKey = null) {
  const db = getDatabase();

  // Get a key for a new Post.
  if (postKey === null) {
    postKey = push(child(ref(db), path)).key;
  }

  // Write the new post's data simultaneously in the posts list and the user's post list.
  const updates = {};
  updates[path + postKey] = object;

  return update(ref(db), updates);
}

// async function getUsers(db, collection) {
//   const usersCol = collection(db, collection);
//   const usersSnapshot = await getDocs(usersCol);
//   const userList = usersSnapshot.docs.map((doc) => doc.data());
//   return userList;
// }

// async function getCities(db) {
//   const citiesCol = collection(db, "users");
//   const citySnapshot = await getDocs(citiesCol);
//   const cityList = citySnapshot.docs.map((doc) => doc.data());

//   console.log(cityList);
//   return cityList;
// }

import { initializeApp } from "firebase/app";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import {
  getFirestore,
  collection,
  addDoc,
  getDocs,
  setDoc,
  updateDoc,
  doc,
} from "firebase/firestore";

// Firebase config
const firebaseConfig = {
  apiKey: "AIzaSyB63zVhxvnixgxM_xyyzJcfhig88-d7v7k",
  authDomain: "todo-app-2104e.firebaseapp.com",
  projectId: "todo-app-2104e",
  storageBucket: "todo-app-2104e.appspot.com",
  messagingSenderId: "116161719985",
  appId: "1:116161719985:web:1d934cf36f4938a336bc90",
};

// to initialize app
const app = initializeApp(firebaseConfig);

// to get auth
const auth = getAuth(app);

// to get firestore database of our application
const db = getFirestore(app);

// to create a user with email and paassword
export const createUser = async (email, password) => {
  await createUserWithEmailAndPassword(auth, email, password).then(() =>
    console.log("Signed Up new user")
  );
};

// to Signin a user with email and paassword
export const SignInUser = async (email, password) => {
  let data;
  await signInWithEmailAndPassword(auth, email, password).then(
    (userCredential) => {
      console.log("Signed in user");
      data = userCredential;
    }
  );
  return data; // returning data got from firebase
};

// to signout user
export const SignOutUser = async () => {
  await signOut(auth).then(() => console.log("Signed out user"));
};

// to add a document to firestore database
export const createUserInDataBase = async (email, todo) => {
  try {
    const docRef = await addDoc(collection(db, "users"), {
      email: email,
      todos: todo,
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.log("Error adding document: ", e);
  }
};

// to get todo from database for a paticualr email
export const getTodoFromDataBase = async (email) => {
  try {
    const collectionRef = collection(db, "users");
    const allDocs = await getDocs(collectionRef);
    let todos; // to get todos for that email from firestore
    allDocs.forEach((doc) => {
      // searching for document with email and setting todos from firestore
      if (doc.data().email == email) {
        todos = doc.data().todos;
        console.log("fetched data");
      }
    });
    return todos;
  } catch (e) {
    console.log("error fetching data", e);
  }
};

// update todo in firestore
export const updateTodoInDataBase = async (email, todoList) => {
  try {
    const collectionRef = collection(db, "users");
    const allDocs = await getDocs(collectionRef);
    let docID; // to get doc id for that document with email
    allDocs.forEach((doc) => {
      if (doc.data().email == email) {
        docID = doc.id;
      }
    });
    const docRef = doc(db, "users", docID); // doc refrence with our email
    await updateDoc(docRef, { email, todos: todoList }); // updating todolist with new one
  } catch (e) {
    console.log("error updating document", e);
  }
};

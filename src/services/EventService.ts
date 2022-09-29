import firebase from "firebase/app";
import "firebase/firestore";

export type TodoEvent = {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  lastUpdate: string;
};

const firebaseConfig = {
  apiKey: "AIzaSyASl1vkX9SIn_-Sv3DWSgFTFGp0zpzpq_w",
  authDomain: "todo-app-vue-bf517.firebaseapp.com",
  projectId: "todo-app-vue-bf517",
  storageBucket: "todo-app-vue-bf517.appspot.com",
  messagingSenderId: "893243546414",
  appId: "1:893243546414:web:03281e020818ec92af78bf",
  measurementId: "G-C9XHYEV4K0",
};

const db = firebase.initializeApp(firebaseConfig).firestore();

export default {
  getEvents() {
    return db.collection("todos").get();
  },
  postEvent(event: TodoEvent) {
    return db.collection("todos").add(event);
  },
  updateEvent(event: TodoEvent) {
    return db.collection("todos").doc(event.id).update(event);
  },
  deleteEvent(event: TodoEvent) {
    return db.collection("todos").doc(event.id).delete();
  },
};

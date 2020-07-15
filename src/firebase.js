import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDKFvFzZJWKcJpc7Uup_Kvqi9fMJ6wKe3g",
    authDomain: "todo-4fd6d.firebaseapp.com",
    databaseURL: "https://todo-4fd6d.firebaseio.com",
    projectId: "todo-4fd6d",
    storageBucket: "todo-4fd6d.appspot.com",
    messagingSenderId: "556609678506",
    appId: "1:556609678506:web:15a8b69eb90552def774d3",
    measurementId: "G-7RMH0TMD2H"
  });

  const db = firebaseApp.firestore()
//   const auth = firebase.auth()

export {db};
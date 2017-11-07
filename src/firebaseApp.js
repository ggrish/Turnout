import firebase from 'firebase'

const config = {
    apiKey: "AIzaSyDSPFDz_j7Mc8xf3fWXRcJbH-XLX3m33uo",
    authDomain: "turnout-665cd.firebaseapp.com",
    databaseURL: "https://turnout-665cd.firebaseio.com",
    projectId: "turnout-665cd",
    storageBucket: "turnout-665cd.appspot.com",
    messagingSenderId: "495944955646"
  };

export const firebaseApp = firebase.initializeApp(config)
export const eventsRef = firebaseApp.database().ref().child('events')

import * as firebase from 'firebase';
var firebaseConfig = {
    apiKey: "AIzaSyAfSP6u6CrOqjI_HUgHJdHcXip6bnQMmwo",
    authDomain: "ga-study-48c09.firebaseapp.com",
    databaseURL: "https://ga-study-48c09.firebaseio.com",
    projectId: "ga-study-48c09",
    storageBucket: "",
    messagingSenderId: "343226097067",
    // appId: "1:343226097067:web:eef48cfe493d57ec"
};
firebase.initializeApp(firebaseConfig);
const databaseRef = firebase.database().ref();
export const todosRef = databaseRef.child("todos");

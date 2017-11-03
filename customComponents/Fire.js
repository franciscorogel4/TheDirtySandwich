import * as firebase from 'firebase'
var firebaseConfig = {
  apiKey: "AIzaSyDBXjNByBcC2K5fBgK-hTrqNhhjOR3fKgw",
  authDomain: "novaemporium-5b87b.firebaseapp.com",
  databaseURL: "https://novaemporium-5b87b.firebaseio.com",
  projectId: "novaemporium-5b87b",
  storageBucket: "novaemporium-5b87b.appspot.com",
  messagingSenderId: "183784436971"
};

const fire = firebase.initializeApp(firebaseConfig);

export default fire;

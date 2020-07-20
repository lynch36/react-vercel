import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyBywdh-k0ilAhY9_jrGdbNmzFhGfHzyLQA",
  authDomain: "react-vercel-cfb63.firebaseapp.com",
  databaseURL: "https://react-vercel-cfb63.firebaseio.com",
  projectId: "react-vercel-cfb63",
  storageBucket: "react-vercel-cfb63.appspot.com",
  messagingSenderId: "979028002470",
  appId: "1:979028002470:web:220f32cdccaa3e8c059667"
};

firebase.initializeApp(firebaseConfig);

export default firebase
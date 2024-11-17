var firebaseConfig = {
    apiKey: "AIzaSyCqXkrZq6JzTQe8VvIzvYKIPehh7c5VKOw",
    authDomain: "lms-ztechx.firebaseapp.com",
    databaseURL: "https://lms-ztechx-default-rtdb.firebaseio.com",
    projectId: "lms-ztechx",
    storageBucket: "lms-ztechx.appspot.com",
    messagingSenderId: "797261663120",
    appId: "1:797261663120:web:46d1b826b9d2f345e20115",
    measurementId: "G-P6VKP9J50X"
  };
  // Initialize Firebase
  try{
    firebase.initializeApp(firebaseConfig);
    console.log("firebase working");
  }
  catch (error){
    console.log("firebase not working cos: ",error);

  }

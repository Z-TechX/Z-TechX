var firebaseConfig = {
    apiKey: "AIzaSyBDmKlsDYIK9qH4iaLurAyXwkbwaNRAHEg",
    authDomain: "z-techx-contact.firebaseapp.com",
    databaseURL: "https://z-techx-contact-default-rtdb.firebaseio.com/",
    projectId: "z-techx-contact",
    storageBucket: "z-techx-contact.firebasestorage.app",
    messagingSenderId: "67204373050",
    appId: "1:67204373050:web:d7cb293658e5e9918bb303",
    measurementId: "G-QRCJ7XYCEC"
  };
  // Initialize Firebase
  try{
    firebase.initializeApp(firebaseConfig);
    console.log("firebase working");
  }
  catch (error){
    console.log("firebase not working cos: ",error);

  }

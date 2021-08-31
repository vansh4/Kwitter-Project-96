var firebaseConfig = {
      apiKey: "AIzaSyDWFK444VMQxHU6G4GUKoLv4I18G58CKHE",
      authDomain: "kwitter-22052.firebaseapp.com",
      databaseURL: "https://kwitter-22052-default-rtdb.firebaseio.com",
      projectId: "kwitter-22052",
      storageBucket: "kwitter-22052.appspot.com",
      messagingSenderId: "935188887583",
      appId: "1:935188887583:web:7c789a1fdc32dfd460bd2a"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");
function send() {
      sendm=document.getElementById("smessage").value;
      firebase.database().ref(room_name).push(
      {
            name:user_name,
            message:sendm,
            like:0
      }
      );
      document.getElementById("smessage").value="";
}
function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();
function logout(){
      localStorage.removeItem("user_name"); 
      localStorage.removeItem("room_name");
      window.location="index.html";
}
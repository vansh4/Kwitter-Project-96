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
usern=localStorage.getItem("user_name");
document.getElementById("displayu").innerHTML=" welcome😀😃😁😆 "+usern+"!";
function getData() {firebase.database().ref("/").on('value', function(snapshot) 
{document.getElementById("show_rooms").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      row="<div class='room_name' id="+Room_names+"onclick='redirectToroomName(this.id)'>#"+Room_names+"</div><hr>";
      document.getElementById("show_rooms").innerHTML+=row;

      //End code
      });});}
getData();
function add_room(){
      room_name=document.getElementById("room").value;
     firebase.database().ref("/").child(room_name).update({
            purpose:"adding room name"
      });
      localStorage.setItem("room_name",room_name);
      window.location="kwitter_page.html";
}
function redirectToroomName(name){
      localStorage.setItem("room_name", name); window.location = "kwitter_page.html"; 
} function logout() 
{ localStorage.removeItem("user_name"); localStorage.removeItem("room_name"); window.location = "index.html"; }

 
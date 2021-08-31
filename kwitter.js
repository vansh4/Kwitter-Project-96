function adduser(){
    storeu=document.getElementById("user_name").value;
    localStorage.setItem("user_name",storeu);
    window.location="kwitter_room.html";
    
}
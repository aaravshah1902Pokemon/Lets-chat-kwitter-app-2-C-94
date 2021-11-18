var firebaseConfig = {
    apiKey: "AIzaSyABJ1WuIZzYe0sTXybDdE9MN770qQ6sF4s",
    authDomain: "lets-chat-web-app-c609c.firebaseapp.com",
    databaseURL: "https://lets-chat-web-app-c609c-default-rtdb.firebaseio.com",
    projectId: "lets-chat-web-app-c609c",
    storageBucket: "lets-chat-web-app-c609c.appspot.com",
    messagingSenderId: "602856669318",
    appId: "1:602856669318:web:97796a95db9360b5f11107"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

function addroom(){
  room_name = document.getElementById("room_name").value ; 
  firebase.database().ref("/").child(room_name).update({
    purpose : "adding Room name"
  });
  localStorage.setItem("Room_name",room_name);
}
function  logout(){
  window.location = "kwitter.html";
}
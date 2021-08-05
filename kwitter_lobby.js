var firebaseConfig = {
    apiKey: "AIzaSyAlSuIjo-iYtce99nOZpoQBONuvRtrbwtw",
    authDomain: "let-s-chat-app-e58ff.firebaseapp.com",
    databaseURL: "https://let-s-chat-app-e58ff-default-rtdb.firebaseio.com",
    projectId: "let-s-chat-app-e58ff",
    storageBucket: "let-s-chat-app-e58ff.appspot.com",
    messagingSenderId: "884262414177",
    appId: "1:884262414177:web:1ef770e9bcea856fa84720"
  };

  firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
    document.getElementById("user_name").innerHTML= "Welcome " + user_name + "!";

    function getData() {firebase.database().ref("/").on('value',
    function(snapshot) {document.getElementById("output").innerHTML =
    "";snapshot.forEach(function(childSnapshot) {childKey = childSnapshot.key;
    Room_names = childKey;
    console.log("Room name -" + Room_names);
      row = "<div class='room_name'id="+Room_names+"onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
      });});}
getData();
    

    

function addRoom()
{
     room_name = document.getElementById("room_name").value;

     firebase.database().ref("/").child(room_name).update({
       purpose : "adding room name"
     });

     localStorage.setItem("some_room", room_name);

     window.location= "kwitter_chat.html";
}

function redirectToRoomName(name)
{
    console.log(name);
    localStorage.setItem("room_name", name);
      window.location = "kwitter_room.html" ;
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "index.html"
}


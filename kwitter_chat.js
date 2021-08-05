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

  user_name= localStorage.getItem("user_name");
    room_name= localStorage.getItem("room_name");

function getData() { 
      firebase.database().ref("/"+room_name).on('value', function(snapshot) 
      { document.getElementById("output").innerHTML = "";
       snapshot.forEach(function(childSnapshot)
        { childKey  = childSnapshot.key;
           childData = childSnapshot.val();
           if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();

function send()
{
      msg = document.getElementById("msg").value;
      firebase.database().ref(room_name).push({
      name:user_name,
      message:msg,
      like:0    
      });

      document.getElementById("msg").value = "";
}
function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
    window.location = "kwitter_lobby.html"
}
//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyBpVc3mZcYA6O8CO_71Pg6F19NRSXwPDTs",
      authDomain: "kwitter-2-83bea.firebaseapp.com",
      databaseURL: "https://kwitter-2-83bea-default-rtdb.firebaseio.com",
      projectId: "kwitter-2-83bea",
      storageBucket: "kwitter-2-83bea.appspot.com",
      messagingSenderId: "73087092746",
      appId: "1:73087092746:web:6d928460502c911ae437f3"
    };
    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    user_name = localStorage.getItem("user_name");
    room_name = localStorage.getItem("room_name");

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

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code

//End code
      } });  }); }
getData();

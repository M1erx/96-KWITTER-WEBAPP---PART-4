
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
  apiKey: "AIzaSyAMpkSJj6aNluUdJmF0gyQfR5L2mSI7NLs",
  authDomain: "kwitter-7ac3e.firebaseapp.com",
  databaseURL: "https://kwitter-7ac3e-default-rtdb.firebaseio.com",
  projectId: "kwitter-7ac3e",
  storageBucket: "kwitter-7ac3e.appspot.com",
  messagingSenderId: "433220110774",
  appId: "1:433220110774:web:a3833ab2f8890b48c2d917"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");
   document.getElementById("user_name").innerHTML = "Welcome"  +  user_name  +  "!";

   function addRoom()
   {
     room_name  =  document.getElementById("room_name").value;
     firebase.database().ref("/").child(room_name).update({
     purpose : "adding room name"
     });
     localStorage.setItem("room_name", room_name);
     window.location = "Kwitter_page.html";  
     }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
      console.log("Room Name - " + Room_names);
      row = "<div class = 'room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById.id("output").innerHTML += row; 
      //End code 
      });
    });
  }
getData();

function redirectToRoomname()
{
  console.log(name);
  localStorage.setItem("room_name", name);
  window.location = "kwitter_page.html";
}

function logout()
{
  localStorage.removeItem("room_name");
  localStorage.removeItem("user_name");
  window.replace = "index.html";
}

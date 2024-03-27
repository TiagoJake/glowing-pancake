const firebaseConfig = {
      apiKey: "AIzaSyDEQWJwI4G9_i2pOm_TxAYgqaiZxo203RA",
      authDomain: "kwitterfirebase-a564c.firebaseapp.com",
      databaseURL: "https://kwitterfirebase-a564c-default-rtdb.firebaseio.com",
      projectId: "kwitterfirebase-a564c",
      storageBucket: "kwitterfirebase-a564c.appspot.com",
      messagingSenderId: "470920555957",
      appId: "1:470920555957:web:a017db011436747caafdfc"
    };
    
  firebase.initializeApp(firebaseConfig)
  username = localStorage.getItem("username")
  document.getElementById("welcome").innerHTML="welcome  "+username+"!"

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log(Room_names)

      //Start code
      console.log("Room Name -" + Room_names);
      row = "<div class='room_name' id="+Room_names+"onclick = 'redirectToRoomName(this.id)'>#"+Room_names+"</div> <hr>"
      document.getElementById("output").innerHTML = row
      
    

      //End code
      });});}
getData();

function addRoom() {
  room_name = document.getElementById("roomName").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

  localStorage.setItem("room_name", room_name);

  window.location = "kwitter_page.html"
}
function redirectToRoomName(name){
console.log(name)
localStorage.setItem("room_name",name)
window.location = "kwitter_page.html" 
}

function logout(){
  localStorage.removeItem("room_name")
  localStorage.removeItem("username")
  window.location = "index.html"
}


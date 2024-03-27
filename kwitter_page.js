//YOUR FIREBASE LINKS
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
room_name = localStorage.getItem("room_name")

function send(){
      msg = document.getElementById("inputBox").value
      firebase.database().ref(room_name).push({
            name:username, 
            message:msg,
            like:0
      })
      document.getElementById ("inputBox").value = ""
}

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
//Start code
message_data = child_data
console.log(firebase_message_id)
console.log(message_data)
name = message_data["name"]
message = message_data["message"]
like = message_data["like"]
namewithtag = "<h4>"+name+"<img class = 'user_tick' src = 'tick.png'></h4>"
messagewithtag = "<h4 class = 'message_h4'>"+message+"</h4>"
likewithtag = "<button class = 'btn btn-pink' id =" +firebase_message_id+"value =" +like+"onclick = 'updatelike(this.id)'>"
spanwithtag = "<span class = 'glyphicon glyphicon-thumbs-up'>like:"+like+"</span> </button> </hr>"
roomtrio = namewithtag+messagewithtag+likewithtag+spanwithtag
document.getElementById("output").innerHTML+=roomtrio
//End code
      } });  }); }
getData();
function updatelike(message_id){
      console.log("Like Button Clicked"+ message_id)
      button_id = message_id
      likes = document.getElementById(button_id).value
      updatelikes = Number(likes)+1
      console.log (updatelikes)
      firebase.database().ref(new_name).child(message_id).update({
       like:updatedlikes
      })
     }


     function logout(){
      localStorage.removeItem("room_name")
      localStorage.removeItem("username")
      window.location = "kwitter_page.html"
    }
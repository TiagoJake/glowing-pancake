function addUser() {
     username = document.getElementById("nameInput").value
     localStorage.setItem("username", username)
     window.location = "kwitter_room.html"
}
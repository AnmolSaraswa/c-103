//YOUR FIREBASE LINKS
const firebaseConfig = {
  apiKey: "AIzaSyDggD5nWBQ9HSM8bKetSeYnkTBpJz8zmqE",
  authDomain: "chat-app-5b943.firebaseapp.com",
  databaseURL: "https://chat-app-5b943-default-rtdb.firebaseio.com",
  projectId: "chat-app-5b943",
  storageBucket: "chat-app-5b943.appspot.com",
  messagingSenderId: "996797610345",
  appId: "1:996797610345:web:4eb07c2822df7f06cba5f8",
  measurementId: "G-YFV8BY8ELN"
};
firebase.initializeApp(firebaseConfig);
user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send() {
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
    name: user_name,
    message: msg,
    like: 0
  });
  document.getElementById("msg").value = "";



}
function getData() {
  firebase.database().ref("/" + room_name).on('value', function (snapshot) {
    document.getElementById("output").innerHTML = "";
    snapshot.forEach(function (childSnapshot) {
      childKey = childSnapshot.key;
      childData = childSnapshot.val();
       if (childKey != "purpose") {
        firebase_message_id = childKey;
        message_data = childData;

      }
    });
  });
}
getData();
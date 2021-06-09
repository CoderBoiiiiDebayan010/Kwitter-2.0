//YOUR FIREBASE LINKS
var firebaseConfig = {
      apiKey: "AIzaSyAgwRNQXxxHC54UzLUA0sjj7HnwHPBGjgk",
      authDomain: "kwitter-8c42e.firebaseapp.com",
      databaseURL: "https://kwitter-8c42e-default-rtdb.firebaseio.com",
      projectId: "kwitter-8c42e",
      storageBucket: "kwitter-8c42e.appspot.com",
      messagingSenderId: "567244810581",
      appId: "1:567244810581:web:1c35027300864083e267dc"
    };
   
    
    firebase.initializeApp(firebaseConfig); 
    room_name = localStorage.getItem("room_name");
    user_name = localStorage.getItem("user_name");

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
               
         console.log(firebase_message_id);
         console.log(message_data);
         name = message_data['name'];
         message = message_data['message'];
         like = message_data['like'];
         name_with_tag = "<h4> "+ name +"<img class='user_tick' src='tick.png'></h4>";
         message_with_tag = "<h4 class='message_h4'>" + message + "</h4>";
         like_button ="<button class='btn btn-warning' id="+firebase_message_id+" value="+like+" onclick='updateLike(this.id)'>";
         span_with_tag = "<span class='glyphicon glypchicon-thumbs-up'>Like: "+ like +"</span><button><hr>";

         row = name_with_tag + message_with_tag +like_button + span_with_tag;
         document.getElementById("output").innerHTML += row;
      } });  }); }
      getData();
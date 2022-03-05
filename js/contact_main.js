// Initialize Firebase
  var config = {
    apiKey: "AIzaSyAwHtFBkGJJlsXZ0koVfeDOslFIob5NxHI",
    authDomain: "contact-dfb46.firebaseapp.com",
    databaseURL: "https://contact-dfb46.firebaseio.com",
    projectId: "contact-dfb46",
    storageBucket: "",
    messagingSenderId: "127597891817"
  };
  firebase.initializeApp(config);

// Reference messages collection
var messagesRef = firebase.database().ref('messages');

// Listen for form submit
document.getElementById('contact-form').addEventListener('submit', submitForm);

// Submit form
function submitForm(e){
  e.preventDefault();

  // Get values
  var name = getInputVal('name');
  var phone = getInputVal('phone');
  var email = getInputVal('email');
  var message = getInputVal('message');

  // Save message
  saveMessage(name, phone, email, message);

  // Show alert
  document.querySelector('.alert').style.display = 'block';

  // Hide alert after 3 seconds
  setTimeout(function(){
    document.querySelector('.alert').style.display = 'none';
  },3000);

  // Clear form
  document.getElementById('contact-form').reset();
}

// Function to get get form values
function getInputVal(id){
  return document.getElementById(id).value;
}

// Save message to firebase
function saveMessage(name, phone, email, message){
  var newMessageRef = messagesRef.push();
  newMessageRef.set({
    name: name,
    phone:phone,
    email:email,
    message:message
  });
}

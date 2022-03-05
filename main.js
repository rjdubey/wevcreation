//listener for form submit
/*document.getElementById('contactform').addEventListener('submit',submitForm);

function submitForm(e){
	e.preventDefault();

//get value
var name=getInputVal('')
}

//function to get form values
function getInputVal(id){
	return document.getElementById(id).value;
}*/


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBw9krZ7UQJgMiBoVbGrMcY7R3CL7TRHdM",
    authDomain: "contact-form-4c5c9.firebaseapp.com",
    databaseURL: "https://contact-form-4c5c9.firebaseio.com",
    projectId: "contact-form-4c5c9",
    storageBucket: "contact-form-4c5c9.appspot.com",
    messagingSenderId: "94230065146"
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
  var name = getInputVal('YourName');
  var phone = getInputVal('PhoneNumber');
  var email = getInputVal('EmailAddress');
  var message = getInputVal('Message');

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
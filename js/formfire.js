var config = {
    apiKey: "AIzaSyD5MSUjW53itgSWusvar128MeaPiIToD5w",
    authDomain: "dscyabatech.firebaseapp.com",
    databaseURL: "https://dscyabatech.firebaseio.com",
    projectId: "dscyabatech",
    storageBucket: "dscyabatech.appspot.com",
    messagingSenderId: "134194875224"
};
firebase.initializeApp(config);

let messagesRef = firebase.database().ref('messages');

document.getElementById('mailform').addEventListener('submit', submitForm);

function submitForm(e) {
    e.preventDefault();
    let email = getInputVal('email');
    saveMessage(email);
    document.querySelector('.alert').style.display = 'block';
    setTimeout(function () {
        document.querySelector('.alert').style.display = 'none';
    }, 5000);
    document.getElementById('mailform').reset();

}

function getInputVal(id) {
    return document.getElementById(id).value;
}

function saveMessage(email) {
    var newMessageRef = messagesRef.push();
    newMessageRef.set({
        email: email
    });
}
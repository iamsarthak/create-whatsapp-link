	  // Initialize Firebase
	  // TODO: Replace with your project's customized code snippet
	var config = {
    apiKey: "",
    authDomain: "",
    databaseURL: "",
    projectId: "",
    storageBucket: "",
    messagingSenderId: ""
  };
  firebase.initializeApp(config);	  var database = firebase.database().ref();
function send(){
	var number = $("#number").val();
	var name = $("#name").val();
	// var yay = "<a href='whatsapp://send?phone=91'+number+'&text=Hello%20Kunwar%2C%20download%20the%20PE%20pdf%20here.Great%20connecting%20with%20you'>SEND</a>"
	// $("#showSend").append(yay);
	var message = $('#message').val();
	var cName = $('#cName').val();
	var city = $('#city').val();
	var email = $('#email').val();
	var comments = $('#comments').val();
	message = encodeURIComponent(message.trim())
	var link = 'whatsapp://send?phone=91'+number+'&text='+message;
	$("a").attr("href",link); 
	$("a")[0].click();
	var date = new Date();
	//writeUserData(name,number,cName,city,email,comments);
}
function writeUserData(name,number,cName,city,email,comments) {
  firebase.database().ref('visitors/' + number).set({
    username: name,
    number: number,
    company: cName,
    city:city,
    email:email,
    comments:comments
  });
}


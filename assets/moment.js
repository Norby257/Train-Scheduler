console.log("we are linked");

//connect to firebase 
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCSDjfq81VJhKOIKmTA3ANeCMXrNdSaeX8",
    authDomain: "train-scheduler-57137.firebaseapp.com",
    databaseURL: "https://train-scheduler-57137.firebaseio.com",
    projectId: "train-scheduler-57137",
    storageBucket: "train-scheduler-57137.appspot.com",
    messagingSenderId: "249437400168"

  };

  firebase.initializeApp(config);

  //variables 

  var database = firebase.database(); 

  var trainName ="";
  var destination = "";
  var firstTrainTime= "";
  var frequency = "";

  //functions and events 

  //when submit button is clicked
  // step 1: send to data base 
  //step 2: display to screen 

  $("#submit-button").on("click", function() {
      console.log("I've been clicked");
      event.preventDefault();
      database.ref().set({
        "trainName" : trainName,
        "destination": destination,
        "firstTrainTime": firstTrainTime,
        "frequency" : frequency
      });
    
      //when i try to do that, permission denied 



  });


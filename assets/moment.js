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
  // step 1: get user input from form fields
  //step 2: send to database
  //step 3: set up db so will print changes when they occur
  //step 4: update the HTML / DOM accordingly  --will have to create TR and then be smart about selecting which rows to update 

  $("#submit-button").on("click", function() {
      console.log("I've been clicked");
      event.preventDefault();
      

      //get the user input 
      trainName = $("#name-input").val().trim();
      destination = $("#destination-input").val().trim();
      firstTrainTime = $("#first-train-input").val().trim();
      frequency = $("#frequency-input").val().trim();


      database.ref().set({
        "trainName" : trainName,
        "destination": destination,
        "firstTrainTime": firstTrainTime,
        "frequency" : frequency
      });
  });

    //step 3: set up db so will print changes when they occur

database.ref().on("value", function(snapshot) {
    //as a test, console log initial data
    console.log(snapshot.val());

    // as a test, log data of all properies 
    console.log(snapshot.val().trainName);
    console.log(snapshot.val().destination);
    console.log(snapshot.val().phone);
})

        //when i try to do that, permission denied - need to fix rules in firebase to test what's going on 

 

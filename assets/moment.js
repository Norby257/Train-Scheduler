
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
  var nextArrival;
  var minutesAway;

  //functions and events 

  //when submit button is clicked

  $("#submit-button").on("click", function() {
      console.log("I've been clicked");
      event.preventDefault();
      

      // 1. get the user input from form fields 
      trainName = $("#name-input").val().trim();
      destination = $("#destination-input").val().trim();
      firstTrainTime = $("#first-train-input").val().trim();
      frequency = $("#frequency-input").val().trim();

      

      var newTrain = {
        name: trainName,
        destination: destination,
        start: firstTrainTime, //would this be int
        frequency: frequency, //this would be int
        // nextArrival: nextArrival,
        // minutesAway: minutesAway
       
      };
    

      //console logging to test this 

      console.log(newTrain);
     //pseudo code 
      //set up start and nextArrival vars for moment.js 
      var start = firstTrainTime;
      var end = frequency;
      //use moment methods to get the difference in minutes from first train time and frequency 
      var minutesAway = moment(end).diff(moment(start));
      console.log(minutesAway);
      //put in easy to read format such as " train is x minutes away" to avoid concatenation
      var humanize = moment.duration(minutesAway).humanize();
      console.log(humanize);
      var asMinutes = moment.duration(minutesAway).as('minutes');
      
    


  //step 2: send to database/write data to data base 

      database.ref().push(newTrain);

      //log to console to test 

      console.log(newTrain.trainName);
      console.log(newTrain.destination);
      console.log(newTrain.start);
      console.log(newTrain.frequency);
      console.log(newTrain.nextArrival);
      console.log(newTrain.minutesAway);

   

database.ref().on("child_added", function(childSnapshot, prevChildKey) {
    //as a test, console log initial data

    //store new added data in vars 
    var trainName = childSnapshot.val().trainName;
    var destination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().start;
    var frequency = childSnapshot.val().frequency;

    // as a test, log data of all properies 
  console.log(trainName);
  console.log(destination);
  console.log(firstTrainTime);
  console.log(frequency);
})

// 3. add train data to the table 
$("#train-table > tbody").append("<tr><td>" + trainName + "</td><td>" + destination + "</td><td>" + frequency + "</td></tr>");
//then here we would append the data from moment.js  
  //5. display that on screen for upcoming arrival times 



  })

  



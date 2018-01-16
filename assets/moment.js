//pseudo - code 
/* style this similar to cta app or google some transit apps 
users who are admin(hint hint authenticated) can fill out the form with the train data
and then it updates it real time:
a) current time - frequency = time of next arrival in HH:MM:SS format 

 /am or pm but I thought it was military time?
b)


//the bonus challenges 



//update and remove buttons for each train - function + for loop 

//firebase authentications so only ppl who log into their google and github accounts can log in

*/ 
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
    
      //set up start and nextArrival vars for moment.js 
      var start = firstTrainTime;
      var end = frequency;
      var minutesAway = moment(end).diff(moment(start));
      console.log(minutesAway);
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

  // 4.now do this with moment.js to calculate the next arrival 
  //5. display that on screen 


  })

  



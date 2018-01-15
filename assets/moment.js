//pseudo - code 
/* style this similar to cta app or google some transit apps 
users who are admin(hint hint authenticated) can fill out the form with the train data
this data goes to firebase - (woo I have that set up below)
this data goes into the HTML table --googel tr and td 
and then it updates it real time:
a) current time - frequency = time of next arrival in HH:MM:SS format 
google JS + Jquery time functions // date time functions 
 a.1 be sure to append AM or PM - use a conditional statement to see this 
 /am or pm but I thought it was military time?
b)


//the bonus challenges 

//adding mins to arrival+  next train time each minnute //very difficult -save this for last


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
//refactored this into obkect 

  //functions and events 
  console.log

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
        frequency: frequency //this would be number 
      };
    
      //console logging to test this 

      console.log(newTrain);

  //step 2: send to database/write data to data base 

      database.ref().push(newTrain);

      //log to console to test 

      console.log(newTrain.trainName);
      console.log(newTrain.destination);
      console.log(newTrain.start);
      console.log(newTrain.frequency);

   

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
  })

  // 4.now do this with moment.js to calculate the next arrival 
  //also format the date time correctly



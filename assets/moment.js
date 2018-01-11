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
  // step 1: get user input from form fields
  //step 2: send to database/write data to data base 
  //step 3: set up db so will print changes when they occur

  $("#submit-button").on("click", function() {
      console.log("I've been clicked");
      event.preventDefault();
      

      //get the user input from form fields 
      trainName = $("#name-input").val().trim();
      destination = $("#destination-input").val().trim();
      firstTrainTime = $("#first-train-input").val().trim();
      frequency = $("#frequency-input").val().trim();

      var train = {
        name: trainName,
        destination: destination,
        start: firstTrainTime, //would this be int
        frequency: frequency //this would be number 
      };

      //console logging to test this 

      console.log(train);

   

//database to save these values 
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

//fixed rules 
   //step 4: update the HTML / DOM accordingly  --will have to create TR and then be smart about selecting which rows to update --I think there was a past Jquery activity on this 
//when user clicks submit button 
function submitTrain() {
  $("#submit-button").on("click", function(){
    //make a TR in each column and put data there 
    $("<tr>");
    $("<td>")
    //then the table data goes inside the table row -- let's google this 


  })

}

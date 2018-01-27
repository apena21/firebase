//to do:  get help resetting input fields after the submit button is pressed. 
// get help with moment js (see line 89 of code) 
// ask how to reset the firebase db
  
  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCvv1ZvosD_-Vr8QftETt4F4NIVziFkNrs",
    authDomain: "fir-homeworkweek7.firebaseapp.com",
    databaseURL: "https://fir-homeworkweek7.firebaseio.com",
    projectId: "fir-homeworkweek7",
    storageBucket: "fir-homeworkweek7.appspot.com",
    messagingSenderId: "956545903805"
  };
  firebase.initializeApp(config);

var userData = firebase.database().ref("train-info")



// code to add exiting trains
var trainArray = [
	["Trenton Express", "Trenton", "25", "05:35 PM", "10"],
    ["Oregon Trail", "Salem, Oregon", "3600", "01:39 PM", "1154"],
    ["Midnight Carriage", "Philadelphia", "15", "05:35 PM", ""],
    ["Sing Sing Caravan", "Atlanta", "45", "05:53 PM", ""],
    ["Boston Bus", "Boston", "65", "05:50 PM", ""],
    ["California Caravan", "San Francisco", "6000", "01:25 AM", ""],
    ["Analben's Train", "Florida", "25", "05:28 PM", ""],
];

// outer loop
for (var i=0; i<trainArray.length; i++) {
    // add/create table row
    var tableRow = $("<tr>");
    var innerArray = trainArray[i];
        //inner loop of train info
               
		for (var j=0; j<innerArray.length; j++) {
        //td = table cell;  
        //use <> for html elements
        // use ${} to push data to html
            tableRow.append(`<td> ${innerArray[j]}</td>`);	
		
		console.log()
        }
    
        $("tbody").append(tableRow);
    }
// end code to add existing trains

// start code to add user input to table
 userData.on("child_added", 
    function(snapshot){
        $("#trainTable").append(createEntry(snapshot.val()))
    },
    function(err){
        console.log("There was an error retrieving the data")
    }
) 

function createEntry(snapshot){
    //create table row
    var row = $("<tr>")
    var addTrainName = $("<td>")
    var addDestination = $("<td>")
    var addFirstTrainTime = $("<td>")
    var addFrequency = $("<td>")
    addTrainName.text(snapshot.addTrainName)
    addDestination.text(snapshot.addDestination)
    addFirstTrainTime.text(snapshot.addFirstTrainTime)
    addFrequency.text(snapshot.addFrequency)
    row.append(addTrainName, addDestination, addFrequency, "<td>N/A</td>", "<td>N/A</td>");
    return row; 
}

$("#add-train").click(function(){
    event.preventDefault()
    console.log($("#input_trainName").val())
    var trainName = $("#input_trainName").val().trim();
    var destination = $("#input_destination").val().trim();
    var arrivalTime = $("#input_trainTime").val().trim();
    var frequency = $("#input_frequency").val().trim();
    console.log(trainName, destination, arrivalTime, frequency)
    var setUserData = {
        addTrainName: trainName,
        addDestination: destination, 
        addFirstTrainTime: arrivalTime,
        addFrequency: frequency,
    
    
        /*
         // format first train time to military time
         moment($("#input_trainTime").format("HH:mm"));
         */
    }  
    
    var nextArrival = console.log("next arrival time is:" + )
    var input_trainName = $("#input_trainTime");
    console.log(input_trainName);
    console.log("moment time is:" + moment(input_trainName).format("H HH"));
    console.log(moment("0500").format("HH:mm"));

     
userData.push(setUserData);
resetInputs();
console.log(setUserData);
});

//reset inputs on form
function resetInputs()  {
    $("#input_trainName").empty();
    $("#input_destination").empty();
    $("#input_trainTime").empty();
    $("#input_frequency").empty();
    
}






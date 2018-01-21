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

 userData.on("child_added", 
    function(snapshot){
        $("#trainTable").append(createEntry(snapshot.val()))
    },
    function(err){
        console.log("There was an error retrieving the data")
    }
) 

function createEntry(snapshot){
    var row = $("<tr>")
    var addTrainName = $("<td>")
    var addDestination = $("<td>")
    var addFirstTrainTime = $("<td>")
    var addFrequency = $("<td>")
    addTrainName.text(snapshot.addTrainName)
    addDestination.text(snapshot.addDestination)
    addFirstTrainTime.text(snapshot.addFirstTrainTime)
    addFrequency.text(snapshot.addFrequency)
    row.append(addTrainName, addDestination, addFrequency, "<td>N/A</td>", "<td>N/A</td>")
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
        adddestination: destination, 
        addFirstTrainTime: arrivalTime,
        addFrequency: frequency,
        //code below slacked by professor in class
        dateAdded: firebase.database.ServerValue.TIMESTAMP 
    }

userData.push(setUserData)
console.log(setUserData)
})


/*
// partial code to add fields to the table
$('#timesheet tr:last').after('<tr id="' + id + '"><td class="e-name">' + employees.name + 
'</td><td class="e-role">' + employees.role + 
'</td><td class="e-start">' + employees.start + 
'</td><td id = "e-months" class="e-months"></td><td id="e-rate" class="e-rate"></td><td id="e-billed" class="e-billed"></td></tr>');
*/
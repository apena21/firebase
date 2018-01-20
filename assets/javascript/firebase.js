/*
var trainArray = [{
    trainNam: "Train Name",
    dest:"Destination",
    freq: "Frequency (min)",
    arrivals: "Next Arrival",
    min_away: "Minutes Away"
}]
*/

var trainArray = [
	["Trenton Express", "Trenton", "25", "05:35 PM", "10"],
	["Oregon Trail", "Salem, Oregon", "3600", "01:39 PM", "1154"],
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

var now = moment();


$("body").append(table);

/*
var trainTable = $('.table'),
data = ["Train Name", "Destination", "Frequency (min)", "Next Arrival", "Minutes Away"];
$.each(trainTable, function(i, trainTable) {
var tr = $('<tr>');
$.each(data, function(i, data) {
$('<td>').html(trainTable[data]).appendTo(tr);  
});
trainTable.append(tr);
});
*/

// Assignment:
// Create a list of all of the donations to Kurt Schaefer's Campaign
// (CITIZENS TO ELECT KURT SCHAEFER ATTORNEY GENERAL)


$(document).ready(function() {
	loadData();

});

function loadData() {

	  $.getJSON("js/donations_over_5K.json", function(donationsData){
	    //callback
	    writeTable(donationsData);
	  })

}


function writeTable(data) {

	for (i=0; i<data.length; i++) {

    var $contributionDate = "<tr> <td>"+ data[i]["Contribution Date"] + "</td>";
    var $contributionInfo = "<td class='information'>" + data[i]["Contribution Information"] + "</td>";
    var $amount = "<td class='amount'>" + data[i]["Amount"] + "</td> </tr>";

		$( ".donations" ).append($contributionDate + $contributionInfo + $amount);

  }

}

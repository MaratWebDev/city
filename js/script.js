$(document).ready(function() {



	function switchBackground() {
		 		// location.reload();

		 event.preventDefault();
		// alert("Try1");
// Declaring variable city for using it with city names
		var city = $("#city-type").val();
// Adding if statements for each city

		if ((city == "nyc") || (city == "new york city") || (city == "new york")) {

			$("body").addClass("nyc");
		} else if ((city == "sf") || (city == "san francisco")	|| (city == "san-francisco")) {
			$("body").addClass("sf");
		} else if ((city == "la") || (city == "los angeles")	|| (city == "lax")) {
			$("body").addClass("la");
		} else if ((city == "austin") || (city == "atx")) {
			$("body").addClass("austin");
		} else if ((city == "sydney") || (city == "syd")) {
			$("body").addClass("sydney");
		}


// Adding fallback option

		else {
		   $("body").addClass("skyline");

		 }
// Clearing field after each input
 		$('#city-type').val('');




	};

// Bindings
	$("#submit-btn").on("click", switchBackground);






});
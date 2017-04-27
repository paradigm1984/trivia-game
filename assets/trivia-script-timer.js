$(document).ready(function() {

	//starting it with the answers hidden. will show them at the end
	//of the game only.
	$("#answers").hide();
	$("#questions").show();
	start();

	//starts this function when the button is pressed.
	//essentially this sets the clock and has other functions in it.
	$("#startButton").click(function() {

		// start the count at 60 seconds
		var number = 60;

		// connecting the buttons to their respective functions
		$("#start-button").on("click", start);   
	    $("#submit").on("click", finish);  
	    $("#restart").on("click", restart);

	    function start() {

	    	// create counter variable and sets it to
	    	counter = setInterval(timer, 1000);
	    };

	    function timer() {

	    	// decreases the number by 1
	    	number--

	    	// shows new number in the p tag with the id
	    	$("#show-number").text("<p>" + number + "</p>")
	    	
	    	if(number === 0) {
	    		alert("TIME UP!!!")
	    		stop();
	    	};
	    };

	    //stops timer and shows results
	    function stop() {

	    	clearInterval(counter); // stops timer
	    	$("#answers").show();
			$("#questions").hide();
	    };

	    function finish() {

		    number = 1; // automatically brings the number counter to 1 to end the game
	    	clearInterval(counter); // stops the timer
	    	timer();
	    };

	    function restart() {

	    	number = 60;
	    	start();
	    };

	    function hideMe(e) {
    		
    		$(e).hide();
	    };

	    function showMe(e) {
	    	
	    	$(e).show();
	    };

	});

});
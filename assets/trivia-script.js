$(document).ready(function() {

// ================== Global Variables ===================== //

	var seconds;
	// correct answer variables to match to checked box
	var answerOne = "Vincent Van Gogh";
	var answerTwo = "Leonardo Da Vinci";
	var answerThree = "Frederic Auguste Bartholdi";
	var answerFour = "Claude Monet";
	var answerFive = "Origami";
	var answerSix = "Leonardo Da Vinci";
	// delays the timer 1 by sec
	var timerController;

	
	

// ================== Functions ===================== //
	
	function timer() {

		seconds = 60;
    	// delays the visible timer in the html by 1 sec
    	time = setInterval(showTimer, 1000);
    };

    function showTimer() {

    	if(seconds > 0) {
    		seconds--;
	    	// shows new number in the p tag with the id
	    	$("#show-number").text(seconds)
	    	if(seconds === 0) {
	    		alert("TIME UP!!!")
	    		submit();
	    	};
	    };
    };

    function stopTimer() {

    	seconds = 0;
    }

    // on click function that starts the game
    $("#start").on("click", function newGame () {
		timer();
		showTimer();
	});

     // on click function that shows the results
	$("#submit").on("click", function submit() {
		stopTimer();
		alert("Lets see how you did!");

	$("#restart").on("click", function restart() {
		timer();
		showTimer();
		/* unfortunately i got stuck on the if then statements
		and coudlnt move forward until keith cleared it up for
		me. Im sure it wouldve gotten it to work with some more
		time :( :( :(  */
	});
		

		// question 1 check
		if($("#answer-body-1 input:checked").val() === "a") {
			$("#AnswerOne").html("You got answer one correct!!!");
		} else {
			$("#AnswerOne").html("Sorry, The answer for number one was A.");
		};
		// question 2 check
		if($("#answer-body-2 input:checked").val() === "c") {
			$("#AnswerTwo").html("You got answer two correct!!!");
		} else {
			$("#AnswerTwo").html("Sorry, The answer for mumber two was C.");
		};
		// question 3 check
		if($("#answer-body-3 input:checked").val() === "c") {
			$("#AnswerThree").html("You got answer three correct!!!");
		} else {
			$("#AnswerThree").html("Sorry, The answer for nubmer three was C.");
		};
		// question 4 check
		if($("#answer-body-4 input:checked").val() === "c") {
			$("#AnswerFour").html("You got answer four correct!!!");
		} else {
			$("#AnswerFour").html("Sorry, The answer for number four was D.");
		};
		// question 5 check
		if($("#answer-body-5 input:checked").val() === "c") {
			$("#AnswerFive").html("You got answer five correct!!!");
		} else {
			$("#AnswerFive").html("Sorry, The answer for number five was B.");
		};
		// question 6 check
		if($("#answer-body-6 input:checked").val() === "c") {
			$("#AnswerSix").html("You got answer six correct!!!");
		} else {
			$("#AnswerSix").html("Sorry, The answer for number six was B.");
		}; 



	});



















});	
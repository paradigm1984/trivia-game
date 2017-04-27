$(document).ready(function() {

	$("#submit").click(function() {

		if(!$("input[@name=q1]:checked").val() || !$("input[@name=q2]:checked").val() ||            
		   !$("input[@name=q3]:checked").val() || !$("input[@name=q4]:checked").val() ||                  
		   !$("input[@name=q5]:checked").val() || !$("input[@name=q6]:checked").val()) {
			/* i tried to figure out how to put this in an array but i was having
			 trouble figuring out how to reference each different id name. i thought
			 maybe an object but i wasnt sure how to reference them. do I have to
			 do something like $(#q1a) === $q1a and do that for each id? am i allowed
			 to do that within an object? */
			 alert("You left some blank!");
		}

		else {
			
			 cat1name = "1";            
			 cat2name = "2";            
			 cat3name = "3";            
			 cat4name = "4";            
			 cat5name = "5";            
			 cat6name = "6";            
			 cat7name = "none";
			 /* wanted to also put this in an array and do a for loop
			 but i couldnt figure out how to also change the category
			 name along with the string number */  
		};

		cat1 = $("q1a":checked).val() != "a";
		cat2 = $("q2c":checked).val() != "c";
		cat3 = $("q3c":checked).val() != "c";
		cat4 = $("q4d":checked).val() != "d";
		cat5 = $("q5b":checked).val() != "b";
		cat6 = $("q6b":checked).val() != "b";

		categories = [];

		if(cat1) {

			categoties.push(cat1name);
		};
		else if(cat2) {
			
			categoties.push(cat2name);
		};
		else if(cat3) {
			
			categoties.push(cat3name);
		};
		else if(cat4) {
			
			categoties.push(cat4name);
		};
		else if(cat5) {
			
			categoties.push(cat5name);
		};
		else {
			
			categoties.push(cat6name);
		};

		var wrongAnswers = "You answered the following questions incorrectly: " + categoties.join(", ") + ".";

		$("#categoryList").text(catStr);                        
		$("#categoryList").show("slow"); 


		if (cat1) {

		 $("#category1").show();

		};     
		else if (cat2) {

			$("#category2").show();
		};   
		else if (cat3) {

			$("#category3").show();

		};        
		else if (cat4) {

			$("#category4").show();

		};            
		else if (cat5) {

			$("#category5").show();

		};            
		else if (cat6) {

			$("#category6").show();

		};            
		
		$("#closing").show("slow");
		
	};
};




$(".SpanishSurveyBody").hide();

$(document).ready(function($) {					
		$('#Nav-Main ul').css({display: "none"}); 
		$('#Nav-Main li').hover(function() {  
        $(this).addClass('addPosition');
		$(this).find('li').stop().animate({'width' : "300"});
   		$(this).find('ul:first').css({visibility : "visible", display : "none"}).show(400);
  		
  		}, function() {
    	$(this).find('ul:first').css({visibility : "hidden"}).hide(400);
        $(this).removeClass('addPosition');
			});
		});

$("#SpanishSurvey").on("click", function() {
	event.preventDefault();
	$("#EnglishSurveyBody").hide(500);
	$(".SpanishSurveyBody").show(500);
});

$("#EnglishSurvey").on("click", function() {
	event.preventDefault();
	$(".SpanishSurveyBody").hide(500);
	$("#EnglishSurveyBody").show(500);
});

$('#SaveButton').click(function() {
	$('#InfoContainer').html($('#TextInput').val());
	$('#TextInput').val('');
});


	// commands to edit the survey which populates the below survey editor with that survey

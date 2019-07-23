/*
Q1:
Check if jQuery is loaded
*/
	$(function () {
		$("#q1").replaceWith("Yes, It's loaded");
	});

/*
Q2:
If You would have very long website - How to help user with fast getting back on top :)
*/

	$("#back").click(function(){
		$("html , body").animate({scrollTop:0},0)
	})

/*
Q3:
If You would like to change sizes of Your div/button with on click :)
// */

	$("#btn1").click(function(){
		$("#btn1").animate({width:"200",height:"30"});
			});

	$("#box").click(function(){
		$("#box").animate({width:"300",height:"300"})	
			});

	$("#btn2").click(function(){
		$("#btn1").animate({width:"153",height:"22"})
			});

	$("#btn2").click(function(){
		$("#box").animate({width:"150",height:"150"})	
			});

/*
Q4:
Learn how to fadein your boxes
*/
	
	$("#fb").click(function(){
		$("#div1, #div2, #div3").fadeIn(3000)
		});

/*
Q5:
User must first accept then he or she can signup
*/
	
	$('#accept').click(function(){
        if ($('#accept').prop("checked"))
        {
            $('#submitbtn').attr("disabled", false);
        }
        else{
            $('#submitbtn').attr("disabled", true);
        }
        });

/*
Q6:
Let them print
*/

	$(".printPage").click(function(){
		window.print()
	})

/*
Q7:
Can username be too long? Yes it can - lets limit that
*/

	$( document ).ready(function() {
    $('#textarea').attr('maxlength','20');

    var maxLength = 20;
    $('textarea').keyup(function() {
        var length = $(this).val().length;
        var length = maxLength-length;
        $('#rchars').text(length);
    });
});

/*
Q8:
Wanna make some words bolder, do it with jQuery
*/
	
	$(".p1").css({fontWeight:"bold"});
	
/*
Q9:
Add new div to your website
*/

	function new_div(){
		$("#p3").after("<div>Hello World!</div>")
	}

/*
Q10:
Select values from a JSON object using jQuery
*/

	

/*
Q11:
Add element within ul list
*/

	$("#btnclick").click(function(){
		$('ul').append('<li> <a href="#">Mohamamd</a></li>');
	});

/*
Q12:
Know what user puts into textbox
*/

	$("#usertext").change(function(){
		var x=usertext.value;
		$("#usertext").after(x)
	})

/*
Q13:
Change input value
*/

	$("#button").prop({"value":"Mohammad"});

// if you finish try a new thing by your self
// or go and repeat the DOM exercises using jQuery 
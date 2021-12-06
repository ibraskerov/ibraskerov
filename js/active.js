
$(document).ready(function(){
	$("#first-slide").click(function(){
			
			$("#slidepic2").removeClass ("active-slide")
			$("#second-slide").removeClass("active")
			
			$("#slidepic3").removeClass ("active-slide")
			$("#third-slide").removeClass("active")
			
			$("#slidepic4").removeClass ("active-slide")
			$("#fourth-slide").removeClass("active")
			
			$("#slidepic5").removeClass ("active-slide")
			$("#fifth-slide").removeClass("active")
		
		
		
		$("#slidepic1").addClass ("active-slide")
		$("#first-slide").addClass("active")
	});
	
	
});

$(document).ready(function(){
	$("#second-slide").click(function(){
		
		$("#slidepic1").removeClass ("active-slide")
			$("#first-slide").removeClass("active")
			
			$("#slidepic3").removeClass ("active-slide")
			$("#third-slide").removeClass("active")
			
			$("#slidepic4").removeClass ("active-slide")
			$("#fourth-slide").removeClass("active")
			
			$("#slidepic5").removeClass ("active-slide")
			$("#fifth-slide").removeClass("active")
		
		$("#slidepic2").addClass ("active-slide")
		$("#second-slide").addClass("active")
	});
	
	
});
$(document).ready(function(){
	$("#third-slide").click(function(){
		
		$("#slidepic2").removeClass ("active-slide")
			$("#second-slide").removeClass("active")
			
			$("#slidepic1").removeClass ("active-slide")
			$("#first-slide").removeClass("active")
			
			$("#slidepic4").removeClass ("active-slide")
			$("#fourth-slide").removeClass("active")
			
			$("#slidepic5").removeClass ("active-slide")
			$("#fifth-slide").removeClass("active")
		
		$("#slidepic3").addClass ("active-slide")
		$("#third-slide").addClass("active")
	});
	
	
});
$(document).ready(function(){
	$("#fourth-slide").click(function(){
		
		$("#slidepic2").removeClass ("active-slide")
			$("#second-slide").removeClass("active")
			
			$("#slidepic3").removeClass ("active-slide")
			$("#third-slide").removeClass("active")
			
			$("#slidepic1").removeClass ("active-slide")
			$("#first-slide").removeClass("active")
			
			$("#slidepic5").removeClass ("active-slide")
			$("#fifth-slide").removeClass("active")
		
		$("#slidepic4").addClass ("active-slide")
		$("#fourth-slide").addClass("active")
	});
	
	
});

$(document).ready(function(){
	$("#fifth-slide").click(function(){
		
		$("#slidepic2").removeClass ("active-slide")
			$("#second-slide").removeClass("active")
			
			$("#slidepic3").removeClass ("active-slide")
			$("#third-slide").removeClass("active")
			
			$("#slidepic4").removeClass ("active-slide")
			$("#fourth-slide").removeClass("active")
			
			$("#slidepic1").removeClass ("active-slide")
			$("#first-slide").removeClass("active")
		
		$("#slidepic5").addClass ("active-slide")
		$("#fifth-slide").addClass("active")
	});
	
	
});
$(document).ready(function(){
$(".nav a").click(function(){
	var elementClick=$(this).attr("href");
	var destination = $(elementClick).offset().top;
	$("html, body").animate({scrollTop:destination},600);
	return false;
});
});





$(document).ready(function(){
$(".up a").click(function(){
		var clickedBtn=$(this).attr("href");
		var finish = $(clickedBtn).offset().top;
		$("html , body").animate({scrollTop:finish},600);
		return false;
		
});
});



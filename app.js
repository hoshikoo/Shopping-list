$(document).ready(function(){
	$("#button").click (function(){
		var add = $("#comment-body").val();
		$(".comments").append("<li>" + add + "</li>");
		$('ol li').not(':has(".checkbox")').append(
			'<input type="checkbox" class="checkbox" value="1" />');
		$(this).closest('form').find("input[type=text]").val("");
    });


    $(document).keypress(function(e){     
	   if(e.which == 13){     
	   		var add = $("#comment-body").val();     
	   		$(".comments").append("<li>" + add + "</li>"); 
	   		$('ol li').not(':has(".checkbox")').append(
	   			'<input type="checkbox" class="checkbox" value="1" />');
	   		$(this).closest('form').find("input[type=text]").val("");
	   		e.preventDefault();
    		return false;   
	   };
    }); 

   
});

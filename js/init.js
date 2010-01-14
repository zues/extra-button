$(document).ready(function(){
	$('HTML').addClass('JS');  

	
	$("div.button_exta > a").bind("mouseenter",function(){
      $(this).css("height", $(this).height());
    }).bind("mouseleave",function(){
		 time_box2 = setTimeout(function(){
			$("div.button_exta > a").css("height", "");
	    }, 600);
    });

	
	$("button.suche_beitrag").click(function() {
		$("input#searchkind[value='beitrag']").attr('checked','checked');
	});
	
	$("button.suche_comment").click(function() {
		$("input#searchkind[value='comment']").attr('checked','checked');
	});
	
	$("button.suche_user").click(function() {
		$("input#searchkind[value='user']").attr('checked','checked');
	});

});
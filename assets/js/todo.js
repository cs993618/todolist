//check off specific todos by clicking
$('ul').on("click","",function(){
	$(this).toggleClass("completed");

});


//this here are different!
//first is span itself
//second is parent, which means the entire li!
$("ul").on("click","span",function(event){
	$(this).parent().fadeOut(500,function(){
		$(this).remove();
	});
	// to stop the click effect of toggleClass
	event.stopPropagation();
});

$("input[type = 'text']").keypress(function(event){
	if(event.keyCode === 13){
		var todoText = $(this).val();
		$(this).val("");
		$("ul").append("<li><span><i class='fa fa-trash'></i></span>"+ todoText+ "</li>");
	}
});

$(".fa-plus").click(function(){
	$("input[type = 'text']").fadeToggle(0);
});
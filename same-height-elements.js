$('#parentElement').ready(function(){
	var max_height = 0;
	$(this).find('.element').each( function(){
		max_height = max_height > $(this).height() ? max_height : $(this).height();
	});
	$(this).find('.element').each(function(){
		$(this).height(max_height);
	})
});

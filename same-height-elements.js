$( document ).ready(function() {
    height_function();
    $(window).resize(height_function);
});

function height_function(){
	
	// Set same_height_element to blank array
	var same_height_element = [];

	//Pushes all same-height attribute elements into same_height_element array
	$('*[same-height]').each(function(){
		same_height_element.push( $(this).attr('same-height') );
	})

	//Strips out all unique elements from same_height_element into unique_same_height_element 
	var unique_same_height_element = same_height_element.filter(function(itm, i, same_height_element) {
		return i == same_height_element.indexOf(itm);
	});

	//Sets all same-height attribute elements to auto heihgt
	$(this).height('auto');

	var c = 0;
	$.each(unique_same_height_element, function( index, value ) { 
		var max_height = 0;
		
		//Loops through and compare the height of each element and saves the largest height into max_height
		$('[same-height = '+ value +']').each( function(){
			max_height = max_height > $(this).height() ? max_height : $(this).height();
		});

		//Makes height for all element into max_height
		$('[same-height = '+ value +']').height(max_height);

	  });
}
// Select color input
// Select size input
var color,height,width ;

// When size is submitted by the user, call makeGrid()
$('#sizePicker').on('submit', function(evt){
	evt.preventDefault();
	height = $('#inputHeight').val();
	width = $('#inputWeight').val();
	makeGrid(height,width);
});

function makeGrid(x,y) {
// TODO : create the grid..
// Your code goes here!

$(document).ready(function(){
	$('#pixelCanvas').empty();
     
	for (var i = 0; i < x ;i++){
		$('#pixelCanvas').append('<tr id="row'+ i+'"></tr>');
		for (var j = 0; j < y ;j++){
		$('#row'+i).append('<td id="cell"></td>');
	}
}

	//coloring the grid...
	$('td').on('click', function colorPicker(){
		color = $('#colorPicker').val();
		if ($(this).attr('style')) {
			$(this).removeAttr('style');
		} else {
			$(this).attr('style','background-color:'+color);
		}
	});
});
}
$('div').click(function() {
	$(this).hide();
})

$('div').mouseover(function() {
	alert('WTFFFF!')
})


// jQuery getting a attribute
$('a').click(function () {
	console.log($(this).attr('data-s'));
})



// real app with jQuery

$('document').ready(function() {

	$('a').click(function() {
		leo($(this).attr('data-number'))
	})

	function leo (param) {
		console.log(param);
		//$(".come--here")[0].scrollIntoView();
		$(param)[0].scrollIntoView()
	}
})
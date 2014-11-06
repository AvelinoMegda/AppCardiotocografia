$(document).ready(function(){
	$('body').bind("cut copy paste",function(e) {
		e.preventDefault();
		alert('Operação não permitida.');
	});
});  
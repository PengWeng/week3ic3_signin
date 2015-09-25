$('.signin').on('click', function(e) {//CLICK SIGNIN
	console.log('CLICK SIGN IN!');
	$('.modal').fadeIn(300);//FADE IN MODAL

});

$('.close').on('click', function(e) {//CLICK CLOSE BUTTON
	console.log('CLOSE MODAL!');
	$('.modal').fadeOut(300);//FADE OUT MODAL

});

$('.submit').on('click', function(e) {//ERROR
	console.log('SIGN IN ERROR');
	$('input').addClass('error');//ERROR POP OUT
/*	alert('Username or password is not correct');*/

});

$('input').on('click', function(e) {//CLICK INTO & REMOVE ERROR
	console.log('CLICK INTO & REMOVE ERROR');
	$(this).removeClass('error');//REMOVE ERROR RED BOX

});
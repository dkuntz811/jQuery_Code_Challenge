$(document).ready(function(){

	$('#newspy').on('click', function() { //on click-add a yellow <div>
		var spy = $('<div> spy ID Number</div>');
		$('.container').append(spy);
		 console.log("???");

		$('.container').append('<button>Change</button>');

		$('Change').on('click'), function () {
			('.container').css({background: red})
		}

});
});




		//function () {        //I was going to build a function here to create the yellow spy info.


		//}

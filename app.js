$(document).ready(function(){

	$('#newspy').on('click', function(event) { //on click-add a yellow <div>
		$(this).addClass('<div>""</div>' + spy).children().last();
		$(this).css('background-color', 'yellow');

		console.log("???");

		//function () {        //I was going to build a function here to create the yellow spy info. 


		//}
	});









});
var spyname;
var idNumber;

var array = [spyname, idNumber]

var spy = idNumber;

function spyData () {
	var spyname = spyname[0];
	var idNumber = idNumber[0];
	console.log(spyData);

}

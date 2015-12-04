var curdom = 0;
$(document).ready(function () {
	$("#curdom").val(curdom);
	$("#nextButton").click(function() {
		var veri = true;
		if ($("#curdom").val() == '0') $("#intro").hide();
		else {
			// verifica campi

			fName = "#dom"+$("#curdom").val();
			$(fName).removeClass('visible');
		}
		if (veri) {
			$("#curdom").val(Number($("#curdom").val())+1);
			fName = "#dom"+$("#curdom").val();
			$(fName).addClass('visible')
		}
 	});
});



//                                   RADIOBUTTON
function checkradio() {
	var radi = document.getElementsByName('r1');
	for(var i = 0; i< radi.length; i++) {
		if (radi[i].checked){
			alert('Choosed '+i+' element');
		}
	}
}


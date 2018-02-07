//                                     css geerator
var div1 = document.getElementById('div1');
function fun1() {
	var range1 = document.getElementById('r1');
	var t1 = document.getElementById('t1');
	t1.value=range1.value;

	var range2 = document.getElementById('r2');
	var t2 = document.getElementById('t2');
	t2.value=range2.value;

	var range3 = document.getElementById('r3');
	var t3 = document.getElementById('t3');
	t3.value=range3.value;

	var range4 = document.getElementById('r4');
	var t4 = document.getElementById('t4');
	t4.value=range4.value;

	div1.style.borderRadius= range1.value +'px '+ range2.value +'px '+ range3.value +'px '+ range4.value +'px';
}










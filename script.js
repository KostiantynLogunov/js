//pop, push, shift, unshift, split
/*var arr = ['bread', 'tea', 'sugar', 'sweet'], str='Kostia', str2;

arr.push('lemon');
arr.unshift('apple');
str2 = str.split('');
alert(str2);

for (var x = 0; x<arr.length; x++){
	console.log(arr[x]);
}*/


												//FUNCTION
/*var userName = 'Alex';

function showMsg() {
	userName = 'John';
	var message = 'Hello, I am '+ userName;
	alert(message);
}
showMsg();
alert(userName);*/


														//OBJECT
/*var myFriend = {
	'name' : 'Kostia',
	'legs' : 2,
	'friend' : 50,
	'the drink' : 'water'
};

var nameOffFriend = myFriend['the drink'], countProperty = 0;
// document.write(nameOffFriend);
myFriend.game = 'pingPong';
myFriend.name='Ilonka';
delete myFriend['the drink'];
myFriend.boyfrend ='kostia';
console.log(myFriend);
for(key in myFriend) {
	document.write('<br>'+key + ' = ' + myFriend[key]);
	countProperty++;
}
document.write('<br> Count properies = ' + countProperty);*/


// 					   								DATE
/*var now = new Date();
document.write(now.getFullYear());*/




//                       DOM elementy
/*var element = document.getElementById('header').getElementsByTagName('p')[0].innerHTML;
console.log(element);*/




//                                        change DOM elements
/*var el_1 = document.getElementById('some-block');
var el_2 = document.getElementsByTagName('div');

function changeSingle(element) {
	element.innerHTML = 'Here is some content';
}

function changeCollection(elements) {
	for (var i = 0; i< elements.length; i++){
		elements[i].innerHTML = 'we all changed';
	}
}*/



//                          change DOM element atribut property
/*var element = document.getElementById('test-link');
function changeLink(element) {
	element.href = 'https://www.facebook.com/';
}*/


//                              cerate & delete element DOM
function test() {
	var element = document.getElementById('block-1');
	var link = document.createElement('a');
	var br = document.createElement('br');

	link.innerHTML = "go to google";
	link.href = 'http://google.com';

	element.appendChild(br);
	element.appendChild(link);
	if (document.getElementById('block-2')) {
		document.body.removeChild(document.getElementById('block-2'));
	}
}











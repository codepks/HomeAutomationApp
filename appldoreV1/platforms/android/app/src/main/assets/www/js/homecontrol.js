var button1 = document.getElementById('ledon');

const urlOn = "http://192.168.43.14/LED=ON"
button1.addEventListener("click", function(){ledOnFun(urlOn)}, false);

function ledOnFun(myURLOn)
{
	var xhr = new XMLHttpRequest();
	xhr.open('GET', myURLOn, true);
	xhr.send();
	console.log(myURLOn);
}

var button1 = document.getElementById('ledoff');

const urlOff = "http://192.168.43.14/LED=OFF"
button1.addEventListener("click", function(){ledOffFun(urlOff)}, false);

function ledOffFun(myURLOff)
{
	var xhr = new XMLHttpRequest();
	xhr.open('GET', myURLOff, true);
	xhr.send();
	console.log(myURLOff);
}

var c=0;
var t;
var timer_is_on=0;

function timedCount(){
	//document.getElementById('info').innerHTML='Time: '+c;
	c=c+1;
	t=setTimeout("timedCount()",10);
}
function doTimer(){
	if (!timer_is_on){
		timer_is_on=1;
		timedCount();
	}
}
function changeColor(){
	$('#button').attr('class', 'green');
	doTimer();	
}
function execute(){
	delayTime = Math.floor(Math.random() * (5.5 - 3.5) + 3.5);
	delayTimeMilli = delayTime * 1000;
	c=0;
	document.getElementById('info').innerHTML='Time: '+c;
	var timeoutID = window.setTimeout(changeColor, delayTimeMilli);
}
function stopCount(){
	if (timer_is_on == 0){
		$('#button').attr('class', 'red');
		execute();
	}else{
		clearTimeout(t);
		timer_is_on=0;
		document.getElementById('info').innerHTML='Time: '+ c;
	}
	
}
//alert(delayTime);

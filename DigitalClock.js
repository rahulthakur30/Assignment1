let date;
//To show Digital clock
function myDate()
{
    //let month, days, today;
    date=new Date();
    let minutes=date.getMinutes();
    if(minutes<10)
    {
        minutes='0'+minutes;
    }
    else
    {
        minutes=minutes;
    }
    let seconds=date.getSeconds();
    if(seconds<10)
    {
        seconds='0'+seconds;
    }
    else
    {
        seconds=seconds;
    }
    document.getElementById('clock').innerHTML=date.getHours()+':'+minutes+':'+seconds;
    let month=date.getMonth()+1;
    document.getElementById('date').innerHTML=date.getDate()+'/'+month+'/'+date.getFullYear();
    let days=["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let today=date.getDay();
    document.getElementById('day').innerHTML=days[today];
}
//To show AMPM Format
function Format2()
{
    date=new Date();
    let hours=date.getHours();
    let minutes=date.getMinutes();
    let seconds=date.getSeconds();
    let ampm;
    if(hours>=12)
    {
        ampm='PM';
    }
    else
    {
        ampm='AM';
    }

    hours=hours%12;
    if(hours=hours)
    {
        hours=hours;
    }
    else
    {
        hours='12';
    }
    if(minutes<10)
    {
        minutes='0'+minutes;
    }
    else
    {
        minutes=minutes;
    }
    if(seconds<10)
    {
        seconds='0'+seconds;
    }
    else
    {
        seconds=seconds;
    }
    var ampmformat=hours+':'+minutes+':'+seconds+' '+ ampm;
    document.getElementById('clock2').innerHTML=ampmformat;
}


setInterval(myDate,1000); //Function runs every 1s
setInterval(Format2, 1000);// Function runs every 1s
var hours12Format=false; //Toggle variable
document.getElementById('clock2').style.display='none';
function Toggle()
{
    var hours24=document.getElementById('clock');
    var hours12=document.getElementById('clock2');
    if(hours12Format==true) //If true, 12hr format will be shown  and if false, 24hr format will be shown
    {                           
        hours24.style.display='none';
        hours12.style.display='block';
        hours12Format=false;
        document.getElementById('Format2').innerHTML='Show 24Hr Format';
    }
    else
    {
        hours12.style.display='none';
        hours24.style.display='block';
        hours12Format=true;
        document.getElementById('Format2').innerHTML='Show 12Hr Format';
    }
}





var sound = new Audio("https://ypvnxx00-a.akamaihd.net/downloads/ringtones/files/mp3/kgf-mothers-love-dj-45859.mp3");
		sound.loop = true; //audio to play




function addZero(time)
{

		return (time < 10) ? "0" + time : time; //adds extra 0 if hours are less than 10
	
}

function hoursMenu() //DropDown Menu for Hours
{

	var select = document.getElementById('alarmhrs');
	var hrs = 23
	for (i=0; i <= hrs; i++) {
		select.options[select.options.length] = new Option( i < 10 ? "0" + i : i, i);
		
	}
}
hoursMenu();

function minMenu() //DropDown Menu for Minutes
{
	var select = document.getElementById('alarmmins');
	var min = 59;
	for (i=0; i <= min; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
minMenu();
 
function secMenu() //DropDown Menu for Seconds
{
	var select = document.getElementById('alarmsecs');
	var sec = 59;
	for (i=0; i <= sec; i++) {
		select.options[select.options.length] = new Option(i < 10 ? "0" + i : i, i);
	}
}
secMenu();


function setAlarm() //Set alarm function
{
	var hr = document.getElementById('alarmhrs');	
	var min = document.getElementById('alarmmins');
	var sec = document.getElementById('alarmsecs');	
	var ap = document.getElementById('ampm');
    var selectedHour = hr.options[hr.selectedIndex].value; //To select dropdown values
    var selectedMin = min.options[min.selectedIndex].value;
    var selectedSec = sec.options[sec.selectedIndex].value;
    var selectedAP = ap.options[ap.selectedIndex].value;

    var alarmTime = addZero(selectedHour) + ":" + addZero(selectedMin) + ":" + addZero(selectedSec) + selectedAP; //set alarm time
	var h2 = document.getElementById('clock');


setInterval(function(){

	var date = new Date();
	var hours = (12 - (date.getHours()));
	var minutes = date.getMinutes();
	var seconds = date.getSeconds();
	var ampm = (date.getHours()) < 12 ? 'AM' : 'PM';

    if (hours < 0) 
    {
		hours = hours * -1;
    } else if (hours == 00) 
    {
		hours = 12;
    } else 
    {
		hours = hours;
    }
    
	var currentTime = h2.textContent = addZero(hours) + ":" + addZero(minutes) + ":" + addZero(seconds) + "" + ampm;
	

    if (alarmTime == currentTime)
    {
		sound.play();
	}
},1000);
}


function alarmClear() {

	sound.pause();
}

var c=document.getElementById("canvas1");
var ctx=c.getContext("2d");
// ctx.translate(radius, radius)

setInterval(Time, 1000);



function arc() //Function draws the clock
{
ctx.beginPath();
ctx.arc(250, 250, 250, 0, 2*Math.PI);
ctx.fillStyle="black";
ctx.fill();
}
arc();


function Numbers() // Fucntion draws Numbers on the clock
{
    var angle=0;
    ctx.translate(250,250);
    ctx.font=45+"px Arial";
    ctx.textAlign="center";
    for(let i=0; i<13; i++)
    {
        angle=i*Math.PI/6;
        ctx.rotate(angle);
        ctx.translate(0, -225*0.85);
        ctx.rotate(-angle);
        ctx.fillText(String(i), 0, 0);
        ctx.fillStyle="white";
        ctx.rotate(angle);
        ctx.translate(7, 225*0.85);
        ctx.rotate(-angle);
    }
}
Numbers();



function Time() // Function Calculates time
{

var d=new Date();
var hours=d.getHours();
var minutes=d.getMinutes();
var seconds=d.getSeconds();
hours=hours%12;
hours=(hours*Math.PI/6)+(minutes*Math.PI/(6*60)+(seconds*Math.PI)/(360*60));
hands(ctx, hours, 80, "white");
minutes=(minutes*Math.PI/30)+(minutes*Math.PI/(30*60));
hands(ctx, minutes, 200, "white");
seconds=(seconds*Math.PI/30);
hands(ctx, seconds, 200, "red");
}


function hands(ctx, pos, length, color) //function draws hands of the clocks
{

ctx.beginPath();
ctx.moveTo(0, 0);
ctx.rotate(pos);
ctx.lineTo(0, -length);
ctx.strokeStyle=color;
ctx.stroke();
ctx.rotate(-pos);
}















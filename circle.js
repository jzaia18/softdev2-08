var stophammertime = function() {
  if (!timer)
    return;
  clearInterval(timer);
  timer = null;
};

var clear = function() {
  slate.innerHTML = '';
};

var animateCircle = function() {
  stophammertime();
  clear();

  var rad = 0;
  var radMode = 0;

  var circ = slate.appendChild(document.createElementNS(NS, 'circle'));
  circ.setAttribute("cx", WIDTH/2);
  circ.setAttribute("cy", HEIGHT/2);
  circ.setAttribute("fill", "lightsteelblue");
  circ.setAttribute("stroke", "black");

  var drawCircle = function() {
    circ.setAttribute('r', rad);

    if (rad > WIDTH/2)
      radMode = 1;
    if (rad <= 1)
      radMode = 0;

    if (radMode)
      rad-=2;
    else
      rad+=2;
  };

  timer = setInterval(drawCircle, 20);
};

var animateDVD = function() {
  stophammertime();
  clear();

  var dx = Math.floor(Math.random() * 5 + 1);
  var dy = Math.floor(Math.random() * 5 + 1);
  var x = Math.floor(Math.random() * (WIDTH - img.width*2) + img.width + 1);
  var y = Math.floor(Math.random() * (HEIGHT - img.height*2) + img.height + 1);

  var dvd = slate.appendChild(document.createElementNS(NS, 'image'));
  dvd.setAttribute('x', x);
  dvd.setAttribute('y', y);
  dvd.setAttribute('href', 'david.png');
  dvd.setAttribute('width', img.width);
  dvd.setAttribute('height', img.height);
  //<image xlink:href="firefox.jpg" x="0" y="0" height="50px" width="50px"/>
  var drawDVD = function() {

    if (Math.abs(y-HEIGHT) < img.height + 1 || y < 1)
      dy*=-1;
    if (Math.abs(x-WIDTH) < img.width + 1 || x < 1)
      dx*=-1;

    dvd.setAttribute('x', x);
    dvd.setAttribute('y', y);

    console.log('hui');

    x+=dx;
    y+=dy;
  };

  timer = setInterval(drawDVD, 20);
};

var NS = "http://www.w3.org/2000/svg";
var TAU = 2*Math.PI; //TAU!!!
var slate = document.getElementById("slate");
var timer = null;
var WIDTH = 500; //cheaty
var HEIGHT = 500; //cheaty


var img = new Image();
img.src="david.png";

document.getElementById("circle").addEventListener("click", animateCircle);
document.getElementById("dvd").addEventListener("click", animateDVD);
document.getElementById("stop").addEventListener("click", stophammertime);
document.getElementById("clear").addEventListener("click", clear);

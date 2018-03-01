var stophammertime = function() {
  window.cancelAnimationFrame(reqID);
};

var clear = function() {
  ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height);
  ctx.beginPath();
};

var animateCircle = function() {
  stophammertime();

  ctx.fillStyle = "lightsteelblue";

  var rad = 0;
  var radMode = 0;

  var drawCircle = function() {
    clear(); //hacky fix
    ctx.arc(ctx.canvas.width/2, ctx.canvas.height/2, rad, 0, TAU);
    ctx.stroke();
    ctx.fill();

    if (rad > ctx.canvas.width/2)
      radMode = 1;
    if (rad <= 1)
      radMode = 0;

    if (radMode)
      rad-=2;
    else
      rad+=2;
    reqID = window.requestAnimationFrame(drawCircle);
    if (reqID%10 == 0)
      console.log("ReqID: " + reqID);
  };

  drawCircle();
};

var animateDVD = function() {
  stophammertime();

  var dx = Math.floor(Math.random() * 5 + 1);
  var dy = Math.floor(Math.random() * 5 + 1);
  var x = Math.floor(Math.random() * (ctx.canvas.width - img.width*2) + img.width + 1);
  var y = Math.floor(Math.random() * (ctx.canvas.height - img.height*2) + img.height + 1);



  var drawDVD = function() {
    clear();
    ctx.drawImage(img,x,y);

    reqID = window.requestAnimationFrame(drawDVD);
    if (reqID%10 == 0)
      console.log("ReqID: " + reqID);

    if (Math.abs(y-ctx.canvas.height) < img.height + 1 || y < 1)
      dy*=-1;
    if (Math.abs(x-ctx.canvas.width) < img.width + 1 || x < 1)
      dx*=-1;


    x+=dx;
    y+=dy;
  };

  drawDVD();
};

var ctx = document.getElementById("iamthecanvas").getContext('2d');
var TAU = 2*Math.PI; //TAU!!!
var reqID = 0;

var img = new Image();
img.src="david.png";

document.getElementById("circle").addEventListener("click", animateCircle);
document.getElementById("dvd").addEventListener("click", animateDVD);
document.getElementById("stop").addEventListener("click", stophammertime);
document.getElementById("clear").addEventListener("click", clear);

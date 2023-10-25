var anima;
var px = 0;
var py = 0;
function desenhar() {
  var Canvas = document.getElementById("Desenho");
  var ctx = Canvas.getContext("2d");
  //ctx.clearRect(0, 0, 500, 500);
  ctx.fillStyle = "rgb(255, 0,0 )";
  ctx.fillRect(px, 0, 50, 50);
  px++;
  anima = requestAnimationFrame(desenhar);

  //ctx.fillStyle = "rgb(255,0,0)";
  //ctx.fillRect(0, 100, 300, 150);
  //ctx.beginPath();
  //ctx.moveTo(0, 0);
  //ctx.lineTo(300, 300);
  //ctx.moveTo(1200, 100);
  //ctx.lineTo(100, 100);

  //ctx.stroke();
}

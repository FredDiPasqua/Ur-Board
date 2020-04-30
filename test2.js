var cuadro = document.getElementById("canvas");
var papel = cuadro.getContext("2d");
var comienzo;
var comienzo2;
var final;
var final2;
cuadro.addEventListener("mousedown", startpaint);
cuadro.addEventListener("mouseup", endpaint);
cuadro.addEventListener("mouseup", linea);

function startpaint (clickdown) {
    comienzo = parseInt(clickdown.x);
    comienzo2 = parseInt(clickdown.y-75);
    console.log(clickdown.x);
    console.log(clickdown.y);
}

function endpaint (clickup) {
    final = parseInt(clickup.x);
    final2 = parseInt(clickup.y-75);
    console.log(clickup.x);
    console.log(clickup.y);
}

function linea () {
    dibujarLinea("pink", comienzo, comienzo2, final, final2, papel);
}

function dibujarLinea (color, xi, yi, xf, yf, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = 2;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath();
}

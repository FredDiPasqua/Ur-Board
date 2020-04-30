var cuadro = document.getElementById("canvas");
var hoja = cuadro.getContext("2d");
var xi, yi, xf, yf, click;
var color = "blue";

cuadro.addEventListener("mousedown", activar);
cuadro.addEventListener("mouseup", desactivar);
cuadro.addEventListener("mousemove", pintar);

function dibujarLinea(color, xi, yi, xf, yf, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath(); 
}

function activar(evento1) {
    var s = getComputedStyle(cuadro);
    var w = s.width;
    var h = s.height;
    cuadro.width = w.split("px")[0];
    cuadro.heigth = h.split("px")[0];

    click = true;
    xi = evento1.layerX;
    yi = evento1.layerY;
}

function pintar(evento2) {
    if (click) {
        xf = evento2.layerX;
        yf = evento2.layerY;
        dibujarLinea(color, xi, yi, xf, yf, hoja)
        xi = xf;
        yi = yf;
    }
}

function desactivar(evento3) {
    click = false;
}
var cuadro = document.getElementById("canvas");
var hoja = cuadro.getContext("2d");
var xi, yi, xf, yf, click;
var color = "black";

/* Responsive del canvas */
function resizing () {
    var s = getComputedStyle(cuadro);
    var w = s.width;
    var h = s.height;
    cuadro.width = w.split("px")[0];
    cuadro.heigth = h.split("px")[0];
}
window.addEventListener("resize", resizing);
window.addEventListener("load", resizing);
/* final responsive */


/* CONTROL DE COLORES */
var btnDropColor = document.getElementById("btndrop");
var changecolor1 = () => { color = "black"; btnDropColor.style.background = "black" };
var changecolor2 = () => { color = "red"; btnDropColor.style.background = "red" };
var changecolor3 = () => { color = "blue"; btnDropColor.style.background = "blue" };
var changecolor4 = () => { color = "blueviolet"; btnDropColor.style.background = "blueviolet" };
var changecolor5 = () => { color = "goldenrod"; btnDropColor.style.background = "goldenrod" };
var changecolor6 = () => { color = "green"; btnDropColor.style.background = "green" };
var changecolor7 = () => { color = "brown"; btnDropColor.style.background = "brown" };
var changecolor8 = () => { color = "palevioletred"; btnDropColor.style.background = "palevioletred" };
var changecolor9 = () => { color = "aqua"; btnDropColor.style.background = "aqua" };

document.getElementById("color1").addEventListener("click", changecolor1);
document.getElementById("color2").addEventListener("click", changecolor2);
document.getElementById("color3").addEventListener("click", changecolor3);
document.getElementById("color4").addEventListener("click", changecolor4);
document.getElementById("color5").addEventListener("click", changecolor5);
document.getElementById("color6").addEventListener("click", changecolor6);
document.getElementById("color7").addEventListener("click", changecolor7);
document.getElementById("color8").addEventListener("click", changecolor8);
document.getElementById("color9").addEventListener("click", changecolor9);
/*  final COLORES */

/* CONTROL DE GROSOR */
var wid = 1;
var widDisplay = document.getElementById("grosorDisplay");

var changeWidthL = () => { if(wid > 1) {wid--; widDisplay.textContent = wid; } }
var changeWidthM = () => { wid++; widDisplay.textContent = wid; }

document.getElementById("lessgrosorbtn").addEventListener("click", changeWidthL);
document.getElementById("moregrosorbtn").addEventListener("click", changeWidthM);
/* final GROSOR */

/* CONTROL CLEAR */
var clearAll = () => {hoja.clearRect(0, 0 , cuadro.width, cuadro.heigth); }
document.getElementById("clearbtn").addEventListener("click", clearAll);
/* final CLEAR */

/* CONTROL ERASE */
var eraser = () => { color = cuadro.style.background, wid=20, widDisplay.textContent = wid}
document.getElementById("erasebtn").addEventListener("click", eraser);
/* final ERASE */

/* CONTROL GUARDAR */
function saveI () {
    var imagen = cuadro.toDataURL("image/png");
    this.href = imagen;
}
document.getElementById("savebtn").addEventListener("click", saveI, false);
/* final GUARDAR */

/* CONTROL COLOR BACKGROUND */
var BgBtn = document.getElementById("bgbtn");
var changeBg1 = () => { cuadro.style.background = "white", BgBtn.style.background = "white"};
var changeBg2 = () => { cuadro.style.background = "yellowgreen", BgBtn.style.background = "yellowgreen"};
var changeBg3 = () => { cuadro.style.background = "violet", BgBtn.style.background = "violet"};
var changeBg4 = () => { cuadro.style.background = "tan", BgBtn.style.background = "tan"};
var changeBg5 = () => { cuadro.style.background = "slategray", BgBtn.style.background = "slategray"};
var changeBg6 = () => { cuadro.style.background = "salmon", BgBtn.style.background = "salmon"};
var changeBg7 = () => { cuadro.style.background = "powderblue", BgBtn.style.background = "powderblue"};
var changeBg8 = () => { cuadro.style.background = "rgb(255, 207, 119)", BgBtn.style.background = "rgb(255, 207, 119)"};
var changeBg9 = () => { cuadro.style.background = "mediumaquamarine", BgBtn.style.background = "mediumaquamarine"};

document.getElementById("colorbg1").addEventListener("click", changeBg1);
document.getElementById("colorbg2").addEventListener("click", changeBg2);
document.getElementById("colorbg3").addEventListener("click", changeBg3);
document.getElementById("colorbg4").addEventListener("click", changeBg4);
document.getElementById("colorbg5").addEventListener("click", changeBg5);
document.getElementById("colorbg6").addEventListener("click", changeBg6);
document.getElementById("colorbg7").addEventListener("click", changeBg7);
document.getElementById("colorbg8").addEventListener("click", changeBg8);
document.getElementById("colorbg9").addEventListener("click", changeBg9);
/* final COLOR BACKGROUND */

var desactivar = (evento3) => {click = false};

cuadro.addEventListener("mousedown", activar);
cuadro.addEventListener("mouseup", desactivar);
cuadro.addEventListener("mousemove", pintar);

// cuadro.addEventListener("touchstart", activar);
// cuadro.addEventListener("touchend", desactivar);
// cuadro.addEventListener("touchmove", pintar);


function dibujarLinea(color, xi, yi, xf, yf, lienzo) {
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = wid;
    lienzo.moveTo(xi, yi);
    lienzo.lineTo(xf, yf);
    lienzo.stroke();
    lienzo.closePath(); 
}

function activar(evento1) {
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

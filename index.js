var lienzo = document.getElementById("canvas");
var papel = lienzo.getContext("2d");
lienzo.addEventListener("mousemove", pintar);
lienzo.addEventListener("mousedown", activar);
lienzo.addEventListener("mouseup", desactivar);
document.getElementById("paintbtn").addEventListener("click", lapiz);
document.getElementById("erasebtn").addEventListener("click", borrador);

// var color = "black";
var color = document.getElementById("coloractual").value;
var size = 10;
var paint = false;

function pintar (event) {
    var x = event.clientX - 15;
    var y = event.clientY - 90;
    if (paint) {
        papel.fillStyle = color;
        papel.fillRect(x, y, size, size);
        // papel.beginPath();
        // papel.StrokeStyle = "black";
        // papel.moveTo(xi, yi);
        // papel.lineTo(xf, yf);
        // papel.stroke();
        // papel.closePath();
    }
}
function activar () {
    paint = true; 

}
function desactivar () {
    paint = false;
}

function borrador () {
    color = "white";
    document

}

function lapiz () {
    color = document.getElementById("coloractual").value;
}
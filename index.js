const canvas = document.getElementById("canvas");
// Nos ofrece propiedades que nos permite conocer cuanta distancia hay entre el top y el techo y entre el left y la pared
const dif = canvas.getBoundingClientRect();
const ctx = canvas.getContext("2d");
let painting, color, linewidth, difX, difY;

// cuando el mouse se apreta
canvas.addEventListener("mousedown", (e) => {
    // clientX nos devuelve en que punto está el mouse en el eje x
    // calculamos la diferencia que hay entre el mouse, el canvas y el principio del elemento
    difX = e.clientX - dif.left;
    // clientY nos devuelve en que punto está el mouse en el eje y
    difY = e.clientY - dif.top;
    painting = true;
    color = document.getElementById("color").value;
    linewidth = document.getElementById("lw").value;
    ctx.beginPath();
});
canvas.addEventListener("mouseup", () => {
    ctx.closePath();
    painting = false;
});
canvas.addEventListener("mousemove", (e) => {
    if (painting) {
        dibujar(difX, difY, e.clientX - dif.left, e.clientY - dif.top);
        difX = e.clientX - difX.left;
        difY = e.clientY - difY.top;
    }
});

const dibujar = (x1, y1, x2, y2) => {
    ctx.strokeStyle = color;
    ctx.lineWidth = linewidth;
    // moveTo es para mover el path a la posicion anterior
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.stroke();
};

let ponto = prompt('digite o horario (HH:MM)')

let p = ponto.indexOf(":");
let hr = Number(ponto.slice(0, p));
let min = Number(ponto.slice(p + 1));

let digitadoEmMinutos = hr * 60 + min;
let limiteEmMinutos = 21 * 60 + 30;

if (digitadoEmMinutos < limiteEmMinutos) {
    console.log("Hanna vai brigar com Vc!!!!")
} else {
    alert("vc esta a salvo da hanna (Por enquanto)")
}



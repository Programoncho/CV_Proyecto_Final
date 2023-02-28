const carta = `Escuche de la empresa gracias a varios compañeros de trabajo.
Dicen que es una de las empresas más avanzadas en tecnología, y que el ambiente
laboral es muy amigable y familiar.`;

const aspectos2 = `Realizo deportes con frecuencia, en especial natación.
Me gusta practicar con mi instrumento musical favorito, la guitarra.
`;

document.getElementById("boton1").addEventListener("click", function () {
    document.getElementById("parrafoVariable").innerText = carta;
});
document.getElementById("boton2").addEventListener("click", function () {
    document.getElementById("parrafoVariable").innerText = aspectos2;
});
document.getElementById("boton3").addEventListener("click", function () {
    document.getElementById("parrafoVariable").innerText = "";
});


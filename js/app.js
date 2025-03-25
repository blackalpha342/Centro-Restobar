document.addEventListener("DOMContentLoaded", function () {
    const entradasLista = document.getElementById("entradas-lista");

    // Listado de entradas
    const entradas = [
        { nombre: "Ceviche Clásico", img: "https://www.comedera.com/wp-content/uploads/2021/09/ceviche-peruano-.jpg", descripcion: "Delicioso ceviche de pescado fresco marinado en limón, acompañado de camote y choclo." },
        { nombre: "Papa a la Huancaína", img: "https://www.comedera.com/wp-content/uploads/2022/09/Papas-a-la-huancaina.jpg", descripcion: "Papas bañadas en una cremosa salsa de ají amarillo con queso y galletas." },
        { nombre: "Anticuchos", img: "https://www.peru.travel/Contenido/General/Imagen/es/28/1.1/anticuchos.jpg", descripcion: "Tradicionales brochetas de corazón de res marinadas con especias peruanas y acompañadas de papas doradas." },
        { nombre: "Causa Limeña", img: "https://www.comedera.com/wp-content/uploads/2022/09/causa-rellena.jpg", descripcion: "Puré de papa amarilla relleno de pollo o atún, con mayonesa y palta." }
    ];

    // Cargar entradas al DOM
    function cargarEntradas() {
        entradasLista.innerHTML = "";
        entradas.forEach(entrada => {
            const card = document.createElement("div");
            card.classList.add("card", "entrada");
            card.innerHTML = `
                <img src="${entrada.img}" alt="${entrada.nombre}">
                <h3>${entrada.nombre}</h3>
                <p>${entrada.descripcion}</p>
            `;
            entradasLista.appendChild(card);
        });
    }

    cargarEntradas();
});

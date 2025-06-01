async function actualizarCartelera() {
    const response = await fetch('data.json');
    const discos = await response.json();
    const contenedor = document.getElementById("cartelera");
    contenedor.innerHTML = "";

    const seleccion = discos.sort(() => 0.5 - Math.random()).slice(0, 6);

    seleccion.forEach((peli, i) => {
        const card = document.createElement("div");
        card.className = "col";
        card.innerHTML = `
          <div class="card h-100 shadow-sm">
            <img src="${peli.imagen}" class="card-img-top" alt="${peli.alt}" />
            <div class="card-body">
              <h5 class="card-title">${peli.titulo}</h5>
              <ul class="nav nav-tabs" id="tabs${i}" role="tablist">
                <li class="nav-item">
                  <button class="nav-link active" id="funciones${i}-tab" data-bs-toggle="tab" data-bs-target="#funciones${i}" type="button" role="tab">Funciones</button>
                </li>
                <li class="nav-item">
                  <button class="nav-link" id="sinopsis${i}-tab" data-bs-toggle="tab" data-bs-target="#sinopsis${i}" type="button" role="tab">Sinopsis</button>
                </li>
              </ul>
              <div class="tab-content mt-2">
                <div class="tab-pane fade show active" id="funciones${i}" role="tabpanel">${peli.funciones}</div>
                <div class="tab-pane fade" id="sinopsis${i}" role="tabpanel">${peli.sinopsis}</div>
              </div>
            </div>
          </div>
        `;
        contenedor.appendChild(card);
    });
}

actualizarCartelera();
setInterval(actualizarCartelera, 60000);
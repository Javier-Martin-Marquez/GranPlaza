fetch('data.json')
      .then(res => res.json())
      .then(data => {
        const contenedor = document.getElementById('cartelera');
        contenedor.innerHTML = '';
        data.forEach(item => {
          const col = document.createElement('div');
          col.className = 'col';

          col.innerHTML = `
            <div class="card h-100 shadow-sm text-center p-3">
              <img src="${item.imagen}" alt="${item.alt || item.titulo}" />
              <h5>${item.titulo}</h5>
              <p><strong>Funciones:</strong> ${item.funciones}</p>
              <p><strong>Sala:</strong> ${item.sala}</p>
              <p>${item.sinopsis}</p>
              <a href="https://www.cinesa.es/" target="_blank" class="btn btn-primary mt-2">Comprar Entradas</a>
            </div>
          `;
          contenedor.appendChild(col);
        });
      })
      .catch(err => {
        console.error('Error al cargar JSON:', err);
      });
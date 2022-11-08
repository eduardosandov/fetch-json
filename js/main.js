const norma = documet.querySelector('#normas');

function cargarNormas() {

    fetch('normas.json')
    .then(respuesta => respuesta.json())
    .then(normas => {
        normas.forEach(norma => {
            const card =document.createElement('card');
            card.classList = 'card';
            card.innerHTML += `
            <div class="container">
            <div>${norma.id} </div>
            <div>${norma.nombre} </div>
            </div>
            `;
            norma.appendChild(card);
        });
    })
    .catch(error => console.log('Hubo un error : ' + error.message))

}

cargarNormas();
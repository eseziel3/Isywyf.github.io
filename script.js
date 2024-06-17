let clickCount = 0;

const clickButton = document.getElementById('clickButton');
const clickCountDisplay = document.getElementById('clickCount');

clickButton.addEventListener('click', () => {
    clickCount++;
    clickCountDisplay.textContent = `${clickCount} clicks`;

    // Verificar si el contador llegó a 8272024
    if (clickCount === 8272024) {
        showSecretButton();
    }
});

function showSecretButton() {
    // Crear el botón secreto
    const secretButton = document.createElement('button');
    secretButton.textContent = '';

    // Añadir evento al botón secreto
    secretButton.addEventListener('click', () => {
        // Ocultar todo excepto el mensaje secreto
        document.getElementById('container').style.display = 'none';
        const body = document.querySelector('body');
        body.innerHTML = ''; // Limpiar todo el contenido del body

        // Mostrar el mensaje secreto
        const secretMessage = document.createElement('p');
        secretMessage.textContent = 'MegaboxSimple.aternos.me';
        body.appendChild(secretMessage);
    });

    // Añadir el botón secreto al cuerpo del documento
    document.body.appendChild(secretButton);
}

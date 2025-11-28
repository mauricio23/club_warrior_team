// Manejo del formulario de contacto
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    alert('Mensaje enviado. ¡Gracias por contactarnos!');
    // Aquí puedes agregar lógica para enviar el formulario a un servidor si es necesario
});
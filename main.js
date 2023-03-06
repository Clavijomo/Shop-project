const signBtn = document.querySelector('#sign');
const nameInput = document.querySelector('#name');
const formulario = document.querySelector('#formulario');
const btnSend = document.querySelector('#submit');

eventListeners();
function eventListeners(){
    formulario.addEventListener('submit', validar);
}

function validar(e){
    e.preventDefault();
    if(signBtn.value === ''){
        error('Debes ingresar una contraseña');
        return;
    }
    if(signBtn.value.length > 0 && signBtn.value.length <=6) {
        window.location.href = 'pdf.html';
        return;
    }           
    error('Contraseña incorrecta');
}

function error(mensaje){
    divMensaje = document.createElement('div');
    divMensaje.classList.add('error');
    mensajeError = document.createElement('p');    
    mensajeError.textContent = mensaje;
    divMensaje.appendChild(mensajeError);    

    setTimeout(() =>{
        divMensaje.remove();
    }, 3000)
    const errores = document.querySelectorAll('.error');
    if(errores.length === 0) {
        formulario.appendChild(divMensaje);
    }
}
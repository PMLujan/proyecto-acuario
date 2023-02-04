const datos={
    nombre:"",
    apellido:"",
    email:"",
    telefono:""
}
const nombre=document.getElementById('nombre');
const apellido=document.getElementById('apellido');
const email=document.getElementById('email');
const telefono=document.getElementById('telefono');
const formulario=document.querySelector('.formulario-contacto');

nombre.addEventListener('input',function (e){
    datos[e.target.id]= e.target.value;
})
apellido.addEventListener('input',function (e){
    datos[e.target.id]= e.target.value;
})
email.addEventListener('input',function (e){
    datos[e.target.id]= e.target.value;
})
telefono.addEventListener('input',function (e){
    datos[e.target.id]= e.target.value;
})

formulario.addEventListener('submit',function(e){
    e.preventDefault();
    const{nombre,apellido,email,telefono}=datos;
        if(nombre ==="" || apellido === "" || email === "" || telefono === ""){
            mostrarError('Completar todos los campos');
        }else{
            enviarMensaje('Mensaje enviado');
        }
})

function mostrarError(mensaje){
    const error= document.createElement('DIV');
          error.textContent= mensaje;
          error.classList.add('error');

          formulario.appendChild(error);

          setTimeout(() => {
            error.remove();
          }, 3000);

}

function enviarMensaje(mensaje){
    const error= document.createElement('DIV');
          error.textContent= mensaje;
          error.classList.add('mensaje');

          formulario.appendChild(error);

          setTimeout(() => {
            error.remove();
            location.reload();
          }, 3000);

}
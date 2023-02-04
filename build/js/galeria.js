document.addEventListener('DOMContentLoaded',function(){
        crearGaleria();
});
// crear galeria con fotos fechas
function crearGaleria(){
    const galeria=document.querySelector('.imagenes-galeria');
          for(let i=1; i <=12; i++){
             const imagen=document.createElement('div');
                imagen.innerHTML=`
                <img src="./img/imagen-chica/${i}.jpg" alt="galeria">`;
                imagen.classList.add('contenedor-imagen');

            imagen.onclick=function(){
                  mostrarImagen(i);
            }
                galeria.appendChild(imagen);
          }
};

// mostrar la version grande
function mostrarImagen(id){
      const imagen=document.createElement('div');
             imagen.innerHTML=`
                   <img src="./img/imagen-grande/${id}.jpg" alt="galeria">`;
            imagen.classList.add('contenedor-imagenGrande');

      const overlay =document.createElement('div'); //para el fondo opaco
            overlay.classList.add('overlayGaleria');
             overlay.appendChild(imagen);
             overlay.onclick=function(){ //para eliminarlo al tocar 
                  overlay.remove();
                  body.classList.remove('fijarBody');
            }

      const body=document.querySelector('body'); 
            body.classList.add('fijarBody');//para que no de scroll
            body.appendChild(overlay);

      //boton para cerrar imagen
      const cerrarModal=document.createElement('P');
            cerrarModal.textContent='X';
            cerrarModal.classList.add('btnCerrarModal');
            overlay.appendChild(cerrarModal);
            cerrarModal.onclick=function(){
                  overlay.remove();
                  body.classList.remove('fijarBody');
            }
}
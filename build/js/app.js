document.addEventListener('DOMContentLoaded', function(){
  
});

const check=document.querySelector('#check');
const elementosLista=document.querySelector('.list-element');

check.addEventListener('click', function(){
            const body=document.querySelector('body');
                body.classList.add('fijarBody');
    cerrarBody();
    check.disabled = true;                          //bloquea el menu hamburguesa
});

//CERRAR NAVEGADOR RESPONSIVO
function cerrarBody(){
             const body=document.querySelector('body');
             const lista=document.querySelector('.list-nav');
             const cierre=document.createElement('P');
                   cierre.textContent= 'X';
                   cierre.classList.add('btnCierre');
                   cierre.addEventListener('click',function(e){
                          e.preventDefault();
                          body.classList.remove('fijarBody');
                          check.checked=false;                         //deshabilita el check
                          check.disabled = false;                     //habilita el menu hamburguesa
                          cierre.remove();
                   });
  lista.appendChild(cierre);
}

// LINKS MENU RESPONSIVO

 const entradas=document.querySelector('.entradas');
 const especies=document.querySelector('.especies');
 const contacto=document.querySelector('.sumate');
 const lista=document.querySelector('.list-nav');
 const cierre=document.querySelector('.btnCierre');

 

 entradas.addEventListener('click',function(){
          body.classList.remove('fijarBody');
          check.checked=false;                         //deshabilita el check
          check.disabled = false;
          location.reload();
 });
 especies.addEventListener('click',function(){
          body.classList.remove('fijarBody');
          check.checked=false;                         //deshabilita el check
          check.disabled = false;
          location.reload();
});
contacto.addEventListener('click',function(){
          body.classList.remove('fijarBody');
          check.checked=false;                         //deshabilita el check
          check.disabled = false;
          location.reload();
});
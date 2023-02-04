document.addEventListener('DOMContentLoaded', function(){

});

//APERTURA DE VENTANA MODAL
const openModal=document.getElementById('btn-comprar-entradas');
const body=document.querySelector('body');
const modal=document.querySelector('.modal');
         
openModal.addEventListener('click',function(e){
                    e.preventDefault();
                    const modalContainer=document.querySelector('.modalContainer');
                    const cierreModal=document.createElement('P');
                          cierreModal.textContent="X";
                          cierreModal.classList.add('cierreModal');
                          cierreModal.addEventListener('click',function(){
                                body.classList.remove('fijarBody');
                                modal.classList.remove('modal--activo');
                                cierreModal.remove();
                            })
                    body.classList.add('fijarBody');
                    modal.classList.add('modal--activo');
            modalContainer.appendChild(cierreModal);

          });

// CALCULO VALOR DE ENTRADAS

const btnPagos=document.querySelector('#btn-realizar-pago');

btnPagos.addEventListener('click',function(e){
    const modalContainer=document.querySelector('.modalContainer');
    const tipoDeTicket=document.querySelector('.modalTickets').value;
    const cantidadTicket=document.querySelector('.cantidadTickets').value;
    const cierreModal=document.querySelector('.cierreModal');

    let totalApagar= calcularPago(tipoDeTicket,cantidadTicket);

    const infoApagar=document.createElement('P');
          infoApagar.textContent= `Total a pagar ${totalApagar}`;
          infoApagar.classList.add('infoApagar');

    btnPagos.remove();
    cierreModal.remove();
    modalContainer.appendChild(infoApagar);

    setTimeout(() => {
        infoApagar.remove();
        compraExitosa('Redirecting....')
    }, 3000);
    
    setTimeout(() => {
        location.reload();
    }, 5000);
});

function calcularPago(valor,cantidad){
    const modalContainer=document.querySelector('.modalContainer');
    const infoApagar=document.querySelector('.infoApagar');
    let precio= 0;
    switch(valor){
        case 'General':
            precio = 3000 * cantidad;
            break;
        case 'Niños':
                precio = 2500 * cantidad;
            break;
        case 'Estudiantes':
            precio =2000 * cantidad;
            break;
        case 'Adultos mayores':
                precio = 1500 * cantidad;
             break;
    }
    return precio;
}

function compraExitosa(mensaje){
    const modalContainer=document.querySelector('.modalContainer');
         let msj=document.createElement('P');
             msj.textContent= mensaje;
             msj.classList.add('msjCompra');
    modalContainer.appendChild(msj);
};
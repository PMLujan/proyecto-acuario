document.addEventListener('DOMContentLoaded', function(){
});
document.querySelector('.box1').addEventListener('click',boxSelected1);
document.querySelector('.box2').addEventListener('click',boxSelected2);
document.querySelector('.box3').addEventListener('click',boxSelected3);
document.querySelector('.box4').addEventListener('click',boxSelected4);

//variables

//caja1
const box1=document.querySelector('.box1');
const checkBox1=document.querySelector('.box1 .check');
const checkIcon1=document.querySelector('.box1 .fa-check');

//caja2

const box2=document.querySelector('.box2');
const checkBox2=document.querySelector('.box2 .check');
const checkIcon2=document.querySelector('.box2 .fa-check');

//caja3

const box3=document.querySelector('.box3');
const checkBox3=document.querySelector('.box3 .check');
const checkIcon3=document.querySelector('.box3  .fa-check');
//caja4
const box4=document.querySelector('.box4');
const checkBox4=document.querySelector('.box4 .check');
const checkIcon4=document.querySelector('.box4 .fa-check');

//funciones
function boxSelected1(){
        box1.classList.toggle('contenedor-seleccionado');
        checkBox1.classList.toggle('check-seleccionado');
        checkIcon1.classList.toggle('check-icono');
}
function boxSelected2(){
        box2.classList.toggle('contenedor-seleccionado');
        checkBox2.classList.toggle('check-seleccionado');
        checkIcon2.classList.toggle('check-icono');
}
function boxSelected3(){
        box3.classList.toggle('contenedor-seleccionado');
        checkBox3.classList.toggle('check-seleccionado');
        checkIcon3.classList.toggle('check-icono');
}
function boxSelected4(){
        box4.classList.toggle('contenedor-seleccionado');
        checkBox4.classList.toggle('check-seleccionado');
        checkIcon4.classList.toggle('check-icono');
}
let hr=min=seg=ms="0" + 0, iniciarTemporizador;

const botonIniciar=document.querySelector(".iniciar"),
botonDetener=document.querySelector(".detener"),
botonReiniciar=document.querySelector(".reiniciar");

botonIniciar.addEventListener("click",iniciar);
botonDetener.addEventListener("click",detener);
botonReiniciar.addEventListener("click",reiniciar);

function iniciar(){
    botonIniciar.classList.add("active");
    botonDetener.classList.remove("stopActive");
    iniciarTemporizador=setInterval(() => {
        ms++;
        ms=ms < 10 ? "0" + ms : ms;
        if(ms == 100){
            seg++;
            seg=seg < 10 ? "0" + seg : seg;
            ms="0" + 0;
        }
        if(seg == 100){
            min++;
            min=min < 10 ? "0" + min : min;
            seg="0" + 0;
        }
        if(min == 100){
            hr++;
            hr=hr < 10 ? "0" + hr : hr;
            min="0" + 0;
        }
        ponerValor();
    },10);
}

function detener(){
    botonIniciar.classList.remove("active");
    botonDetener. classList.remove("stopActive");
    clearInterval(iniciarTemporizador);
}

function reiniciar(){
    botonIniciar.classList.remove("active");
    botonDetener. classList.remove("stopActive");
    clearInterval(iniciarTemporizador);
    hr=min=seg=ms="0" + 0;
    ponerValor();
}
function ponerValor(){
    document.querySelector('.milisegundo'). innerHTML=ms;
    document.querySelector('.segundo'). innerHTML=seg;
    document.querySelector('.minuto'). innerHTML=min;
    document.querySelector('.hora'). innerHTML=hr;
}
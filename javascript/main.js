function StartSlide(){
const slide1 = document.getElementById("hero-1");
const slide2 = document.getElementById("hero-2");
const slide3 = document.getElementById("hero-3");

let slideAtual = 1

function alteraSlide(){

    if(slideAtual == 1){

        slide1.classList.remove('hero-none');
        slideAtual = 2;
    }else if(slideAtual == 2){
        slide1.classList.add('hero-none');
        slide2.classList.remove('hero-none');

        slideAtual = 3;
    }else if(slideAtual == 3){
        slide2.classList.add('hero-none');
        slide3.classList.remove('hero-none');
        slideAtual =4
    }else{
        slide3.classList.add('hero-none');
        slide1.classList.remove('hero-none');
        slideAtual = 1
    }
}

// Definindo o intervalo em milissegundos (por exemplo, 5 segundos = 5000 milissegundos)
const intervaloEmMilissegundos = 10000;

// Executando a função repetidamente com setInterval
const intervaloId = setInterval(alteraSlide, intervaloEmMilissegundos);

}
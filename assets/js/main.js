carregar();
function carregar(){
    var msg = document.getElementById("msg");
    var img = document.getElementById("imagem");
    var datas = new Date();
    var horario = datas.getHours();
    var min = datas.getMinutes();
    
    if(horario<10 && min<10)
        msg.innerHTML = `Agora são 0${horario}:0${min}`;
    else if(horario<10)
        msg.innerHTML = `Agora são 0${horario}:${min}`;
    else if(min<10)
        msg.innerHTML = `Agora são ${horario}:0${min}`;
    else
        msg.innerHTML = `Agora são ${horario}:${min}`;

    if(horario>=0 && horario<6){
        img.src='.assets/img/madrugada.jpg';
        document.body.style.background = '#634FA6';
    }else if((horario>=6 && horario<12)){
        img.src='assets/img/manha.jpg';
        document.body.style.background = '#E4D678';
    }else if(horario>=12 && horario<18){
        img.src='assets/img/tarde.jpg';
        document.body.style.background = '#F58656';
    }else{
        img.src='assets/img/noite.jpg';
        document.body.style.background = '#094D7C';
    }
}

function criaHoraDosSegundos(segundos){
    const data = new Date(segundos*1000);
    return data.toLocaleTimeString('pt-BR',{
        hour12: false,
        timeZone: 'GMT'
    });
}

console.log(criaHoraDosSegundos(10));

var inicia = document.getElementById('iniciar');
var pausa = document.getElementById('pausar');
var zera = document.getElementById('zerar');
const relogio = document.querySelector('.relogio');
let segundo = 0;
let hora =0;
let minuto=0;
console.log(relogio);
inicia.addEventListener('click', iniciar);
pausa.addEventListener('click', pausar);
zera.addEventListener('click', zerar)
var cron;

function iniciar(){
    relogio.classList.remove('textovermelho', 'textoverde');
    cron = setInterval(function(){
        segundo++;
        if(segundo==59){
            segundo=0;
            minuto++;
            if(minuto==59){
                minuto=0;
                hora++;
            }
        }
        if(segundo<10 && hora<10 && segundo<10)
            relogio.innerHTML = "0"+hora + ' : ' + "0"+minuto + ' : ' + "0"+segundo;
        else if(hora<10 && minuto<10)
            relogio.innerHTML = "0"+hora + ' : ' + "0"+minuto + ' : ' + segundo;
        else if(segundo<10)
            relogio.innerHTML = hora + ' : ' + minuto + ' : ' + "0"+segundo;
        else if(minuto<10)
            relogio.innerHTML = hora + ' : ' + "0"+minuto + ' : ' + segundo;
        else if(hora<10)
            relogio.innerHTML = "0"+hora + ' : ' + minuto + ' : ' + segundo;
        else
            relogio.innerHTML = hora + ' : ' + minuto + ' : ' + segundo;
            
    }, 1000);  
}

function pausar(){
    clearInterval(cron);
    relogio.classList.add('textoverde');
}

function zerar(){
    clearInterval(cron);
    minuto=0;
    segundo=0;
    hora=0;
    relogio.classList.remove('textoverde');
    relogio.classList.add('textovermelho');
    relogio.innerHTML = "0"+hora + ' : ' + "0"+minuto + ' : ' + "0"+segundo;
}

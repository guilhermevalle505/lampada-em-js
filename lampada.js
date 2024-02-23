const turnOn = document.getElementById('ligar');
const turnOff = document.getElementById('desligar');
const lamp = document.getElementById('lamp');

function ligar(){
   lamp.src = 'on.jpg' 
   alert("TETE")
}

turnOn.addEventListener('click', ligar);

function desligar(){
   lamp.src = 'off.jpg' 
   alert("TETE")
}

turnOff.addEventListener('click', desligar);
/*====================================================
 MUSEO DE NUESTRO AMOR
 script.js
 PARTE 3A
====================================================*/

const loader = document.getElementById("loader");
const welcome = document.getElementById("welcome");
const hall = document.getElementById("hall");
const finalScene = document.getElementById("finalScene");

const enterBtn = document.getElementById("enterMuseum");
const restartBtn = document.getElementById("restartMuseum");

const modal = document.getElementById("artModal");
const closeModal = document.getElementById("closeModal");
const nextArtwork = document.getElementById("nextArtwork");

const artTitle = document.getElementById("artTitle");
const artBody = document.getElementById("artBody");

const frames = document.querySelectorAll(".frame");

const leftDoor = document.querySelector(".left-door");
const rightDoor = document.querySelector(".right-door");

let visited = [];

/*========================
TEXTOS
========================*/

const artworks = {

1:{

title:"Donde Todo Comenzó",

text:`

Aquí irá el primer texto.

`

},

2:{

title:"Tu Sonrisa",

text:`

Aquí irá el segundo texto.

`

},

3:{

title:"Los Pequeños Momentos",

text:`

Aquí irá el tercer texto.

`

},

4:{

title:"Tu Esencia",

text:`

Aquí irá el cuarto texto.

`

},

5:{

title:"Nuestro Refugio",

text:`

Aquí irá el quinto texto.

`

},

6:{

title:"Incluso En La Distancia",

text:`

Aquí irá el sexto texto.

`

},

7:{

title:"Mis Sueños Contigo",

text:`

Aquí irá el séptimo texto.

`

},

8:{

title:"Gracias",

text:`

Aquí irá el octavo texto.

`

},

9:{

title:"La Obra Maestra",

text:`

Aquí irá el último mensaje.

`

}

};

/*========================
LOADER
========================*/

window.addEventListener("load",()=>{

setTimeout(()=>{

loader.style.opacity="0";

setTimeout(()=>{

loader.style.display="none";

},900);

},1800);

});

/*========================
ENTRAR AL MUSEO
========================*/

enterBtn.addEventListener("click",()=>{

leftDoor.style.transform="perspective(800px) rotateY(-110deg)";

rightDoor.style.transform="perspective(800px) rotateY(110deg)";

enterBtn.disabled=true;

setTimeout(()=>{

welcome.style.display="none";

hall.classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

},1800);

});

/*========================
ABRIR CUADROS
========================*/

frames.forEach(frame=>{

frame.addEventListener("click",()=>{

const id=Number(frame.dataset.room);

if(id===9 && visited.length<8){

alert("Primero recorre las demás obras del museo ❤️");

return;

}

openArtwork(id);

});

});

/*====================================================
 MUSEO DE NUESTRO AMOR
 script.js
 PARTE 3B
====================================================*/

/*========================
ABRIR OBRA
========================*/

function openArtwork(id){

const artwork = artworks[id];

artTitle.textContent = artwork.title;
artBody.innerHTML = artwork.text;

modal.classList.remove("hidden");

if(!visited.includes(id) && id !== 9){

visited.push(id);

const frame = document.querySelector(`[data-room="${id}"]`);

frame.style.opacity = ".6";
frame.style.transform = "scale(.97)";
frame.style.pointerEvents = "none";

const badge = document.createElement("div");

badge.innerHTML = "✔";

badge.style.position = "absolute";
badge.style.top = "12px";
badge.style.right = "12px";
badge.style.width = "34px";
badge.style.height = "34px";
badge.style.borderRadius = "50%";
badge.style.background = "#28c76f";
badge.style.color = "#fff";
badge.style.display = "flex";
badge.style.alignItems = "center";
badge.style.justifyContent = "center";
badge.style.fontWeight = "bold";
badge.style.fontSize = "1rem";

frame.appendChild(badge);

}

if(visited.length === 8){

const finalFrame = document.querySelector('[data-room="9"]');

finalFrame.style.animation = "pulseGold 1.2s infinite";

finalFrame.style.filter =
"drop-shadow(0 0 25px gold)";

const note = finalFrame.querySelector("small");

if(note){

note.innerHTML =
"✨ Ya puedes descubrir la última obra";

}

}

}

/*========================
CERRAR MODAL
========================*/

closeModal.addEventListener("click",()=>{

modal.classList.add("hidden");

});

nextArtwork.addEventListener("click",()=>{

modal.classList.add("hidden");

});

/*========================
CLIC FUERA DEL MODAL
========================*/

modal.addEventListener("click",(e)=>{

if(e.target===modal){

modal.classList.add("hidden");

}

});

/*========================
TECLA ESC
========================*/

document.addEventListener("keydown",(e)=>{

if(e.key==="Escape"){

modal.classList.add("hidden");

}

});

/*====================================================
 MUSEO DE NUESTRO AMOR
 script.js
 PARTE 3C
 Final del recorrido
====================================================*/

/*========================
MOSTRAR ESCENA FINAL
========================*/

function showFinalScene(){

modal.classList.add("hidden");

hall.classList.add("hidden");

finalScene.classList.remove("hidden");

window.scrollTo({

top:0,

behavior:"smooth"

});

createHearts();

}

/*========================
ÚLTIMA OBRA
========================*/

const originalOpenArtwork = openArtwork;
const finalFrame = document.querySelector('[data-room="9"]');

if(finalFrame){

finalFrame.addEventListener("click",()=>{

if(visited.length<8){

alert("Primero visita todas las obras ❤️");
return;

}

modal.classList.add("hidden");
hall.classList.add("hidden");
finalScene.classList.remove("hidden");

window.scrollTo({
top:0,
behavior:"smooth"
});

});

}

/*========================
REINICIAR
========================*/

restartBtn.addEventListener("click",()=>{

location.reload();

});

console.log("Museo iniciado correctamente");

/*========================
CORAZONES
========================*/

function createHearts(){

const container=document.querySelector(".final-hearts");

if(!container) return;

setInterval(()=>{

const heart=document.createElement("span");

heart.innerHTML="❤️";

heart.style.position="absolute";

heart.style.left=Math.random()*100+"%";

heart.style.bottom="-40px";

heart.style.fontSize=(18+Math.random()*28)+"px";

heart.style.opacity=Math.random();

heart.style.animation=
`floatHeart ${6+Math.random()*5}s linear forwards`;

container.appendChild(heart);

setTimeout(()=>{

heart.remove();

},11000);

},250);

}

/*========================
ANIMACIÓN JS
========================*/

const style=document.createElement("style");

style.innerHTML=`

@keyframes floatHeart{

0%{

transform:
translateY(0)
rotate(0deg);

opacity:0;

}

10%{

opacity:1;

}

100%{

transform:
translateY(-130vh)
rotate(360deg);

opacity:0;

}

}

`;

document.head.appendChild(style);

/*========================
DESTELLOS EN LOS CUADROS
========================*/

frames.forEach(frame=>{

frame.addEventListener("mouseenter",()=>{

frame.style.transition=".35s";

frame.style.boxShadow=
"0 0 30px rgba(212,175,55,.45)";

});

frame.addEventListener("mouseleave",()=>{

frame.style.boxShadow="none";

});

});

/*========================
MENSAJE FINAL
========================*/

console.log(
"🏛️ Museo de Nuestro Amor cargado correctamente ❤️"
);



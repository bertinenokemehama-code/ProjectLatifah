

const button = document.getElementById("start");

const music = document.getElementById("music");

button.onclick = () => {

music.volume = 0;

music.play();

let volume = 0;

const fade = setInterval(() => {

if(volume < 1){

volume += 0.05;

music.volume = volume;

}else{

clearInterval(fade);

}

},200);

document.querySelector(".scene2").scrollIntoView({

behavior:"smooth"

});

typeWriter();

}
const text = "Every beautiful story has a beginning...";

let i = 0;

function typeWriter(){

if(i < text.length){

document.getElementById("typing").innerHTML += text.charAt(i);

i++;

setTimeout(typeWriter,70);

}

}

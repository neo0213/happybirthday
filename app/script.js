let btn = document.getElementById('btn1');
let loc = btn.getBoundingClientRect();
let x = loc.left;
let y = loc.top;
var height = document.body.clientHeight;
var width = document.body.clientWidth;
let myimg = document.querySelector('#my_image');

console.log(cont)


function clicked(){
    let names = [ "posohan 👌", "audicity 😁", "home depot 👍", "poste 😎", "archayb 🫥" , "no it not 🤣", "i didnt mind 😘", "finash 🤯", ]
    let imgs = [
        "./1.jpg", "./2.gif" , "./3.gif" , "./4.gif" , "./5.gif"
    ]
    
    x = Math.floor(Math.random()* 100) + "vw";
    y = Math.floor(Math.random()* 100) + "vh";
    btn.style.left = x;
    btn.style.top = y;

    let rndm = Math.floor(Math.random()* names.length);
    btn.innerText = names[rndm];

    imagess = imgs[Math.floor(Math.random()*imgs.length)];
    
    myimg.src = imagess;

    if (imagess == "./5.gif"){
        
        var snd = new Audio("amogus.mp3"); // buffers automatically when created
        snd.play();
    }

    if (imagess == "./2.gif"){
        
        var snd = new Audio("haha.mp3"); // buffers automatically when created
        snd.play();
    }
}
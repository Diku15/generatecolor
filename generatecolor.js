let btn = document.querySelector('button');
let h = document.querySelector('h3');
let divo = document.querySelector('div');
btn.addEventListener('click' , function () {
    console.log("button clicked");
    h.innerText = randomno();
    divo.style.backgroundColor = randomno();
} );
function randomno() {
    let r = Math.floor(Math.random()*255);
    let b = Math.floor(Math.random()*255);
    let h = Math.floor(Math.random()*255);
    return `rgb(${r},${b},${h})`;
}
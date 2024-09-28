const Bar = document.getElementById('bar');
const nav =  document.getElementById('navbar');
const close =  document.getElementById('close');

let Mainimg = document.getElementById('Mainimg');
let smallimg = document.getElementsByClassName('small-img');

if(Bar){
    Bar.addEventListener('click', () =>{
        nav.classList.add('active');
    } )
}
if(close){
    close.addEventListener('click',() => {
        nav.classList.remove('active');
    })
}

if(smallimg[0]){
    smallimg[0].addEventListener('click', () => {
        Mainimg.src = smallimg[0].src;
    })
}
if(smallimg[1]){
    smallimg[1].addEventListener('click', () => {
        Mainimg.src = smallimg[1].src;
    })
}
if(smallimg[2]){
    smallimg[2].addEventListener('click', () => {
        Mainimg.src = smallimg[0].src;
    })
}
if(smallimg[3]){
    smallimg[3].addEventListener('click', () => {
        Mainimg.src = smallimg[3].src;
    })
}
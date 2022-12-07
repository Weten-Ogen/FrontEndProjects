const  hex = [ 0, 1, 2, 3,4,5,6,7,8,9,'A','B','C','D','E','F'],
btn = document.getElementById('btn'),
color = document.querySelector('.color');

function makeColor(){
    let hexColor= '#', randNum;
    
    for (let i = 0 ; i < 6 ; i++){
        randNum = Math.floor(Math.random() *15)
        hexColor += hex[randNum];
    }
    color.textContent = hexColor;
    document.body.style.backgroundColor = hexColor;
}
btn.addEventListener('click', makeColor);
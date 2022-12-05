const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn = document.getElementById('btn'),
color = document.querySelector('.color'); 


function ChangeColorVal(){
    // Get random num btwn 0...3
    const randomNum = Math.floor(Math.random() * colors.length);
    document.body.style.backgroundColor = colors[randomNum];
    color.textContent = colors[randomNum];
}

// Event listeners 
btn.addEventListener('click', ChangeColorVal);
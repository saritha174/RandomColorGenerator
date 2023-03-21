//Accessing the elements
const colorbox = document.getElementById('color')
const randomcode = document.getElementById('displaycode')
function generateRandomColor(){
    let red = Math.floor(Math.random()*256);
    let green = Math.floor(Math.random()*256);
    let blue = Math.floor(Math.random()*256);
    let color = `rgb(${red},${green},${blue})`;
    colorbox.style.backgroundColor = color;
    randomcode.textContent = color;
}


   
    
    

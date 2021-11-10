let balloons = document.getElementById("balloons");
let slider = document.getElementById("slider");

function size(){
    console.log("size");
    let size = slider.value;
    console.log(slider.value);
   balloons.style.transform = `resizeX(${value}wh)`;
}
slider.addEventListener('input', size);

import floorPicker from "./floorPicker.js";
import timeSlider from "./timeSlider.js";
import canvas from "./canvas.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("DOM loaded");
    // deploy different components
    floorPicker();
    timeSlider();
    canvas();
    heatmap()
}


// helper functions go here
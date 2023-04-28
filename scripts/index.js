import floorPicker from "./floorPicker.js";
import timeSlider from "./timeSlider.js";

document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("DOM loaded");
    // deploy different components
    floorPicker();
    timeSlider();
}


// helper functions go here
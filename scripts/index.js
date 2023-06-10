import canvas from "./canvas.js";
import datePicker from "./datePicker.js";
import { fetchData } from "./fetch.js";
import floorPicker from "./floorPicker.js";
document.addEventListener("DOMContentLoaded", init);

function init() {
    console.log("DOM loaded");
    // deploy different components
    floorPicker();
    datePicker();
    //timeSlider();
    canvas();
    fetchData();
}


// helper functions go here

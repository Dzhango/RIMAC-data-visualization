import canvas from "./canvas.js";
import { fetchData } from "./fetch.js";

export default function floorPicker() {
    const selectTag = document.querySelector("#floorpicker");
    // when client clicked on select element 
    selectTag.addEventListener("click", handleClick)
}

function handleClick(e) {
    const selectTag = e.target;
    selectTag.addEventListener("change", handleChange);
}

function handleChange(e) {
    // load image into canvas
    const optionValue = e.target.value;
    const canv = document.querySelector("canvas");
    canv.dataset.map = optionValue;
    canvas();
    fetchData();
    // remove event listeners 
    e.target.removeEventListener("change", handleChange);
}
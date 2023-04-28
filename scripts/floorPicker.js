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
    const canvas = document.querySelector("canvas");
    canvas.style.backgroundImage = `url('maps/${optionValue}.png')`;

    // remove event listeners 
    e.target.removeEventListener("change", handleChange);
}
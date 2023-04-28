const timeSlider = document.getElementById("slider");
const timeDisplay = document.getElementById("time-display");

const timeConvert = (val) => {
    if (val < 0 || val > 1339) return "ERROR";
    const hours = `${Math.floor(val / 60)}`;
    const minutes = `${val % 60}`;
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
}

timeSlider.addEventListener("input", () => {
    timeDisplay.innerText = `${timeConvert(timeSlider.value)} / 23:59`;
})
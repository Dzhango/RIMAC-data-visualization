import {getDate} from "./fetch.js";
export default function timeSlider() {
    const timeSlider = document.getElementById("slider");
    const timeDisplay = document.getElementById("time-display");

    timeSlider.addEventListener("input", () => {
        timeDisplay.innerText = `${timeConvert(timeSlider.value)} / 23:59`;
	let date = new Date(getDate());
	//console.log(date);
	const hours = Math.floor(timeSlider.value / 60);
	const minutes = timeSlider.value % 60;
	let time = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
	console.log(time);
    console.log(time.valueOf());
	//console.log(time.valueOf());
	
    })
}

const timeConvert = (val) => {
    if (val < 0 || val > 1339) return "ERROR";
    const hours = `${Math.floor(val / 60)}`;
    const minutes = `${val % 60}`;
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
}


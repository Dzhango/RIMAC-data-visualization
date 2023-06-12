import canvas, { convertCoords, height, width } from './canvas.js';
import { getDate } from './fetch.js';
const MAP_DATA = {
    "RIMAC 1st Floor": {
        id: "1st-floor-map",
        width: 786,
        height: 746.7,
        ox: 741.5,
        oy: 427.4,
        devices: {
            X: { x: 755.7, y: 172.4 },
            M: { x: 700, y: 555 }
        }
    },
    "RIMAC 2nd Floor": {
        id: "2nd-floor-map",
        width: 950,
        height: 674.5,
        ox: 641,
        oy: 427,
        devices: {
            B: { x: 499.2, y: 456.35 },
            C: { x: 411.93, y: 247.5 },
            F: { x: 561, y: 330 },
            G: { x: 266.3, y: 374.7 }
        }
    },
    "RIMAC 3rd Floor": {
        id: "3rd-floor-map",
        width: 660,
        height: 422.4,
        ox: 334,
        oy: 323.6,
        devices: {
            A: { x: 236.1, y: 353.54 },
            I: { x: 526.7, y: 360.26 },
            K: { x: 560.54, y: 232.65 },
            L: { x: 468.3, y: 497.4 },
            P: { x: 379.93, y: 443.47 },
            Q: { x: 228.7, y: 470.6 },
            R: { x: 207.3, y: 160.3 },
            V: { x: 34.64, y: 297.9 }
        }
    },
    "RIMAC 4th Floor": {
        id: "4th-floor-map",
        width: 1147,
        height: 665.26,
        ox: 547,
        oy: 407,
        devices: {}
    },
    "Annex 1st Floor": {
        id: "annex-1st-map",
        width: 258.8,
        height: 449.8,
        ox: 107.4,
        oy: 799,
        devices: {
            U: { x: 35.3, y: 771.95 },
            D: { x: 14, y: 944 }
        }
    },
    "Annex 2nd Floor": {
        id: "annex-2nd-map",
        width: 154.09,
        height: 367.63,
        ox: 75.5,
        oy: 772.2,
        devices: {
            H: { x: 51.1, y: 814.2 },
            W: { x: 29.63, y: 724.56 },
            E: { x: 71.3, y: 675.35 }
        }
    },
    "Annex Lower Floor": {
        id: "annex-lower-map",
        width: 247.2,
        height: 397,
        ox: 122.3,
        oy: 821.2,
        devices: {
            O: { x: 35.4, y: 946.1 }
        }
    }
}
export default function timeSlider(slicedData, data) {
    const timeSlider = document.getElementById("slider");
    const timeDisplay = document.getElementById("time-display");
    var store = 0;
    timeSlider.addEventListener("input", () => {
        timeDisplay.innerText = `${timeConvert(timeSlider.value)} / 23:00`;
        let date = new Date(getDate());
	    //console.log(date);
	    const hours = Math.floor((timeSlider.value - 420) / 60);
	    const minutes = timeSlider.value % 60;
	    let time = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
        store = time.valueOf();
        draw(slicedData, data, store);
    })
    
    
}

const timeConvert = (val) => {
    if (val < 0 || val > 1380) return "ERROR";
    const hours = `${Math.floor(val / 60)}`;
    const minutes = `${val % 60}`;
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
}

function draw(sliceData, data, time) {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    ctx.canvas.width = width;
    ctx.canvas.height = height;
    canvas();
    var heatmapOn = document.getElementById('mySwitch').checked;
    const mySwitch = document.getElementById('mySwitch');

    mySwitch.addEventListener('change', function() {
        draw(sliceData, data, time);
    });


    ctx.fillStyle = heatmapOn ? 'rgba(255, 200, 130, 0.23)' : 'rgba(255, 200, 130, 0.8)'; // semi-transparent blue or solid blue based on the heatmap state
    const radius = heatmapOn ? 25 : 5; 
    let floor = data['floor_name'][0];
    let floorInfo = MAP_DATA[floor];
    for (let i in sliceData[time.valueOf()]){
        let x = data['x'][`${i}`];
        let y = data['y'][`${i}`];
        const [devx, devy] = convertCoords(x, y, floorInfo.ox, floorInfo.oy, floorInfo.width, floorInfo.height, width, height);
        ctx.beginPath();
        ctx.arc(devx, devy, radius, 0, 2 * Math.PI);
        ctx.fill();
    }
}

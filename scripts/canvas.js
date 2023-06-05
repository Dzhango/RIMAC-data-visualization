import mock from "./mock.js";

const MAP_DATA = {
    "1st-floor": {
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
    "2nd-floor": {
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
    "3rd-floor": {
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
    "4th-floor": {
        id: "4th-floor-map",
        width: 1147,
        height: 665.26,
        ox: 547,
        oy: 407,
        devices: {}
    },
    "Annex-1st": {
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
    "Annex-2nd": {
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
    "Annex-lower-level": {
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

const Sample_Data = {
    "1st-floor": {
        id: "1st-floor-map",
        width: 786,
        height: 746.7,
        ox: 741.5,
        oy: 427.4,
        points: {
            p1: { x: 700, y: 120 },
            p2: { x: 700, y: 150 }
        }
    },
    "2nd-floor": {
        id: "2nd-floor-map",
        width: 950,
        height: 674.5,
        ox: 641,
        oy: 427,
        points: {
            p14: { x: 710.7, y: 470.6 },
            p15: { x: 800.3, y: 190.3 },
            p16: { x: 700.64, y: 360.9 },
            p17: { x: 390.1, y: 176.54 },
            p18: { x: 523.7, y: 346.26 },
            p19: { x: 345.54, y: 230.65 },
            p20: { x: 364.3, y: 214.4 },
            p21: { x: 370.93, y: 280.47 },
            p22: { x: 419.7, y: 269.6 },
            p23: { x: 430.3, y: 300.3 }
        }
    },
    "3rd-floor": {
        id: "3rd-floor-map",
        width: 660,
        height: 422.4,
        ox: 334,
        oy: 323.6,
        points: {
            p1: { x: 100, y: 160 },
            p2: { x: 200, y: 200 },
            p3: { x: 300, y: 300 },
            p4: { x: 400, y: 400 },
            p5: { x: 500, y: 330 },
            p6: { x: 600, y: 410 },
            p7: { x: 550, y: 380 },
            p8: { x: 320, y: 190 },
            p9: { x: 250.1, y: 310.54 },
            p10: { x: 540.7, y: 215.26 },
            p11: { x: 580.54, y: 270.65 },
            p12: { x: 430.3, y: 256.4 },
            p13: { x: 360.93, y: 440.47 },
            p14: { x: 210.7, y: 470.6 },
            p15: { x: 180.3, y: 190.3 },
            p16: { x: 90.64, y: 360.9 },
            p17: { x: 230.1, y: 176.54 },
            p18: { x: 523.7, y: 346.26 },
            p19: { x: 345.54, y: 230.65 },
            p20: { x: 364.3, y: 214.4 },
            p21: { x: 370.93, y: 280.47 },
            p22: { x: 419.7, y: 269.6 },
            p23: { x: 430.3, y: 300.3 },
            p24: { x: 70.64, y: 450.9 }
        }
    },
    "4th-floor": {
        id: "4th-floor-map",
        width: 1147,
        height: 665.26,
        ox: 547,
        oy: 407,
        points: {}
    },
    "Annex-1st": {
        id: "annex-1st-map",
        width: 258.8,
        height: 449.8,
        ox: 107.4,
        oy: 799,
        points: {
            U: { x: 35.3, y: 771.95 },
            D: { x: 14, y: 944 }
        }
    },
    "Annex-2nd": {
        id: "annex-2nd-map",
        width: 154.09,
        height: 367.63,
        ox: 75.5,
        oy: 772.2,
        points: {
            H: { x: 51.1, y: 814.2 },
            W: { x: 29.63, y: 724.56 },
            E: { x: 71.3, y: 675.35 }
        }
    },
    "Annex-lower-level": {
        id: "annex-lower-map",
        width: 247.2,
        height: 397,
        ox: 122.3,
        oy: 821.2,
        points: {
            O: { x: 35.4, y: 946.1 }
        }
    }
}


/**
 * Converts coordinates from Desmos to canvas coordinates
 * @param {float} x The x coordinate in Desmos
 * @param {float} y The y coordinate in Desmos
 * @param {float} ox The x-offset of the center of the map from the origin in Desmos
 * @param {float} oy The y-offset of the center of the map from the origin in Desmos
 * @param {float} mw The width of the map in Desmos
 * @param {float} mh The height of the map in Desmos
 * @param {float} cw The width of the canvas
 * @param {float} ch The height of the canvas
 * @returns Returns a 2-tuple of the new x and y coordinates in canvas terms
 */
function convertCoords(x, y, ox, oy, mw, mh, cw, ch) {
    let scale = ch / mh;
    let centerOffset = (cw - mw * scale) / 2;
    return [(x - ox + mw / 2) * scale + centerOffset, -(y - oy - mh / 2) * scale];
}

export default function canvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");

    const { width, height } = c.getBoundingClientRect();
    ctx.canvas.width = width;
    ctx.canvas.height = height;

    const mapName = c.dataset.map;
    const mapData = MAP_DATA[mapName];
    const scale = height / mapData.height;
    const image = document.getElementById(mapData.id);

    const samplePoint = Sample_Data[mapName];
    const sampleScale = height / samplePoint.height;
    const sampleImage = document.getElementById(samplePoint.id);

    var heatmapOn = false;
    const mySwitch = document.getElementById('mySwitch');

    mySwitch.addEventListener('change', function() {
        if (mySwitch.checked) {
            heatmapOn = true;
            console.log('Switch is ON');
        } else {
            heatmapOn = false;
            console.log('Switch is OFF');
        }
        redrawCanvas();
    });

    function drawMap() {
        ctx.drawImage(image, (width - mapData.width * scale) / 2, 0, mapData.width * scale, mapData.height * scale);
        ctx.drawImage(sampleImage, (width - samplePoint.width * sampleScale) / 2, 0, samplePoint.width * sampleScale, samplePoint.height * sampleScale);
    }

    function drawRedPoints() {
        ctx.fillStyle = "#f3172a";

        for (let devName in mapData.devices) {
            const device = mapData.devices[devName];
            const [devx, devy] = convertCoords(device.x, device.y, mapData.ox, mapData.oy, mapData.width, mapData.height, width, height);

            ctx.beginPath();
            ctx.arc(devx, devy, 5, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    function drawPoints() {
        ctx.fillStyle = heatmapOn ? 'rgba(0, 0, 255, 0.3)' : 'rgba(0, 0, 255, 1)'; // semi-transparent blue or solid blue based on the heatmap state
        const radius = heatmapOn ? 40 : 5; // larger radius for heatmap mode

        for (let devName in samplePoint.points) {
            const device = samplePoint.points[devName];
            const [devx, devy] = convertCoords(device.x, device.y, samplePoint.ox, samplePoint.oy, samplePoint.width, samplePoint.height, width, height);
    
            ctx.beginPath();
            ctx.arc(devx, devy, radius, 0, 2 * Math.PI);
            ctx.fill();
        }
    }

    function redrawCanvas() {
        ctx.clearRect(0, 0, width, height); // clear the canvas
        drawMap(); // redraw the map
        drawRedPoints(); // redraw the red points
        drawPoints(); // redraw the points
    }

    // Initially draw the canvas
    redrawCanvas();
}

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

// canvas logic goes here
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
    ctx.drawImage(image, (width - mapData.width * scale) / 2, 0, mapData.width * scale, mapData.height * scale);

    ctx.fillStyle = "#f3172d";

    for (let devName in mapData.devices) {
        const device = mapData.devices[devName];
        const [devx, devy] = convertCoords(device.x, device.y, mapData.ox, mapData.oy, mapData.width, mapData.height, width, height);

        ctx.beginPath();
        ctx.arc(devx, devy, 5, 0, 2 * Math.PI);
        ctx.fill();
    }
}
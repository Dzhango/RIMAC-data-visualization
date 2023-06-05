// Create a heatmap instance
let heatmapInstance = h337.create({
    container: document.querySelector('#heatmap-section'),
});

// Now we'll generate some random data for the heatmap
let points = [];
let max = 0;
let width = 800;
let height = 600;
let len = 200;

while (len--) {
    let val = Math.floor(Math.random()*100);
    max = Math.max(max, val);
    let point = {
        x: Math.floor(Math.random()*width),
        y: Math.floor(Math.random()*height),
        value: val
    };
    points.push(point);
}

// Now we'll create the data object for the heatmap
let data = {
    max: max,
    data: points
};

// And finally, add the data to the heatmap
heatmapInstance.setData(data);

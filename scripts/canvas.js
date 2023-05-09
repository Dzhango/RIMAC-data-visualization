// canvas logic goes here
export default function canvas() {
    var c = document.getElementById("myCanvas");
    var ctx = c.getContext("2d");
    // flips y axis
    // ctx.transform(1, 0, 0, -1, 0, c.height);
    // ctx.font = "30px Arial";
    // ctx.fillText("Hello World", 10, 50);
    ctx.fillStyle = "#f3172d";
    ctx.fillRect(78, 133, 3, 3);
    ctx.fillRect(13, 82, 3, 3);
    ctx.fillRect(105, 62, 3, 3);

    const coordinates = [
        [25, 78],
        [65, 98],
        [94, 89],
        [72, 134],
        [37, 70],
        [47, 123],
        [83, 75],
        [54, 118],
        [68, 69],
        [76, 105],
        [92, 129],
        [28, 103],
        [43, 88],
        [60, 132],
        [88, 79],
        [33, 118],
        [41, 64],
        [79, 131],
        [97, 72],
        [50, 98]
    ];

    coordinates.forEach((value) => {
        ctx.fillRect(value[0], value[1], 2, 2);
    })
}
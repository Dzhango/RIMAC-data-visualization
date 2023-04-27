
const floors = [
    {   
        name: "First Floor",
        image: "./maps/1st-floor.png",
    },
    {   
        name: "Second Floor",
        image: "./maps/second-floor.png",
    },
    {   
        name: "Third Floor",
        image: "./maps/3rd-floor.png",
    },
    {   
        name: "Fourth Floor",
        image: "./maps/4th-floor.png",
    },
    {   
        name: "Annex First Floor",
        image: "./maps/Annex-1st.png",
    },
    {   
        name: "Annex Second Floor",
        image: "./maps/Annex-2nd.png",
    },
    {   
        name: "Annex Lower Floor",
        image: "./maps/Annex-lower-level.png",
    },
]


function getTime(minutes){
    let hours = 5 + Math.floor(minutes/60);
    let mins = minutes % 60;
    if (mins < 10){
        mins = "0"+mins;
    }
    let day = "AM"
    if (hours > 11 && hours < 24){
        day = "PM";
    }
    if (hours > 12){
        hours -= 12;
    }
    let stringTime = hours + ":" + mins + " " + day;
    return stringTime;
}

function setup() {
    const floorPicker = document.getElementById("floorPicker");
    for (i in floors) {
        floorPicker.innerHTML += "<option value=\""+i+"\">"+floors[i].name+"</option>";
    }
    changeFloor();
    const time = document.getElementById("time");
    const sliderInput = document.getElementById("slider")
    console.log(sliderInput.value)
    sliderInput.addEventListener("input", (event) => {
        time.textContent = getTime(event.target.value);
    })
}

function changeFloor() {
    const floorPicker = document.getElementById("floorPicker");
    const floorImage = document.getElementById("floorImage");
    floorImage.src = floors[floorPicker.selectedIndex].image;
}

function sliderUpdate(){


}

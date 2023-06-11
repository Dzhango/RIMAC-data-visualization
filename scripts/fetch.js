import timeSlider from './timeSlider.js';

export function getDate(){
    const selectTag = document.querySelector('input[type="date"]');
    let value = selectTag.value;
    let inputDate = new Date(value);
    let adjustedDate = new Date(inputDate.getTime() + inputDate.getTimezoneOffset() * 60000);
    return adjustedDate.valueOf();
}


function getFloor(){
    const selectTag = document.querySelector("#floorpicker");
    console.log(selectTag);
    let value = selectTag.value;
    if (value === "1st-floor"){
        return "RIMAC+1st+Floor";
    }else if (value === "2nd-floor"){
        return "RIMAC+2nd+Floor";
    }else if (value === "3rd-floor"){
        return "RIMAC+3rd+Floor";
    }else if (value === "4th-floor"){
        return "RIMAC+4th+Floor";
    }else if (value === "Annex-1st"){
        return "Annex+1st+Floor";
    }else if (value === "Annex-2nd"){
        return "Annex+2nd+Floor";
    }else if (value === "Annex-lower-level"){
        return "Annex+Lower+Floor";
    }
}
function sliceData(data){   
    let slicedData = {};
    for (let i in data["ts_5min"]){
        if (data['ts_5min'][i] in slicedData){
            slicedData[data['ts_5min'][i]].push(i);
        }else{
            slicedData[data['ts_5min'][i]] = [i];
        }
    }
    console.log(slicedData);
    return slicedData;
}

export async function fetchData(){
    let floor = getFloor();
    let date = getDate();
    let promise = new Promise(async (resolve, reject) =>{
        try{
            console.log(`http://cse191.ucsd.edu/api/get-floor-data?floor_name=${floor}&date=${date}`);
            const response = await fetch(`http://cse191.ucsd.edu/api/get-floor-data?floor_name=${floor}&date=${date}`, {mode: 'cors'});
            if (!response.ok){
                throw new Error('Request failed with status' + response.status);
            }
            const data = await response.json();
            resolve(data);
        }catch (error){
            reject(error);
        }
    });
    promise
        .then(result =>{
            try{
                console.log(JSON.parse(result));
                console.log("successful!")
            }catch(error){
                console.log("Server did not give a valid response");
            }
            timeSlider(sliceData(JSON.parse(result)), JSON.parse(result))
            //return JSON.parse(result);
        })
        .catch(error =>{
            console.error(error);
            alert("Server did not give a valid response, please reload the page!");
        })
}
/*
function timeSlider() {
    const timeSlider = document.getElementById("slider");
    const timeDisplay = document.getElementById("time-display");
    let sliceData = fetchData();

    timeSlider.addEventListener("input", () => {
        timeDisplay.innerText = `${timeConvert(timeSlider.value)} / 23:59`;
        let date = new Date(getDate());
	    //console.log(date);
	    const hours = Math.floor(timeSlider.value / 60);
	    const minutes = timeSlider.value % 60;
	    let time = new Date(date.getFullYear(), date.getMonth(), date.getDate(), hours, minutes);
	    for (let i in sliceData[time.valueOf()]){
            heatmapInstance.setData()
        }
        
	    //console.log(time.valueOf());

    })
}

const timeConvert = (val) => {
    if (val < 0 || val > 1339) return "ERROR";
    const hours = `${Math.floor(val / 60)}`;
    const minutes = `${val % 60}`;
    return `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
}*/

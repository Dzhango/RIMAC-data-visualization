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

export function fetchData(){
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
            console.log(result);
            return result;
        })
        .catch(error =>{
            console.error(error);
        })
}
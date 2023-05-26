import {fetchData} from "./fetch.js";
export default function datePicker() {
    const selectTag = document.querySelector('input[type="date"]');
    console.log(selectTag);
    // when client clicked on select element 
    selectTag.addEventListener("change", handleChange);
}

function handleChange(e) {
   
    console.log(fetchData());
    // remove event listeners 
    e.target.removeEventListener("change", handleChange);
}
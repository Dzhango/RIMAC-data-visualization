import { fetchData } from "./fetch.js";
export default function datePicker() {
    const selectTag = document.querySelector('input[type="date"]');
    selectTag.defaultValue = "2023-05-08";
    // When the date changes
    selectTag.addEventListener("change", handleChange);
}

function handleChange(e) {
    // When the date changes, fetch data.
    console.log(fetchData());
}
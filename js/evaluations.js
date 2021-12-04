window.addEventListener("click", (ev) => {
    if (ev.target.className == "dropdown-item") {
        document.getElementById("semesterDropdownButton").innerText = ev.target.innerText;
    }
})

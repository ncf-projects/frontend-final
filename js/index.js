function createCard(className, classCategory, crn, currentDesignation) {
    return (`
    <div class="card ml-1 mr-1">
        <div class="card-body">
            <h4 class="card-title">${className}</h4>
            <h5 class="card-subtitle text-muted">${classCategory}</h5>
            <div class="jumbotron-fluid pt-3 pl-1">
                <h6 class="card-subtitle underline inline">CRN:</h6>
                <span>&nbsp;</span>
                <span class="text-muted">${crn}</span>
                <br>
                <h6 class="card-subtitle underline inline">Designation:</h6>
                <span>&nbsp;</span>
                <span class="text-muted">${currentDesignation}</span>
            </div>
        </div>
        <div class="card-body">
            <div href="#" class="row ml-auto mr-auto">
                <a href="#" class="card-link ml-auto mr-auto">View Info</a>
            </div>
        </div>
    </div>
    `);
}

window.addEventListener("load", () => {
    const cardRow = document.getElementById("cardRow");
    cardRow.innerHTML += createCard("Music Production", "Creative Arts", 634255, "SAT");
    cardRow.innerHTML += createCard("Roman History", "History", 536612, "SAT");
})
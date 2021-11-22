function createCard(cardTitle, cardSubtitle, cardText) {
    return (`
    <div class="card ml-1 mr-1">
        <div class="card-body">
            <h4 class="card-title">${cardTitle}</h4>
            <h6 class="card-subtitle text-muted">${cardSubtitle}</h6>
        </div>
        <div class="card-body">
            <p class="card-text">${cardText}</p>
            <div class="row ml-auto mr-auto">
                <a href="#" class="card-link">Link 1</a>
                <a href="#" class="card-link">Link 2</a>
            </div>
        </div>
    </div>
    `);
}

window.addEventListener("load", () => {
    const cardRow = document.getElementById("cardRow");
    cardRow.innerHTML += createCard("Card Title", "Card Subtitle", "Card Text");
    cardRow.innerHTML += createCard("Card Title 2", "Card Subtitle 2", "Card Text 2");
})
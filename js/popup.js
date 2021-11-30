let popupActive = false;

function createPopup(title, subtitle, text) {
    const body = document.getElementsByTagName("body").item(0);
    body.insertAdjacentHTML(body, `
    <div class="popupContainer">
        <div class="popupContent">
            <div class="popupClassTitle">
                <h1>${title}</h1>
            </div>
            <div class="popupSubtitle text-muted">
                ${subtitle}
            </div>

            <div class="popupCourseDescription">
                <p>
                    ${text}
                </p>
            </div>
        </div>
    </div>
    `)
}

window.addEventListener("load", () => {
    
})
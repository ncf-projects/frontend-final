const classes = [
    {
        "title": "Historical Archaeology of Latin America",
        "id": "23438",
        "subject": "anth",
        "description": "This seminar explores the historical archaeology of Latin America and the Caribbean. Historical archaeology, understood here as the archaeology of European colonialism, is a multidisciplinary field that draws from anthropology, history, archaeology, and related disciplines such as geography or historic preservation, among others. Starting with the definition of the field, the course continues with the discussion of research topics and agendas, theoretical frameworks, and methodologies. Themes in the discussions include acculturation and colonialism, material culture and technology, power, identity and ethnogenesis, African diaspora, and colonial economies. The course explores these topics in the study of distinct contexts and materialities such as missions, plantations, cities, architecture, food and consumables, etc. It offers different perspectives, including the contribution of Latin American scholars, to critically question multiple versions of the past. Full Term Course.",
        "days": "MW"
    },
    {
        "title": "Introduction to Biological Anthropology: From Primatology to Molecular Anthropology",
        "id": "23439",
        "subject": "anth",
        "description": "This course offers an introduction to biological anthropology. It will focus on evolutionary theory, primatology, paleoanthropology and behavioral ecology to understand human evolution, diversity and adaptability from the past to the present. It will also include more contemporary topics such as human biology and health, evolutionary medicine and diseases, molecular anthropology and genomics, forensic anthropology and law enforcement, etc. The course will include guest speaker series, field trips, lab sessions and independent/group research projects, beyond lectures and group discussions. This course fulfills a requirement option for Anthropology AOC, and a requirement for Environmental Studies AOC. It may also be of interest to students of social sciences, biology, natural sciences, Health, Culture and Societies (HCS), or other interdisciplinary studies. Enrollment cap: 25. Full Term Course.",
        "days": "MF"
    },
    {
        "title": "Art Senior Seminar",
        "id": "23634",
        "subject": "art",
        "description": "This tutorial is a two-semester seminar that meets weekly as partial fulfillment of an Art Thesis. The tutorial is structured to support student progress and includes rotating student critiques, artist presentations, exhibition planning and execution, and professional development. Content includes; group discussions & critiques of student artwork, planning and execution of exhibitions, peer reviews of thesis drafts, the development of an artist statement in conjunction with presented artwork, drafting a CV, and the creation of a website. Full Term Course.",
        "days": "TR"
    },
    {
        "title": "Art and Gender",
        "id": "23622",
        "subject": "art",
        "description": "What role does gender play in works of art? How does art shape our perception of gender? In this course we’ll explore the interaction of gender and art through a set of key artists, movements, and moments in a period ranging from the 18th Century to the contemporary period. Topics covered include, but are not limited to: barriers to women’s participation in the art world; the role of masculinity in conceptions of the artist and artistic creation; artistic subversions of traditional gender roles; the gendering of visual concepts/structures like the gaze; and the intersection of gender with other categories of identity such as race and class. If the size of the class permits it, students will also engage more directly with these issues by role-playing and reenacting the complex power dynamics of the 1980s New York City art world, a context that inspired the biting humor and critical interventions of the activist collective known as the Guerrilla Girls. Full Term Course.",
        "days": "MU"
    },
    {
        "title": "Art and Gender",
        "id": "23656",
        "subject": "art",
        "description": "What role does gender play in works of art? How does art shape our perception of gender? In this course we’ll explore the interaction of gender and art through a set of key artists, movements, and moments in a period ranging from the 18th Century to the contemporary period. Topics covered include, but are not limited to: barriers to women’s participation in the art world; the role of masculinity in conceptions of the artist and artistic creation; artistic subversions of traditional gender roles; the gendering of visual concepts/structures like the gaze; and the intersection of gender with other categories of identity such as race and class. If the size of the class permits it, students will also engage more directly with these issues by role-playing and reenacting the complex power dynamics of the 1980s New York City art world, a context that inspired the biting humor and critical interventions of the activist collective known as the Guerrilla Girls. Full Term Course.",
        "days": "SU"
    },
    {
        "title": "Foundations of Biology II",
        "id": "23497",
        "subject": "bio",
        "description": "In this introductory course, we will investigate the mechanisms by which organisms are formed from macromolecules by covering the following topics: biological molecules, cellular structure and function, the flow of genetic information in cells, cellular communication and organization into tissues, and the embryonic development of plants and animals. We will also cover basic plant and animal physiology. Most reading assignments will be taken from a required text. However, we will also explore current controversial biological issues, which are prevalent in both the scientific literature and the popular press. Finally, we will explore the scientific method through several in-class and/or computer-simulated laboratories. Natural Sciences LAC. Biology Lab Fee: $20.00. Full Term Course.",
        "days": "WR",
    },
    {
        "title": "Introduction to Botany",
        "id": "23498",
        "subject": "bio",
        "description": "This course examines the diversity, structure and function of organisms with cell walls including bacteria, fungi, protists, algae, and especially plants. These distantly related organisms include primary producers that energize the biosphere, decomposers that recycle nutrients and economic species that provide most of humanity’s food, fiber and medicine. All fall under the traditional domain of botany which we approach by comparing and contrasting each group in an evolutionary context. Focusing on flowering plants, we will examine how variation in a basic body plan contributes to the variety of functions performed by different plant organs and species. Finally, we will examine the dynamic relationship between plants and people, from the dawn of civilization to emerging environmental challenges. Students will engage these subjects through regular in-class activities and a course-long project that will involve collecting and identifying specimens. At the conclusion of the course, successful students will demonstrate proficiency with interpreting results from the primary scientific literature, recognizing major groups of organisms studied by botanists and understanding how variation in plant structure influences performance in both natural and agricultural settings. Enrollment limited to 30 students. $25 Lab fee required. Prerequisite: General Biology/Foundations of Biology or permission of instructor. Full Term Course.",
        "days": "MTWRF",
    }
]

/**
 * Generates the html body for a new card.
 * @param {string} className The name of the class
 * @param {string} classCategory The category or subject
 * @param {string|number} crn The course registration number
 * @param {string} currentDesignation Sat/Unsat
 * @param {string} days The days the class is
 * @returns {string} The HTML for the card
 */
function createCard(className, classCategory, crn, currentDesignation, days) {
    return (`
    <div class="card ml-1 mr-1">
        <div class="card-body">
            <h4 class="card-title text-wrap">${className}</h4>
            <h5 class="card-subtitle text-muted">${classCategory}</h5>
            <div class="jumbotron-fluid pt-3 pl-1">
                <h6 class="card-subtitle underline inline">CRN:</h6>
                <span>&nbsp;</span>
                <span class="text-muted">${crn}</span>
                <br>
                <h6 class="card-subtitle underline inline">Designation:</h6>
                <span>&nbsp;</span>
                <span class="text-muted">${currentDesignation}</span>
                <br>
                <h6 class="card-subtitle underline inline">Days:</h6>
                <span>&nbsp;</span>
                <span class="text-muted">${days}</span>
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

/**
 * 
 * @param {string} title The title for the popup
 * @param {string} subtitle The subtitle
 * @param {string} text The body text the popup should have
 */
function createPopup(title, subtitle, text) {
    const elem = document.createElement("div");
    elem.innerHTML = `
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
    `;
    document.body.insertAdjacentElement("beforebegin", elem);
}

window.addEventListener("load", () => {
    const cardRow = document.getElementById("cardRow");
    // Get 4 random classes
    const selectedClasses = classes.sort(() => Math.random() - 0.5).slice(0, 4);

    // Create 4 random cards
    for (const classObj of selectedClasses) {
        const card = createCard(
            classObj.title,
            classObj.subject,
            classObj.id,
            "SAT",
            classObj.days
        );
        cardRow.insertAdjacentHTML("beforeend", card);
    }
})

window.addEventListener("click", () => {
    // Make it so if you click when a popup is open, it closes
    const popups = document.getElementsByClassName("popupContainer");
    for (const popup of popups) {
        popup.remove();
    }
})

// See if 'view info' link is clicked. If it is, create a popup.
window.addEventListener("click", (elem) => {
    if (elem.target.className.includes("card-link")) {
        if (document.getElementsByClassName("popupContainer").length > 0) return;
        const card = elem.target.parentElement.parentElement.parentElement;
        const cardBody = card.children.item(0);

        const title = cardBody.children.item(0).innerText;
        const subject = cardBody.children.item(1).innerText;
        const id = cardBody.children.item(2).children.item(2).innerText;

        const x = classes.find((classObj) => classObj.id === id);
        const description = x.description;

        createPopup(title, subject, description);
        // createPopup(title, subject, "aaa")
    } else {
        console.log(elem.target.className)
    }
})

// Populate the calander with current dates.
window.addEventListener("load", () => {
    const calendar = document.getElementById("calendar");
    const now = new Date();
    const month = now.getUTCMonth() + 1;
    const currentDay = now.getUTCDate();
    const year = now.getUTCFullYear();
    const maxDays = new Date(year, month, 0).getDate();

    const to = Math.abs(maxDays - 35) + 1;
    let x = 1;

    for (; x < maxDays; x++) {
        const day = x.toString().length == 1 ? "0" + x : x;
        if (x == currentDay) {
            calendar.innerHTML += `<div class="calItem calCurrent">${day}</div>`
        } else {
            calendar.innerHTML += `<div class="calItem">${day}</div>`
        }
    }
})
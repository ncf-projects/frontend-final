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


window.addEventListener("load", () => {
    document.querySelector("#searchInput").onkeydown = searchbarUpdate;
})

function addFilter(name) {
    const container = document.getElementsByClassName("selectionContainer overflow-hidden pt-3 text-center").item(0);

    container.insertAdjacentHTML("beforeend", `
    <div class="filteritem border-black-top text-left pl-1">
        <h6 class="inline">${name}</h6>
        <svg xmlns="http://www.w3.org/2000/svg" tabindex="0" width="20" height="20" class="float-right inline mr-1" viewBox="0 0 24 24"><path d="M24 20.188l-8.315-8.209 8.2-8.282-3.697-3.697-8.212 8.318-8.31-8.203-3.666 3.666 8.321 8.24-8.206 8.313 3.666 3.666 8.237-8.318 8.285 8.203z"/></svg>
    </div>`)

    document.getElementById("searchInput").value = "";
    refreshCards();
}

function createCard(title, description, days, requirements = "N/A") {
    const cardRow = document.getElementById("cardRow");

    cardRow.insertAdjacentHTML("afterbegin", `
    <div class="card ml-1 mr-1">
        <div class="card-body">
        <h4 class="card-title">${title}</h4>
        <h5 class="card-subtitle text-muted inline">Requirements:&nbsp;</h5><p class="inline">N/A</p>
        <br>
        <h5 class="card-subtitle text-muted inline">Days:&nbsp;</h5><p class="inline">${days}</p>
        <hr>
        ${description}
        </div>
    </div>
    `)
}

function searchbarUpdate(evnt) {
    const alph = "abcdefghijklmnopqrstuvwxyz -";
    if (!alph.toUpperCase().split("").join(alph.split("")).includes(evnt.key)) return;

    const value = document.querySelector("#searchInput").value + evnt.key;
    const options = [];
    let constructedDropdown = "";

    for (const classObj of classes) {
        if (classObj.title.startsWith(value)) {
            constructedDropdown += `
            <div class="searchElement" tabindex="0">
                <p>${classObj.title} -- Title</p>
            </div>
            `
        }

        if (classObj.subject.startsWith(value)) {
            if (!constructedDropdown.includes(classObj.subject)) {
                constructedDropdown += `
                <div class="searchElement" tabindex="0">
                    <p>${classObj.subject} -- Subject</p>
                </div>`
            }
        }
    }

    document.getElementsByClassName("autocompleteElements").item(0).innerHTML = constructedDropdown;
}

function refreshCards() {

    // Get all the checkbox information
    const opts = "MTWRFSU".split("");
    const selected = [];
    const index = 0;
    for (const buttonHolder of Array.from(document.getElementsByClassName("radioContainer").item(0))) {
        const button = buttonHolder.children.item(1);
        if (button.checked) {
            selected.push(opts[index]);
        }
        index++;
    }

    console.log(selected);

    const cardRow = document.getElementById("cardRow");
    cardRow.innerHTML = "";

    const container = document.getElementsByClassName("selectionContainer overflow-hidden pt-3 text-center").item(0);
    const elems = Array.from(container.children).filter((x) => x.tagName == "DIV");

    const subjects = [];
    const titles = [];

    for (const _filterLine of elems) {
        const filterLine = _filterLine.innerText;
        const parts = filterLine.split(" -- ");
        if (parts[1] == "Subject") {
            subjects.push(parts[0]);
        } else if (parts[1] == "Title") {
            titles.push(parts[0]);
        }
    } 

    for (const classObj of classes) {
        if (subjects.includes(classObj.subject) || titles.includes(classObj.title)) {
            const classDays = classObj.days.split("");
            const days = [];
            for (const day of classDays) {
                if (selected.includes(day)) {
                    days.push(day);
                }
            }
            
            if (days.length > 0 || selected.length == 0) {
                createCard(
                    classObj.title,
                    classObj.description.length > 100 ?  classObj.description.substring(0, 100) + "..." : classObj.description, classObj.days
                );
            }
        }
    }
}

// For adding a new filter
window.addEventListener("click", (event) => {
    const src = event.target;
    const parent = src.parentElement;
    if (parent.className == "searchElement") {
        addFilter(src.innerText);
        document.getElementById("searchInput").value = "";
    }
})

// For removing a filter
window.addEventListener("click", (event) => {
    const src = event.target;
    const parent = src.parentElement;
    const parentParent = parent.parentElement;
    if (parentParent.className.includes("filteritem")) {
        parentParent.remove();
    }
    refreshCards();
})
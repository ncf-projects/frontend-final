window.addEventListener("load", () => {

})

window.addEventListener("click", (ev) => {
    if (ev.target.className == "dropdown-item") {
        document.getElementById("semesterDropdownButton").innerText = ev.target.innerText;
    }
})

// Split this array into pairs of two

const list = Array.from(document.querySelector("body > div.pagebodydiv > table:nth-child(5) > tbody").children);
for (let i = 0; i < list.length; i += 2) {
    const titleSegments = list[i].children.item(0).textContent.split(" - ");
    const name = titleSegments[0];
    const id = titleSegments[1];
    const data1 = titleSegments[2];
    const data2 = titleSegments[3];

    const other = list[i + 1];
    const textSegments = other.innerText.split("\n\n");

    const description = textSegments[0];
        const flags = description[1].split("\n");
        const location = flags[0];
        const instructionMethod = flags[2];
        const credits = flags[3];

    const meetingTimes = description[2].split("\n");
        meetingTimes.shift();
        meetingTimes.shift();

        const scheduleEntry = [];
        for (const entry of meetingTimes) {
            const portions = entry.split("	");
                scheduleEntry.push({
                    type: portions[0],
                    time: portions[1],
                    days: portions[2],
                    where: portions[3],
                    dateRange: portions[4],
                    scheduleType: portions[5],
                    instructor: portions[6],
                })
        }

        console.log(scheduleEntry);
}


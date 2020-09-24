document.addEventListener("DOMContentLoaded", () => {
    fetchJudges();
})

const BASE_URL = "http://localhost:3000/"

function fetchJudges() {
    fetch(`${BASE_URL}judges`)
    .then(resp => resp.json())
    .then(json => renderJudges(json))
}

function renderJudges(judges) {
    const main = document.querySelector("main")
    judges.forEach(judge => {
        const judgesDiv = document.createElement("div")
        judgesDiv.innerHTML = judge.name, judge.recommendation
        main.appendChild(judgesDiv)
    })
}

document.addEventListener("DOMContentLoaded", () => {
    fetchJudges();
})

const BASE_URL = "http://localhost:3000/"

function fetchJudges() {
    fetch(`${BASE_URL}judges`)
    .then(resp => resp.json())
    .then(judges => {
       for (const judge of judges) {
           console.log("rails obj", judge)
           let j = new Judge(judge.id, judge.name, judge.recommendation, judge.details, judge.judicial_district, judge.image)
           console.log("js obj", j)
       }
    })
}
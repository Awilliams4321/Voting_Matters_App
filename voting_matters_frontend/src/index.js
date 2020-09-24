document.addEventListener("DOMContentLoaded", () => {
    fetchJudges();
    fetchComments();
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

function fetchComments() {
    fetch(`${BASE_URL}comments`) 
    .then(resp => resp.json())
    .then(comments=> {
        console.log("comments")
        for(const comment of comments) {
            let c = new Comment(comment.id, comment.note, comment.judge_id)
            c.renderComment(); 
        }
    })
}

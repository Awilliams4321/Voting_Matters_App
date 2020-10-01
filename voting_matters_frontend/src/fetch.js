// fetch GET All Judges

function fetchJudges() {
    fetch(`${BASE_URL}judges`)
    .then(resp => resp.json())
    .then(json => {
        json.forEach(judge => {
            const judgeObj = new Judge(judge)
            judgeObj.renderJudge()
        })
    })  
}

// fetch GET All Comments

function fetchComments() {
    fetch(`${BASE_URL}comments`)
    .then(resp => resp.json())
    .then(json => {
        json.forEach(comment => {
            const commentObj = new Comment(comment)
            commentObj.renderComment()
        })
    })  
}

// fetch POST New Comment

function addComment() {
    event.preventDefault();
    let noteVal = document.getElementById("note").value
    
    let comment = {
        note: noteVal
    }

    fetch(`${BASE_URL}comments`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify(comment)
    })
    .then(resp => console.log(resp))
}
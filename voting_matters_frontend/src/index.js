document.addEventListener("DOMContentLoaded", () => {
    fetchJudges();
    fetchComments();
    createCommentForm();
})

const BASE_URL = "http://localhost:3000/"


function createCommentForm() {
    let commentsForm = document.getElementById("comments-form")

    commentsForm.innerHTML += 
    `
        <p>Select a judge to leave a comment for:
        <select (@judges, :name) >
        </select></p>
        <input type="hidden" id="judge_id">

         Note: <input type="text" id="note">
         <input type="submit" value="Submit Note">
    `
    commentsForm.addEventListener("submit", addComment)
}


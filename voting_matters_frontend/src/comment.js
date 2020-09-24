class Comment {
    static all_comments = []
    contructor(note, judge_id) {
        this.note = note;
        this.judge_id = judge_id;
        Comment.all_comments.push(this)
    }

    renderComment() {
        let commentsDiv = document.getElementById("comments-container")
        commentsDiv.innerHTML = (`<li>Comment: ${this.note}</li>`)
    }

  
}
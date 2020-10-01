class Comment {
    static all_comments = []
    contructor({note, judge_id}) {
        this.note = note;
        this.judge_id = judge_id;
        Comment.all_comments.push(this)
    }

    renderComment() {
        let commentsDiv = document.getElementById("comments-container")
        let commentLi = document.createElement("li")
        commentLi.innerText = this.note

        commentsDiv.appendChild(commentLi)
    }
    
    
  
}


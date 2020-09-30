class Judge {
    static all_judges = []
    constructor({id, name, recommendation, details, judicial_district, image}) {
        this.id = id
        this.name = name;
        this.recommendation = recommendation;
        this.details = details;
        this.judicial_district = judicial_district;
        this.image = image;
        Judge.all_judges.push(this)
    }

    renderJudge() {
        let judgesDiv = document.getElementById("judges-container")

        let li = document.createElement("li")
        li.innerText = this.name

        judgesDiv.appendChild(li)
    }
}
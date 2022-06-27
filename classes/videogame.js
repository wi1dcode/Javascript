class csgo {
    constructor(team, teamVs, score, win) {
        this.team = "Good Guys"
        this.teamVs = "Bad Guys"
        this.teamScore = 0
        this.teamVsScore = 0
        this.win = this.win
    }

    addScore = (teamScore) => {
        this.teamScore = teamScore
    }

    addVsScore = (teamVsScore) => {
        this.teamVsScore = teamVsScore
    }

    whoWin = (win) => {
        if (this.teamScore > this.teamVsScore) {
            console.log(`${this.team} win with ${this.teamScore} score over the ${this.teamVs}. Result: ${this.teamScore} : ${this.teamVsScore}`);
        } else if (this.teamScore === this.teamVsScore) {
            console.log(`The round between ${this.team} and ${this.teamVs} ended in a draw. Result: ${this.teamScore} : ${this.teamVsScore} `);
        } else {
            console.log(`${this.teamVs} win with ${this.teamVsScore} score over the ${this.team}. Result: ${this.teamScore} : ${this.teamVsScore}`);
        } 
    }
}

var game = new csgo
game.addScore(23)
game.addVsScore(23)
console.log(game);
console.log(game.whoWin());

class GuessingGame {
    constructor() {
    }
    
    setRange(min, max) {
        this.min = +min;
        this.max = +max;
    }
    
    guess() {
        return this.res = Math.round((this.min + this.max)/2)
    }
    
    lower() {
        this.max = this.res 
    }
    
    greater() {
        this.min = this.res
    }
}

module.exports = GuessingGame;

// const game = new GuessingGame();
// game.setRange(0, 4048)

// console.log(game.setRange(0, 4048))
// console.log(game.min, game.max)
// console.log(game.guess())
class GuessingGame {
  arr = [];
  setRange(min, max) {
    if(this.arr.length === 0) {
      for(let i = min; i <= max; i++) {
        this.arr.push(i);
      }
    } else {
      this.arr = this.arr.slice(min, max+1); 
    }
  }

  guess() {
    this.middle = Math.floor(this.arr.length / 2);
    return this.arr[this.middle];
  }

  lower() {
    this.setRange(0, this.middle);
  }

  greater() {
    this.setRange(this.middle, this.arr.length-1)
  }
}

module.exports = GuessingGame;
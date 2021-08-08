class GuessingGame {
  
  setRange(min, max) {  
    this.arr = [];
    for(let i = min; i <= max; i++) {
      this.arr.push(i);
    }
  }

  guess() {
    this.middle = Math.floor(this.arr.length / 2);
    return this.arr[this.middle];
  }

  lower() {
    const min = this.arr[0];
    const max = this.arr[this.middle];
    this.setRange(min, max);
  }

  greater() {
    const min = this.arr[this.middle];
    const max = this.arr[this.arr.length-1]
    this.setRange(min, max);
  }
}

module.exports = GuessingGame;
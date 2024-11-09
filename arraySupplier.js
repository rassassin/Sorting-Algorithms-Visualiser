const n = 1000;

class ArraySupplier {
  constructor() {}

  createOrderArray() {
    const array = new Array(n).fill(0).map((_, i) => i + 1);
    return array;
  }

  shuffleArray(orderedArray) {
    for (let i = orderedArray.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let k = orderedArray[i];
      orderedArray[i] = orderedArray[j];
      orderedArray[j] = k;
    }
    return orderedArray;
  }

  getShuffledArray() {
    const orderedArray = this.createOrderArray();
    return this.shuffleArray(orderedArray);
  }
}

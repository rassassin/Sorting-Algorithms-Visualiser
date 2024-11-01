const maxBar = 100;
const arraySupplier = new ArraySupplier();
let listOfNums = [];
let scale;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  listOfNums = arraySupplier.getShuffledArray();
}

function draw() {
  background(200);
  const barWidth = window.innerWidth / listOfNums.length;
  const heightScale = window.innerHeight / Math.max(...listOfNums);

  for (var i = 0; i < listOfNums.length; i++) {
    const barHeight = listOfNums[i] * heightScale;

    rect(i * barWidth + 30, window.innerHeight - 1 - barHeight, barWidth, barHeight);
  }
}

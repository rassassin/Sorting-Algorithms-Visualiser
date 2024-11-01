const n = 100;
const maxBar = 100;
let listOfNums = [];
let scale;

function createOrderArray() {
  const array = new Array(n).fill(0).map((_, i) => i + 1);
  return array;
}

function getShuffleArray(orderedArray) {
  for (let i = orderedArray.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    let k = orderedArray[i];
    orderedArray[i] = orderedArray[j];
    orderedArray[j] = k;
  }
  return orderedArray;
}

function getShuffledArray() {
  const orderedArray = createOrderArray();
  const shuffledArray = getShuffleArray(orderedArray);
  return shuffledArray;
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  listOfNums = getShuffledArray();
}

function draw() {
  background(200);
  const barWidth = window.innerWidth / listOfNums.length;
  const heightScale = window.innerHeight / Math.max(...listOfNums);

  for (var i = 0; i < listOfNums.length; i++) {
    const barHeight = listOfNums[i] * heightScale;

    rect(i * barWidth + 30, window.innerHeight - 1 - barHeight, barWidth, barHeight);

    print(listOfNums[i]);
    textAlign(i);
    text(i, i * 600, 365);
  }
}

let sortMethod;
const maxBar = 100;
const arraySupplier = new ArraySupplier();
let listOfNums = [];
let scale;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
  sortMethod = window.location.hash[1];
  listOfNums = arraySupplier.getShuffledArray();
}

function draw() {
  background(200);
  const barWidth = window.innerWidth / listOfNums.length;
  const heightScale = window.innerHeight / Math.max(...listOfNums);

  if (sortMethod === "1") {
    bubbleSort(listOfNums);
  } else if (sortMethod === "2") {
    selectionSort(listOfNums);
  }

  for (let i = 0; i < listOfNums.length; i++) {
    const barHeight = listOfNums[i] * heightScale;
    rect(i * barWidth, window.innerHeight - 1 - barHeight, barWidth, barHeight);
  }
}

const selectionSort = (arr) => {
  let largestIndex = 0;
  for (let j = 0; j < arr.length; j++) {
    if (arr[largestIndex] < arr[j]) {
      largestIndex = j;
    }
    [arr[largestIndex], arr[j]] = [arr[j], arr[largestIndex]];
  }
};

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    if (i < listOfNums.length) {
      if (listOfNums[i] > listOfNums[i + 1]) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
      }
    }
  }
};

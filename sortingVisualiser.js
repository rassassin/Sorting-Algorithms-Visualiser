let sortMethod;
const maxBar = 100;
const arraySupplier = new ArraySupplier();
let listOfNums = [];
let scale;

function chooseSortMethod(sortMethodChoice) {
  sortMethod = sortMethodChoice;
}

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);

  listOfNums = arraySupplier.getShuffledArray();
}

function draw() {
  background(200);
  const barWidth = window.innerWidth / listOfNums.length;
  const heightScale = window.innerHeight / Math.max(...listOfNums);

  for (let i = 0; i < listOfNums.length; i++) {
    bubbleSort(listOfNums, i);

    const barHeight = listOfNums[i] * heightScale;
    rect(i * barWidth, window.innerHeight - 1 - barHeight, barWidth, barHeight);
  }
}

const bubbleSort = (arr, i) => {
  if (i < listOfNums.length) {
    if (listOfNums[i] > listOfNums[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
};

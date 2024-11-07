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

  for (var i = 0; i < listOfNums.length; i++) {
    if (i < listOfNums.length) {
      for (let j = 0; j < listOfNums.length - i - 1; j++) {
        if (listOfNums[j] > listOfNums[j + 1]) {
          swapValues(listOfNums, j, j + 1);
        }
        const barHeight = listOfNums[i] * heightScale;
        rect(i * barWidth + 30, window.innerHeight - 1 - barHeight, barWidth, barHeight);
      }
    }
  }
}

const swapValues = (arr, a, b) => {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
};

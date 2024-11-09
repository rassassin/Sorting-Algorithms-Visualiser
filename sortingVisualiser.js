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

  for (let i = 0; i < listOfNums.length; i++) {
    if (sortMethod) {
      selectionSort(listOfNums, i);
    }

    const barHeight = listOfNums[i] * heightScale;
    rect(i * barWidth, window.innerHeight - 1 - barHeight, barWidth, barHeight);
  }
}

const selectionSort = (arr, index) => {
  let largestVal = index;
  for (let j = index + 1; j < arr.length; j++) {
    if (arr[largestVal] < arr[j]) {
      largestVal = j;
    }
    let temp = arr[largestVal];
    arr[largestVal] = arr[j];
    arr[j] = temp;
  }
};

const bubbleSort = (arr, i) => {
  if (i < listOfNums.length) {
    if (listOfNums[i] > listOfNums[i + 1]) {
      let temp = arr[i];
      arr[i] = arr[i + 1];
      arr[i + 1] = temp;
    }
  }
};

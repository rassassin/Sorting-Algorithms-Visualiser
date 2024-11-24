let sortMethod;
const maxBar = 100;
const arraySupplier = new ArraySupplier();
let listOfNums = [];
let arrayCopy = [];
let scale;
let index = 1;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
  sortMethod = window.location.hash[1];
  listOfNums = arraySupplier.getShuffledArray();
  arrayCopy = [...listOfNums];
}

function draw() {
  background(200);

  if (sortMethod === "1") bubbleSort(listOfNums);
  if (sortMethod === "2") selectionSort(listOfNums);
  if (sortMethod === "3") insertionSort(listOfNums);
  if (sortMethod === "4") {
    bucketSort(listOfNums);
    listOfNums = listOfNums.flat();
    selectionSort(listOfNums);
  }

  const barWidth = window.innerWidth / listOfNums.length;
  const heightScale = window.innerHeight / Math.max(...listOfNums);

  for (let i = 0; i < listOfNums.length; i++) {
    const barHeight = listOfNums[i] * heightScale;
    rect(i * barWidth, window.innerHeight - 1 - barHeight, barWidth, barHeight);
  }
}

const bucketSort = (arr) => {
  const numberOfBucketsNeeded = arrayCopy.length / 10 + 1;
  arr.length = 0;
  for (let i = 0; i < numberOfBucketsNeeded; i++) {
    arr.push([]);
  }

  for (let i = 0; i < arrayCopy.length; i++) {
    const idxOfBucket = Math.trunc(arrayCopy[i] / 10);
    arr[idxOfBucket].push(arrayCopy[i]);
  }
};

const bucketSortTwo = (arr) => {};

const insertionSort = (arr) => {
  if (index < arr.length) {
    let key = arr[index];
    let j = index - 1;
    while (j >= 0 && arr[j] > key) {
      arr[j + 1] = arr[j];
      j = j - 1;
    }
    arr[j + 1] = key;
    index++;
  }
};

const selectionSort = (arr) => {
  let largestIndex = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[largestIndex] < arr[i]) {
      largestIndex = i;
    }
    [arr[largestIndex], arr[i]] = [arr[i], arr[largestIndex]];
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

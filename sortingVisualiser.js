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

  if (sortMethod === "1") bucketSort(listOfNums);
  if (sortMethod === "2") selectionSort(listOfNums);

  for (let i = 0; i < listOfNums.length; i++) {
    const barHeight = listOfNums[i] * heightScale;
    rect(i * barWidth, window.innerHeight - 1 - barHeight, barWidth, barHeight);
  }
}

const bucketSort = (arr) => {
  let numberOfItemsToSort = [...arr];
  const numberOfBucketsNeeded = numberOfItemsToSort.length / 10 + 1;
  let buckets = [];
  for (let i = 0; i < numberOfBucketsNeeded; i++) {
    buckets.push([]);
  }

  arr.length = 0;
  for (let i = 0; i < numberOfItemsToSort.length; i++) {
    const idxOfBucket = Math.trunc(numberOfItemsToSort[i] / 10);
    buckets[idxOfBucket].push(numberOfItemsToSort[i]);
  }

  for (let i = 0; i < buckets.length; i++) {
    for (let j = 0; j < buckets[i].length; j++) {
      arr.push(buckets[i][j]);
    }
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

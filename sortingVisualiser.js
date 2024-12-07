let sortMethod;
const maxBar = 100;
const arraySupplier = new ArraySupplier();
let listOfNums = [];
let arrayCopy = [];
let scale;
let index = 1;
let bubbleSortIndex = 0;
let scanIndex = 0;
let barWidth;
let heightScale;
let sorting = false;

function setup() {
  createCanvas(window.innerWidth, window.innerHeight);
  frameRate(30);
  sortMethod = window.location.hash[1];
  listOfNums = arraySupplier.getShuffledArray();
  arrayCopy = [...listOfNums];
  barWidth = window.innerWidth / listOfNums.length;
  heightScale = window.innerHeight / Math.max(...listOfNums);
  sorting = true;
}

function draw() {
  background(200);

  if (sortMethod === "1") bubbleSort(listOfNums);
  if (sortMethod === "2") selectionSort(listOfNums);
  if (sortMethod === "3") insertionSort(listOfNums);
  if (sortMethod === "5") startSorting();
  if (sortMethod === "4") {
    arrayMerger();
  } else {
    for (let i = 0; i < listOfNums.length; i++) {
      const barHeight = listOfNums[i] * heightScale;
      rect(i * barWidth, window.innerHeight - 1 - barHeight, barWidth, barHeight);
    }
  }
}

const arrayMerger = () => {
  for (let i = 0; i < listOfNums.length; i++) {
    fill(color(255, 255, 255));
    const barHeight = listOfNums[i] * heightScale;
    rect(i * barWidth, window.innerHeight - 1 - barHeight, barWidth, barHeight);
  }
  if (scanIndex < listOfNums.length) {
    fill(color(0, 255, 0));
    const barHeight = listOfNums[scanIndex] * heightScale;
    rect(scanIndex * barWidth, window.innerHeight - 1 - barHeight, barWidth, barHeight);
    scanIndex++;
  }
  if (scanIndex === listOfNums.length) {
    fill(color(255, 255, 255));
    let bucketSortArray = bucketSort();
    bucketSortArray.reverse();
    if (bubbleSortIndex < listOfNums.length) {
      listOfNums.pop();
      listOfNums.unshift(bucketSortArray[bubbleSortIndex]);
      bubbleSortIndex++;
    }
    if (bubbleSortIndex === listOfNums.length) {
      bubbleSort(listOfNums);
    }
  }
};

const bucketSort = () => {
  let arr = [...arrayCopy];
  const numberOfBucketsNeeded = arrayCopy.length / 10 + 1;
  arr.length = 0;
  for (let i = 0; i < numberOfBucketsNeeded; i++) {
    arr.push([]);
  }

  for (let i = 0; i < arrayCopy.length; i++) {
    const idxOfBucket = Math.trunc(arrayCopy[i] / 10);
    arr[idxOfBucket].push(arrayCopy[i]);
  }

  flattenArrayInPlace(arr);
  return arr;
};

function flattenArrayInPlace(arr) {
  let i = 0;
  while (i < arr.length) {
    if (Array.isArray(arr[i])) {
      arr.splice(i, 1, ...arr[i]);
    } else {
      i++;
    }
  }
}

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

async function startSorting() {
  sorting = true;
  await quickSort(listOfNums, 0, listOfNums.length - 1);
  sorting = false;
}

async function quickSort(arr, start, end) {
  if (start >= end) return;

  let index = await partition(arr, start, end);
  await Promise.all([quickSort(arr, start, index - 1), quickSort(arr, index + 1, end)]);
}

async function partition(arr, start, end) {
  let pivotValue = arr[end];
  let pivotIndex = start;
  for (let i = start; i < end; i++) {
    if (arr[i] < pivotValue) {
      await swap(arr, i, pivotIndex);
      pivotIndex++;
    }
  }
  await swap(arr, pivotIndex, end);
  return pivotIndex;
}

async function swap(arr, a, b) {
  await sleep();
  while (!sorting) {
    await sleep(300);
  }
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function sleep(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

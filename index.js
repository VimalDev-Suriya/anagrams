// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Sorting without sort function</h1>`;

const bubbleSortWrapper = document.createElement('div');
const bubbleSortHeading = document.createElement('h1');
const bubbleSortInput = document.createElement('p');
const bubbleSortResult = document.createElement('p');

const myArray = [5, 3, 8, 4, 6];
bubbleSortInput.innerHTML = 'INPUT = ' + myArray;
bubbleSortHeading.innerHTML = 'Bubble Sort';
bubbleSortWrapper.append(bubbleSortHeading);
bubbleSortWrapper.append(bubbleSortInput);
appDiv.append(bubbleSortWrapper);

function bubbleSort(arr) {
  // console.log(arr.length);
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      // console.log('i', i, 'j', j);
      if (arr[j + 1] < arr[j]) {
        [arr[j + 1], arr[j]] = [arr[j], arr[j + 1]];
      }
    }
  }
  return arr;
}

bubbleSortResult.innerHTML = 'OUTPUT = ' + bubbleSort(myArray);
bubbleSortWrapper.append(bubbleSortResult);

// DIRECT MAP METHOD
function sanitize(str) {
  return str
    .toLowerCase()
    .replace(/[^a-z]/g, '')
    .split('')
    .sort()
    .join('');
}

function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  return sanitize(str1) === sanitize(str2);
}

console.log("DIRECT METHOD",isAnagram('indian', 'ndiani'));



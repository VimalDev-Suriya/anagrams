// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Sorting without sort function</h1>`;

const bubbleSortWrapper = document.createElement('div');
const bubbleSortHeading = document.createElement('h1');
const bubbleSortInput = document.createElement('p');
const bubbleSortResult = document.createElement('p');

const myArray = [5, 3, 8, 4, 1];
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

// COMPARING CHARECTER MAP
function characterMap(str) {
  let charObj = {};
  for (let charecter of str) {
    if (charObj.hasOwnProperty(charecter)) {
      charObj[charecter]++;
    } else {
      charObj[charecter] = 1;
    }
  }
  return charObj;
}

function isAnagram(str1, str2, methodName) {
  if (str1.length !== str2.length) return false;

  if (methodName === 'directMethod') {
    return sanitize(str1) === sanitize(str2);
  } else {
    const charAtStr1 = characterMap(str1);
    const charAtStr2 = characterMap(str2);

    for (let val in charAtStr1) {
      if (charAtStr1[val] !== charAtStr2[val]) {
        return false;
      }
    }
    return true;
  }
}

console.log('DIRECT METHOD', isAnagram('indian', 'ndiani', 'directMethod'));
console.log('CHARCTER MAP', isAnagram('andian', 'dianin'));

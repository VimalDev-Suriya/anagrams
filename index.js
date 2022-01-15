// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Anagrams :Direct Method and Character set map</h1>`;

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
console.log('CHARCTER MAP', isAnagram('andian', 'daanin'));

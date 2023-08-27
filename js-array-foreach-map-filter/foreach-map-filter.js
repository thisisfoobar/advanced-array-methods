function doubleValues(arr) {
  let doubledValues = [];
  arr.forEach(function (val) {
    doubledValues.push(val * 2);
  });
  return doubledValues;
}

function onlyEvenValues(arr) {
  let evenNums = [];
  arr.forEach(function (num) {
    if (!(num % 2)) {
      evenNums.push(num);
    }
  });
  return evenNums;
}

function showFirstAndLast(arr) {
  let firstLast = [];
  arr.forEach(function (string) {
    let newString = string.charAt(0) + string.charAt(string.length - 1);
    firstLast.push(newString);
  });
  return firstLast;
}

function addKeyAndValue(arr, key, value) {
  arr.forEach(function (val) {
    val[key] = value;
  });
  return arr;
}

function vowelCount(str) {
  let lowerCaseStr = Array.from(str.toLowerCase());
  let vowelObjs = {};
  lowerCaseStr.forEach(function (letter) {
    if ("aeiou".indexOf(letter) !== -1) {
      if (vowelObjs[letter]) {
        vowelObjs[letter]++;
      } else {
        vowelObjs[letter] = 1;
      }
    }
  });
  return vowelObjs;
}

function doubleValuesWithMap(arr) {
  return arr.map(function (num) {
    return num * 2;
  });
}

function valTimesIndex(arr) {
  return arr.map(function (num, i) {
    return num * i;
  });
}

function extractKey(arr, key) {
  return arr.map(function (val) {
    return val[key];
  });
}

function extractFullName(arr) {
  return arr.map(function (val) {
    return `${val.first} ${val.last}`;
  });
}

function filterByValue(arr, key) {
  return arr.filter(function (catOwners) {
    if (catOwners[key]) {
      return catOwners;
    }
  });
}

function find(arr, searchValue) {
  return arr.filter(function (val) {
    if (val === searchValue) {
      return val;
    }
  })[0];
}

function findInObj(arr, key, searchValue) {
  return arr.filter(function (firstCatOwner) {
    if (firstCatOwner[key] === searchValue) {
      return firstCatOwner;
    }
  })[0];
}

function removeVowels(str) {
  const vowels = "aeiou";
  return str
    .toLowerCase()
    .split("")
    .filter(function (letter) {
      return vowels.indexOf(letter) === -1;
    })
    .join("");
}

function doubleOddNumbers(arr) {
  return arr
    .filter(function (num) {
      if (num % 2) {
        return num;
      }
    })
    .map(function (num) {
      return num * 2;
    });
}

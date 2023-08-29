function extractValue(arr, key) {
  return arr.reduce(function (vals, currentVal) {
    vals.push(currentVal[key]);
    return vals;
  }, []);
}

function vowelCount(str) {
  const vowels = "aeiou";
  return str
    .split("")
    .reduce(function (letterTracker, currentLetter) {
        let lowerLetter = currentLetter.toLowerCase()
      if (vowels.indexOf(lowerLetter) !== -1) {
        if (letterTracker[lowerLetter]) {
          letterTracker[lowerLetter]++;
        } else {
          letterTracker[lowerLetter] = 1;
        }
      }
      return letterTracker;
    }, {});

}

function addKeyAndValue(arr, key, value) {
    return arr.reduce(function(acc,currentObj){
        let newObj = {}
        let arrayKey = Object.keys(currentObj)[0]
        newObj[key] = value
        newObj[arrayKey] = currentObj[arrayKey]
        acc.push(newObj)
        return acc
    },[])
}

function partition(arr, callback) {
    let trueArray = []
    let falseArray = []
    return arr.reduce(function(acc, currentVal){
        if (callback(currentVal)) {
            trueArray.push(currentVal)
        } else {
            falseArray.push(currentVal)
        }
        acc[0] = trueArray
        acc[1] = falseArray
        return acc
    },[[],[]])
}

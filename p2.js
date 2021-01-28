const x = [1, 2, [3, 4, [5, 6], 7, [8, 9]]];
const y = [3, 4, [5, 6], 7, [8, 9]];

function flattenArray(arr) {
  if (arr instanceof Array) {
    return arr.length === 0
      ? []
      : flattenArray(arr[0]).concat(flattenArray(arr.slice(1)));
  }

  return [arr];
}

console.log(flattenArray(x));
console.log(flattenArray(y));
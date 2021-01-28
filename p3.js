const x = ["E>N", "P>E"] // pen
const y = ["M>P", "L>A", "A>M"] // lamp
const z = ["S>P", "P>A", "A>I", "I>N"]; // spain

function returnWord(array) {
  const c = [];

  for (let i = 0; i < array.length; i++) {
    const letters = array[i].split('>').join('');
    let firstLetter = letters[0]
    let lastLetter = letters[1]

    if (i === 0) {
      c.push(firstLetter)
      c.push(lastLetter)
    } else {
      const index1 = c.indexOf(firstLetter);
      const index2 = c.indexOf(lastLetter);

      if (index1 >= 0) {
        c.push(lastLetter)
      } else {
        if (index2 >= 0) {
          c.splice(index2, 0, firstLetter)
        } else {
          c.unshift(lastLetter)
          c.unshift(firstLetter)
        }
      }
    }
  }

  return Array.from(new Set(c)).join('');
}

console.log(returnWord(x));
console.log(returnWord(y));
console.log(returnWord(z));


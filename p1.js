
// Buy at 1, day 0
// Sell at 34, day 4

function getBuyAndSellDays(input) {
  if (!input || input.length < 1) return [-1, -1];

  if (input.length === 1) return [0, 0];

  let stockCollection = [];

  for (let i = 0; i < input.length; i++) {
    const x = { value: input[i], day: i };
    stockCollection.push(x)
  }

  stockCollection = stockCollection.sort((a, b) => a.value - b.value)

  let buyDay
  let sellDay
  let lowestStockValue
  let highestStockValue

  buyDay = stockCollection[0].day;
  sellDay = stockCollection[stockCollection.length - 1].day;

  lowestStockValue = stockCollection[0].value;
  highestStockValue = stockCollection[stockCollection.length - 1].value;

  if (lowestStockValue === highestStockValue) return [0, 0];
  
  return [buyDay, sellDay]
}

const stockValues = [1, 5, 6, 7, 34, 10];

console.log(getBuyAndSellDays(null));
console.log(getBuyAndSellDays([]));
console.log(getBuyAndSellDays([1, 5, 6, 7, 34, 10]));
console.log(getBuyAndSellDays([200, 1,5,6,7,34,10]));
console.log(getBuyAndSellDays([1,5,6,7,34,10,300]));
console.log(getBuyAndSellDays([10,1,5,6,7,34,10,20]));
console.log(getBuyAndSellDays([2,200,1,0,10]));
console.log(getBuyAndSellDays([70, 10]));
console.log(getBuyAndSellDays([1]));
console.log('last');

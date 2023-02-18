/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
  let maxProfit = 0;
  let minPrice = Infinity

  for (let i = 0; i < prices.length; i++) {
    if(prices[i] < minPrice) {
      minPrice = prices[i]
    }
    let currentProfit = prices[i] - minPrice

    if(currentProfit > maxProfit){
      maxProfit = currentProfit
    }
  }
  
  return maxProfit
};

console.log(maxProfit([4,1,5,2,7]))
module.exports = function getZerosCount(number, base) {
  let simpleMultipliers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251];
  let simpleMultipliersOfBase = new Map();
  let i = simpleMultipliers.length - 1, multiplier = simpleMultipliers[i];
  while(base > 1) {
    if (base % multiplier == 0) {
      base /= multiplier;
      if (simpleMultipliersOfBase.get(multiplier) == undefined) {
          simpleMultipliersOfBase.set(multiplier, 1);
      } else {
        simpleMultipliersOfBase.set(multiplier, simpleMultipliersOfBase.get(multiplier) + 1);
      };
    } else {
      multiplier = simpleMultipliers[--i];
    };
  }
  // console.log("base: ");
  // console.log(simpleMultipliersOfBase);

  let biggestMultiplierOfBase = 0;
  simpleMultipliersOfBase.forEach(function(value, key) {
    if (key > biggestMultiplierOfBase) {
      biggestMultiplierOfBase = key;
    };
  });

  // console.log("biggestMultiplierOfBase: " + biggestMultiplierOfBase);

  let amountBiggestMultiplierOfBaseInFactorial = 0, coef = biggestMultiplierOfBase;
  while(parseInt(number / coef) != 0) {
    amountBiggestMultiplierOfBaseInFactorial += parseInt(number / coef);
    coef *= biggestMultiplierOfBase;
  };

  // console.log("amountBiggestMultiplierOfBaseInFactorial: " + amountBiggestMultiplierOfBaseInFactorial);
  //
  // console.log(amountBiggestMultiplierOfBaseInFactorial / simpleMultipliersOfBase.get(biggestMultiplierOfBase));
  return parseInt(amountBiggestMultiplierOfBaseInFactorial / simpleMultipliersOfBase.get(biggestMultiplierOfBase));
}
// let number = 14423541, base = 193;
//
// let simpleMultipliers = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41];
// let simpleMultipliersOfBase = new Map();
// let i = simpleMultipliers.length - 1, multiplier = simpleMultipliers[i];
// while(base > 1) {
//   if (base % multiplier == 0) {
//     base /= multiplier;
//     if (simpleMultipliersOfBase.get(multiplier) == undefined) {
//         simpleMultipliersOfBase.set(multiplier, 1);
//     } else {
//       simpleMultipliersOfBase.set(multiplier, simpleMultipliersOfBase.get(multiplier) + 1);
//     };
//   } else {
//     multiplier = simpleMultipliers[--i];
//   };
//   console.log(base);
// }
// console.log("base: ");
// console.log(simpleMultipliersOfBase);
//
// let biggestMultiplierOfBase = 0;
// simpleMultipliersOfBase.forEach(function(value, key) {
//   if (key > biggestMultiplierOfBase) {
//     biggestMultiplierOfBase = key;
//   };
// });
//
// console.log("biggestMultiplierOfBase: " + biggestMultiplierOfBase);
//
// let amountBiggestMultiplierOfBaseInFactorial = 0, coef = biggestMultiplierOfBase;
// while(parseInt(number / coef) != 0) {
//   amountBiggestMultiplierOfBaseInFactorial += parseInt(number / coef);
//   coef *= biggestMultiplierOfBase;
// };
//
// console.log("amountBiggestMultiplierOfBaseInFactorial: " + amountBiggestMultiplierOfBaseInFactorial);
//
// console.log(amountBiggestMultiplierOfBaseInFactorial / simpleMultipliersOfBase.get(biggestMultiplierOfBase));

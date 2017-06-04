/*  function(digits)
 *
 *  @param {Number} digits         the amount of digits in each multiplicand
 *
 *  @return {Object} an object containing the two factors used to produce
 *                   the palindromeNumber and the palindromeNumber itself.
 */

module.exports = function(digit){
  var factor_0 = 0;
  var factor_1 = 0;
  var palindromeNumber = 0;
  var max;

  if(digit === 2){
    max = 100;
  }
  if(digit === 3){
    max = 1000;
  }


  // do your work here
  for(var i = 1; i < max; i++){
    for(var j = 1; j < max; j++){
      var num1 = i * j;
      var num2 = num1.toString().split("").reverse().join("");

      if(num1 === Number(num2) && palindromeNumber < num1){
        factor_0 = i;
        factor_1 = j;
        palindromeNumber = num1;
      }
    }
  }



  return {
    factor_0 : factor_0,
    factor_1 : factor_1,
    palindromeNumber : palindromeNumber
  };
};
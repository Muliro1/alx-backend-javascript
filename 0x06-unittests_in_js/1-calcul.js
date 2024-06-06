/**
 * This function is used to calculate the result of two numbers
 * with the given operation.
 *
 * @param {string} type - The type of the operation.
 *                        Valid options are 'SUM', 'SUBTRACT', and 'DIVIDE'.
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @return {number|string} The result of the operation.
 *                        In case of division, if 'b' is zero, it returns 'Error'.
 */
function calculateNumber(type, a, b) {

  // Convert 'a' and 'b' to integers.
  a = Math.round(a);
  b = Math.round(b);

  // Use switch statement to perform the operation.
  switch (type) {
    case 'SUM':
      // Add 'a' and 'b'
      return a + b;
    case 'SUBTRACT':
      // Subtract 'b' from 'a'
      return a - b;
    case 'DIVIDE':
      // Divide 'a' by 'b'
      // If 'b' is zero, return 'Error'
      return b !== 0 ? a / b : 'Error';
    default:
      return 'Error';
  }
}


module.exports = calculateNumber;

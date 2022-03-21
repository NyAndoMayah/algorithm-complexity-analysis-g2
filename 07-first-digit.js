/*
 * Find the leftmost digit that occurs in a given string.
 *
 * Example
 *
 * For inputString = "var_1__Int", the output should be solution(inputString) = '1';
 *
 * For inputString = "q2q-q", the output should be
 * solution(inputString) = '2';
 *
 * For inputString = "0ss", the output should be
 * solution(inputString) = '0'.
 */

const firstDigit = (inputString) => inputString.match(/\d/)[0];


/* inputString is taken by the function = 1;
 * then match search for digits in inputString : (read every elements in the input (1) + check the condition (1) ) * n such as n is the input length;
 * and when it finds the first digits in the input because we didn't use the "g" for global case with the RegExp, it takes the result which is in the index 0 of match parameters (in array) = 1;
 * 
 *  T7(n) = 1 + (1 + 1) * n + 1 : O(1) + O(1) * O(n) + O(1) ; n => +Infinity ;
 *  O(n) = n => linear complexity
*/
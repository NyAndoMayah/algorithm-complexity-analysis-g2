/*
 * You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other.
 * What is the value of the third integer ?
 */
const extraNumber = (a, b, c) => (a === b ? c : a === c ? b : a);//9
/*
T13=9
It's an integer, so the complexity is O(1)
*/

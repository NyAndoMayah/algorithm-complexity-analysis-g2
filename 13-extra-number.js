/*
 * You're given three integers, a, b and c. It is guaranteed that two of these integers are equal to each other.
 * What is the value of the third integer ?
 */
const extraNumber = (a, b, c) => (a === b ? c : a === c ? b : a);//9
/*
Ce code équivaut à:
const extraNumber=function(a,b,c){
  if(a === b) return c; //4
  else if(a === c) return b; //4
  return a //1
} 


T13=4+4+1=9
It's an integer, so the complexity is O(1)
*/



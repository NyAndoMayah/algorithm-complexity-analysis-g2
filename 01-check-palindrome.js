const checkPalindrome = (inputString) =>
  inputString === inputString.split("").reverse().join("");
/* 
on as deja = complexité de split() reverse() et join() en js sont O(n) avec n la longueur du String 
donc on a 
1 + 1 + 1 + (1 + 1 + 1)
O(1) + O(1) + O(1) + (O(n) + O(n) + O(n)) 
comme O(1) << O(n) 

le complexité est donc O(n)
*/

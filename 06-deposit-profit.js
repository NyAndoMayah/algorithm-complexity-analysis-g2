/*
 * You have deposited a specific amount of money into your bank account.
 * Each year your balance increases at the same growth rate.
 * With the assumption that you don't make any additional deposits,
 * find out how long it would take for your balance to pass a specific threshold.
 */
const depositProfit = (deposit, rate, threshold) =>
  Math.ceil(Math.log(threshold / deposit) / Math.log(rate / 100 + 1)); //10
/* 
Math.ceil: accès en mémoire donc 1 opération élémentaire
Math.log: accès en mémoire donc 1 opération élémentaire
threshold : appel de la variable(accès à la mémoire) donc 1 opération élémentaire
/ :opération arithmétique donc 1 opération élémentaire
deposit:appel de la variable(accès à la mémoire) donc 1 opération élémentaire
/ :opération arithmétique donc 1 opération élémentaire
Math.log: accès en mémoire donc 1 opération élémentaire
rate:appel de la variable(accès à la mémoire) donc 1 opération élémentaire
/ :opération arithmétique donc 1 opération élémentaire
+ :opération arithmétique donc 1 opération élémentaire
*/
/*
T6=1+1+1+1+1+1+1+1+1+1=10
T6 est un nombre entier, donc la compléxité algorithmique est constante ou O(1)
*/

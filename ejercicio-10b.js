var i = 0;
var pares = [];
var impar = [];

for (i = 0; i < 50; i++) {
  var x = Math.floor(1 + 100 * Math.random());
  n = x % 2;
  if(n == 0):
    pares.push(x)
  else:
    impares.push(x)

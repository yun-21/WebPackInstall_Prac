"use strict";

var add = function add(a, b) {
  var resultAdd = a + b;
  return resultAdd;
};
var nus = function nus(c, d) {
  var resultNus = c - d;
  return resultNus;
};
var all = function all() {
  var adden = add(4, 2);
  var nusen = nus(10, 6);
  return adden - nusen;
};
all();
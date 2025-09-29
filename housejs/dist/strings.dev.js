"use strict";

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 11, 22, 33, 44, 55, 66, 77, 88, 99]; //  17 elaman

var numbers2 = [5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 23, 38, 49, 58, 63, 71, 84, 103]; //  17 elaman

var numbers3 = [];
var numbers4 = []; //////////////////////////////////////////////////////////////////////////////////////

var total = numbers.reduce(function (accumulator, currentValue) {
  return accumulator + currentValue;
}, 0);
console.log("1. fonksiyon Toplam:", total); ////////////////////////////////////////////////////////////////////////////////////////   

numbers3 = numbers.concat(numbers2);
console.log("Birleştirilmiş Dizi (Merge) - Concat Metodu:", numbers3);
console.log(numbers3.sort); ///////////////////////////////////////////////////////////////

numbers4 = _toConsumableArray(new Set([].concat(numbers, numbers2))); // Tekilleştirilmiş diziyi sıralıyoruz

numbers4.sort(function (a, b) {
  return a - b;
});
console.log("Tekilleştirilmiş ve Sıralanmış Dizi:", numbers4); ///////////////////////////////////////////////////////////

var resultArray = []; // İki diziyi aynı anda dolaşıp elemanları topluyoruz

for (var _i = 0; _i < numbers.length; _i++) {
  // `numbers` dizisinden baştan, `numbers2` dizisinden sondan eleman alıyoruz
  var _sum = numbers[_i] + numbers2[numbers2.length - 1 - _i];

  resultArray.push(_sum);
}

console.log("Yeni Dizi (Baş + Son Toplamları):", resultArray); //////////////////////////////////

var sum = 0;
numbers.forEach(function (num) {
  sum += num;
});
console.log("For each Toplam:", sum); ////////////////////////////

var toplam = 0;

for (var i = 0; i < numbers.length; i++) {
  if (isNaN(numbers[i])) {
    continue;
  }

  toplam += Number(numbers[i]);
}

console.log(toplam); ///////////////////////////

var doubled = numbers.map(function (num) {
  return num * 2;
});
console.log("map ile İkiye Katlanmış Elemanlar:", doubled); ////////////////////////////

var evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log("filter ile Çift Sayılar:", evenNumbers); ////////////////////////////////////////////////////////

var firstOverFifty = numbers.find(function (num) {
  return num > 50;
});
console.log("find ile 50'den Büyük İlk Sayı:", firstOverFifty); //////////////////////////////////////////////////////

var hasOverHundred = numbers.some(function (num) {
  return num > 100;
});
console.log("100'den Büyük Bir Sayı Var mı?:", hasOverHundred);
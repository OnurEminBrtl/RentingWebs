let str = "Hello, World!";
console.log(str.charAt(0)); // "H"
console.log(str.charAt(7)); // "W"

let str1 = "Hello";
let str2 = "World";
let result = str1.concat(", ", str2, "!");
console.log(result); // "Hello, World!"

let sentence = "The quick brown fox jumps over the lazy dog.";
console.log(sentence.includes("fox")); // true
console.log(sentence.includes("cat")); // false

let text = "JavaScript is fun!";
console.log(text.indexOf("Script")); // 4
console.log(text.indexOf("not found")); // -1

let text2 = "The quick, brown fox";
let sliced = text2.slice(4, 10);
console.log(sliced); // "quick"

let text3 = "Hello, World!";
let part = text3.substring(7, 12);
console.log(part); // "World"

let text4 = "JavaScript";
console.log(text4.toLowerCase()); // "javascript"
console.log(text4.toUpperCase()); // "JAVASCRIPT"

let text5 = "   Hello, World!   ";
console.log(text5.trim()); // "Hello, World!"

let csv = "red,green,blue";
let colors = csv.split(",");
console.log(colors); // ["red", "green", "blue"]

let text6 = "Hello, World!";
let newText = text6.replace("World", "JavaScript");
console.log(newText); // "Hello, JavaScript!"

let text7 = "The quick brown fox jumps over the lazy dog.";
console.log(text7.lastIndexOf("o")); // 41 (Son "o" harfinin indeksi)
console.log(text7.lastIndexOf("fox")); // 16 ("fox" kelimesinin başlangıç indeksi)
console.log(text7.lastIndexOf("cat")); // -1 (Bulunamadı)

let text8 = "The quick brown fox jumps over the lazy dog.";
console.log(text8.search("quick")); // 4
console.log(text8.search(/fox/)); // 16
console.log(text8.search("cat")); // -1

let text9 = "JavaScript is fun!";
let part2 = text9.substring(0, 13);
console.log(part2); // "JavaScript"

let text10 = "JavaScript is fun!";
let part3 = text10.substring(11);
console.log(part3); // "is fun!"

let text11 = "Mazda,Opel,Toyota";
let part4 = text11.substr(11,6);
console.log(part4); // "JavaScript"

let text12 = "JavaScript is fun!";
let part5 = text12.substr(11);
console.log(part5); // "is fun!"
//array işlemleriyle beraber stringler aşağıdadır 



/*let words = ["Hello", "World", "JavaScript"];
let firstChars = words.map(word => word.charAt(0));
console.log(firstChars); // ["H", "W", "J"]

let str1 = ["Hello"];
let str2 = ["World"];
let result = str1.concat(", ", str2, "!");
let joinedResult = result.join('');
console.log(joinedResult); // "Hello, World!"

let animals = ["fox", "dog", "cat"];
let containsFox = animals.includes("fox");
let containsCat = animals.includes("cat");
console.log(containsFox && containsCat); // true

let phrases = ["JavaScript is fun!", "Scripted language", "Hello, World!"];
let indices = phrases.map(phrase => phrase.indexOf("Script"));
console.log(indices); // [4, 0, -1]

let phrases2 = ["The quicklies", "brown fox", "jumps over"];
let slices = phrases2.map(phrase2 => phrase2.slice(4, 10));//burada hata varmı sonra kontrol et!!!!!!!
console.log(slices); // ["quic", "n fox", "s ove"]

let sentences = ["Hello, World!", "JavaScript is fun!", "Learning is great!"];
let substrings = sentences.map(sentence => sentence.substring(7, 12));
console.log(substrings); // ["World", "ipt i", "g is "]

let words2 = ["JavaScript", "HTML", "CSS"];
let lowerCaseWords = words2.map(word => word.toLowerCase());
let upperCaseWords = words2.map(word => word.toUpperCase());
console.log(lowerCaseWords); // ["javascript", "html", "css"]
console.log(upperCaseWords); // ["JAVASCRIPT", "HTML", "CSS"]

let phrases3 = ["   Hello   ", " World!  ", "   JavaScript  "];
let trimmedPhrases = phrases3.map(phrase3 => phrase3.trim());//burada hata varmı sonra kontrol et!!!!!!! yukardakiyle farklı bişi yaptım ondan
console.log(trimmedPhrases); // ["Hello", "World!", "JavaScript"]

let sentences2 = ["red,green,blue", "one,two,three", "apple,banana,pear"];
let splitArrays = sentences2.map(sentence2 => sentence2.split(","));
console.log(splitArrays); 
// [["red", "green", "blue"], ["one", "two", "three"], ["apple", "banana", "pear"]]

let sentences3 = ["Hello, World!", "World of JavaScript", "Goodbye, World!"];
let newSentences = sentences3.map(sentence3 => sentence3.replace("World", "Universe"));
console.log(newSentences); 
// ["Hello, Universe!", "Universe of JavaScript", "Goodbye, Universe!"]

let phrases4 = ["The quick brown fox", "jumps over", "the lazy dog"];
let lastOIndices = phrases4.map(phrase4 => phrase4.lastIndexOf("o"));
console.log(lastOIndices); // [17, 6, 10]

let sentences4 = ["The quick brown fox", "jumps over", "the lazy dog"];
let searchIndices = sentences4.map(sentence4 => sentence4.search("quick"));
console.log(searchIndices); // [4, -1, -1]

let phrases5 = ["JavaScript is fun!", "Learning is great!", "Practice makes perfect!"];
let parts = phrases5.map(phrase5 => phrase5.substring(0, 10));
console.log(parts); // ["JavaScript", "Learning i", "Practice m"]

let phrases6 = ["Mazda,Opel,Toyota", "JavaScript is fun!", "Coding is rewarding"];
let parts2 = phrases6.map(phrase6 => phrase6.substr(11, 6));
console.log(parts2); // ["Toyota", "is fun", "wardin"]  */



let numbers = [1, 2, 3];
numbers.push(4);
console.log(numbers); // [1, 2, 3, 4]
///////////////////////////////////////////////
let fruits = ["apple", "banana"];
let newLength = fruits.push("orange", "pear");
console.log(fruits); // ["apple", "banana", "orange", "pear"]
console.log(newLength); // 4
////////////////////////////////////////////////////

let numbers2 = [1, 2, 3, 4];
let lastNumber = numbers2.pop();
console.log(numbers2); // [1, 2, 3]
console.log(lastNumber); // 4
////////////////////////////////////////////////////////
let fruits2 = ["apple", "banana", "orange"];
let lastFruit = fruits2.pop();
console.log(fruits2); // ["apple", "banana"]
console.log(lastFruit); // "orange"
/////////////////////////////////////////////////
let numbers3 = [1, 2, 3, 4];
let squared = numbers3.map(num => num * num);
console.log(squared); // [1, 4, 9, 16]
/////////////////////////////////////////////////////////////////////////
let names = ["Alice", "Bob", "Charlie"];
let greetings = names.map(name => `Hello, ${name}!`);
console.log(greetings); // ["Hello, Alice!", "Hello, Bob!", "Hello, Charlie!"]
let numbersx = [1, 2, 3];
numbersx.push(4);

// Diziyi boşlukla ayrılmış bir string olarak birleştirir
let output1 = numbersx.join(' ');
console.log(output1); // "1 2 3 4"
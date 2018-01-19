// Paste the code below into your HTML file.
// Take the contents of the sonnet div and place it in a variable.
var sonnet = document.getElementById("sonnet").innerHTML
console.log(sonnet);
// Find and output the starting position of the word "orphans".
var orphansPosition = sonnet.indexOf("orphans");
console.log(orphansPosition);
// Output the number of characters in the sonnet.
var sonnetLength = sonnet.length;
console.log(sonnet.length);
// Replace the first occurance of the string "winter" with "yuletide".
var sonnet = sonnet.replace("winter", "yuletide");
console.log(sonnet);
// Replace all occurances of the string "the" with "a large".
var sonnet = sonnet.replace(/the /gi, "a large ");
console.log(sonnet);
// Set the content of the sonnet div with the new string.
document.getElementById("sonnet").innerHTML = sonnet;
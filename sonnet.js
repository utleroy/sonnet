// Take the contents of the sonnet div and place it in a variable
// Find and output the starting position of the word "orphans"
// Output the number of characters in the sonnet
// Replace the first occurance of the string "winter" with "yuletide"
// Replace all occurances of the string "the" with "a large"
// Set the content of the sonnet div with the new string

var sonnetDiv = document.getElementById("sonnet");
var sonnet = sonnetDiv.innerHTML
var startingPos = sonnet.indexOf("orphans")
var length = sonnet.length

var replaceWinter = sonnet.replace(/winter/, "yuletide")
console.log(replaceWinter)
var replaceThe = replaceWinter.replace(/the/g, "a large")
console.log(replaceThe)

sonnetDiv.innerHTML = replaceThe
console.log(startingPos)
console.log(length)





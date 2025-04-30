// javaScript is case-sensitive

// 01-JavaScript Basics
alert('hello');
alert('Good job!');

2 + 2
10 - 3

document.body.innerHTML = 'hello';



// 02-Numbers and Math

// order of operations, and Brackets ()
// Calculated the numbers in final project
// calculations using floats can be inaccurate
// math.round()
// How to search for code on our own
2 + 2
10 - 3
10 * 3
10 / 2

2 + 2 + 2
2.2 + 2.2

10.90 * 2 + 20.95
10.90 * 2 + 20.95 + 4.99

// Order of operations:  * / operators are done first  + - operators are done after
1 + 1 * 3
(1 + 1) * 3

20.95 + 7.99 * 2
36.93 * 0.1          // 10% = 10/100 = 0.1
(20.95 + 7.99 * 2) * 0.1

// Inaccuracies with Floats:
0.1 + 0.2
20.95 + 7.99
(2095 + 799) / 100  // computers have problem with floats however this way solve this problem.

// alow pasting to solve problem of console

// How to round numbers:
Math.round(2.2)  // 2
Math.round(2.8)  // 3

((2095 + 799) * 0.1) / 100
Math.round((2095 + 799) * 0.1) / 100



// 03-Strings
// string = text
// use strings and numbers together
// three ways to create strings '' "" ``(templete strings)
// Escape Characters
// Interpolation, multi-line strings

// What should we use to create a string?
// 1. Use '' by default
// 2. if we need interpolation, multi-line strings use ``
'hello'
alert('hello');

'some' + 'text'
'some' + 'more' + 'text'

typeof 2
typeof 'hello'
// Type coercion [Automatic type conversion].
'hello' + 3
'$' + 20.95 + 7.99       // $20.957.99
'$' + (20.95 + 7.99)     // $28.9399999999999999999998
'$' + (2095 + 799) / 100 // $28.94

'Items (' + (1 + 1) + '): $' + (2095 + 799) / 100
alert('Items (' + (1 + 1) + '): $' + (2095 + 799) / 100);

"hello"
"I'm learning JavaScript"

//      \ called escape character (backSlash)
'I\'m learning JavaScript'
alert('some\ntext');

// `` have an advantage called interpolation = insert value directly into a string 
`hello`
`Items (${1 + 1}): $${(2095 + 799) / 100}`
// `` have an advantage called Multi-line Strings
`some
text`









// HTML CSS Review, console.log

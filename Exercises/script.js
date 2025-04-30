
// Lesson 1
console.log("Lesson 1 Exercises - JavaScript Basics")
// Note: do these exercises in the Console (right-click > Inspect > Console)


// 1a. Use alert(...); to display 'Good morning!' in a popup.
// console.log(alert("Good Moring")) 

// 1b. Display your name in a popup.
// console.log(alert("I am Ibrahim ali Mahrous ali")) 

// 1c. Using math, calculate 10 + 5 in the Console.
console.log(5 + 10)
// 1d. Calculate 20 - 5 in the Console.
console.log(20 - 5)
// 1e. Calculate 2 + 2 - 5 in the Console.
console.log(2 + 2 - 5)

// 1f. Use document.body.innerHTML to display Good morning! on the web page.
document.body.innerHTML = 'Good Moring!'
// 1g. Display your name on the web page.
document.body.innerHTML = 'I am Ibrahim ali Mahrous ali!'

// 1h. You order a T-shirt for $10, socks for $8, and dinner plates for $20. Use JavaScript to calculate the total cost of your order.
console.log(10 + 8 + 20)

// 1i. Your bank account has $100, you spend $20 on lunch, $50 on dinner,and earn $200 from your job. Calculate how much money you have.
console.log(100 - 20 - 50 + 200)

// 1j. Use document.body.innerHTML to make the web page blank.
document.body.innerHTML = ''











// Lesson 2
console.log("Lesson 2 Exercises - Numbers and Math")
// Note: do these exercises in the Console (right-click > Inspect > Console)


// 2a. At a restaurant, you order 1 soup for $10, 3 burgers for $8 each, and 1 ice cream for $5. Use JavaScript to calculate the cost of the order.
console.log(10 + 3 * 8 + 5 )


// 2b. You're at a restaurant with 2 friends (3 people in total) and make the same order as 2a. Calculate how much each person pays.
console.log((10 + 3 * 8 + 5) / 3)

// 2c. Calculate the total cost of a toaster ($18.50) and 2 shirts ($7.50 each).
console.log(18.50 + 2 * 7.50)

// 2d. Calculate a 10% tax for the total in exercise 2c.
console.log((18.50 + 2 * 7.50) * 0.1)


// 2e. Calculate a 20% tax for the total in 2c (remember that 1% = 1 / 100, so = 20 / 100 = 0.2).
console.log((18.50 + 2 * 7.50) * 0.2)


// Setup: in the Amazon project, go to the home page and add a toaster ($18.99) to your cart so you have 1 basketball, 1 t-shirt, and 1 toaster. 
// Choose $4.99 shipping for the toaster.
// 2f. Calculate the cost of the products (before shipping and taxes). inaccuracies.    خلي بالك احنا بنتعامل مع فلوووس يبق لازم تتعامل بالسينت وتقسم ع 100
console.log((2095 + 799 + 1899) / 100)


// 2g. Calculate the Total before tax.
console.log((2095 + 799 +(1899 + 499) ) / 100)

// 2h. Calculate the 10% tax exactly. Hint: use Math.round()
// console.log(Math.round(((2095 + 799 +(1899 + 499) ) / 100) * 0.1))        // انت حسبت هنا غلط اخر حاجة تقسم ع 100 ي محروووس
console.log(Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100)


// 2i. Calculate Order total at the bottom. 
console.log((2095 + 799 +(1899 + 499) ) / 100 + Math.round((2095 + 799 + 1899 + 499) * 0.1) / 100)



// 2j. Let's say we want to always round a number down (2.8 => 2) Using Google or an AOI. tool, search for the code to do this.
console.log(Math.floor(2.8))

// 2k. Let's always round a number up (2.2 => 3). Search how to do this.
console.log(Math.ceil(2.2))


// Challenge Exercises
// We'll use JavaScript to convert temperatures from Celsius (oc) to Fahrenheit (OF). The formula is:
// Fahrenheit = (Celsius * 9/5) + 32
// Celsius = (Fahrenheit - 32) * 5/9

// 21. The temperature is 250C. Calculate the temperature in Fahrenheit. (77)
console.log((25 * 9/5) + 32) // 77

// 2m. The temperature is 860F. Calculate the temperature in Celsius. (30)
console.log((86 - 32) * 5/9) // 30

// 2n. The temperature is -50C. Calculate the temperature in Fahrenheit. (23)
console.log((-5 * 9/5) + 32) // 23



// Lesson 3 Exercises - Strings
// Note: do these exercises in the Console (right-click > Inspect > Console)
console.log("Lesson 3 Exercises - Strings")

// 3a. Create the text 'My name is: ' as a string.
console.log('My Name Is: ')

// 3b. Create your name as a string (for example: Simon').
console.log('Ibrahim')

// 3c. Using concatenation, add the 2 strings from 3a and 3b together to create the text: 'My name is: with your name.
console.log('My Name Is:' + ' Ibrahim')

// 3d. At a restaurant, you order 1 coffee ($5) and 1 bagel ($3). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost: $ with the total you calculated).
console.log('Total cost: $' + (5 + 3))

// 3e. Do the same thing as 3d, but use a template string and interpolation.
console.log(`Total cost: $${5+3}`)

// 3f. Display the text from 3e in a popup using alert.
// alert(`Total cost: $${5+3}`)


// 3g. You order 1 coffee ($5.99) and 1 bagel ($2.95). Using math, calculate the total cost, and using concatenation, create the text: 'Total cost: $ (hint: calculate in cents to avoid inaccuracies)
console.log('Total cost: $' + ((599 + 295) / 100))


// 3h. Do the same thing as 3g, but use a template string and interpolation.
console.log(`Total cost: $${(599 + 295) / 100}`)


// 3i. Display the text from 3h in a popup.
//alert(`Total cost: $${(599 + 295) / 100}`)

// 3j. Using a multi-line string, create the text from 3h and add a line of text underneath: 'Thank you, come again!'. Display both lines in a popup.
// alert(`Total cost: $${(599 + 295) / 100}
// Thank you, come again! `);




// Challenge Exercises
// Setup: in the Amazon project, update the cart to 2 basketballs ($20.95 each) with $4.99 shipping and 2 t-shirt ($7.99 each) with $4.99 shipping.
// 3k. Using interpolation, create the first line of text (use math to calculate the numbers 4 and 57.88) output: Items (4): $57.88
console.log(`Items (${2 + 2}): $${(2095 + 2095 + 799 + 799) / 100}`)


// 31. Create second line of text: 'Shipping & handling: $9.98' (use math).
console.log(`Shipping & handling: $${(499 + 499) / 100}`)

// 3m. Create third line: 'Total before tax: $67.86' (use math).
console.log(`Total before tax: $${(2095 + 2095 + 799 + 799 + 499 + 499) / 100}`)

// 3n. Create fourth line of text: 'Estimated tax (10%):$6.79' (use math and Math.round(...); to calculate the exact number).
console.log(`Estimated tax (10%): $${Math.round((2 * 2095 + 2 * 799 + 499 + 499) * 0.1) / 100}`)



// Lesson 4 Exercises - HTML CSS Review.
// Note: to do these exercises, create an HTML file (like 4a.htmI, 4b.htmI)
console.log('Lesson 4 Exercises - HTML CSS Review.')


// Lesson 5 Exercises - Variables.
// Note: to do these exercises, create an HTML file (like 5a.htmI, 5b.html).
console.log('Lesson 5 Exercises - Variables.')



// Lesson 6 Exercises - Booleans and If-Statements
// Note: to do these exercises, create an HTML file (like 6a.html, 6b.htmI)
console.log('Lesson 6 Exercises - Booleans and If-Statements.')


// Lesson 7 Exercises - Functions
console.log('Lesson 7 Exercises - Functions')

// Lesson 8 Exercises - Objects
console.log('Lesson 8 Exercises - Objects')


// Lesson 9 Exercises - Document Object Model (DOM)
console.log('Lesson 9 Exercises - Document Object Model (DOM)')

// Lesson 10 Exercises - HTML, CSS, and JavaScript Together
console.log('Lesson 10 Exercises - HTML, CSS, and JavaScript Together')

// Lesson 11 Exercises - Arrays and Loops
console.log('Lesson 11 Exercises - Arrays and Loops')


// Lesson 12 Exercises - Advanced Functions
console.log('Lesson 12 Exercises - Advanced Functions')




/*

Challenge Exercises
The following exercises will build on the Rock Paper Scissors game.

12r. Make a copy of the Rock Paper Scissors game into the files 12r.html, 12r.css, and 12r.js.
Update the <link> and <script> elements to load 12r.css and 12r.js.
• Also, make a copy of the images and make sure they load properly.

12s. Update the 'Auto Play' button to use .addEventListener('click', instead of onclick="..."







12t. Update the 'Auto Play' button so that when the game is auto playing, the text in the button is 'Stop Playing'. Otherwise, the text in the button is 'Auto Play'.

12u. Update the code so pressing 'a' on keyboard will auto play the game.

12v. Update the 'Reset Score' button to use .addEventListener('click', ....)

12w. Update the code so pressing 'Backspace' will reset the score.

12x. When clicking 'Reset Score' or pressing 'Backspace', instead of resetting the score immediately, display a confirmation message below the button:

Are you sure you want to reset the score?


• Clicking 'Yes' will reset the score, and hide the message.
• Clicking 'No' will not reset the score, and hide the message.

*/
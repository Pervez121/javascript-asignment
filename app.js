// . Write a JavaScript program that accepts two numbers in two prompts and displays the larger one in the console.


let numone = prompt("enter First Number")
let numtwo = prompt("Enter Second Number")

if (numone > numtwo) {
    console.log(numone)
}
else if (numtwo > numone) {
    console.log(numtwo)
}
else {
    console.log("something went wrong")
}

// Write a JavaScript conditional statement to find the sign of a number. Display
// an alert box with the specified sign.

let number = -7; // replace with any number you want to check

if (number > 0) {
    alert("The number is positive.");
} else if (number < 0) {
    alert("The number is negative.");
} else {
    alert("The number is zero.");
}


// 3. Write a JavaScript program that accepts five numbers in five prompts and
// displays the larger one in the console.


let num1 = prompt("Enter the first number:");
let num2 = prompt("Enter the second number:");
let num3 = prompt("Enter the third number:");
let num4 = prompt("Enter the fourth number:");
let num5 = prompt("Enter the fifth number:");

let largest = num1; // assume first number is the largest

if (num2 > largest) {
    largest = num2;
}

if (num3 > largest) {
    largest = num3;
}

if (num4 > largest) {
    largest = num4;
}

if (num5 > largest) {
    largest = num5;
}

console.log("The largest number is " + largest);

// 4. Write a JavaScript for loop that will iterate from 0 to 15. For each iteration, it
// will check if the current number is odd or even, and display a message to the
// screen.
// Sample Output :
// "0 is even"
// "1 is odd"
// "2 is even"



let y = 16;
for (let x = 0; x < y; x++) {
    if (x % 2 == 0)
        console.log(x + " is even number")

    else if (x % 2 !== 0) {
        console.log(x + " is odd number")
    }
    else {
        console.log("something went Wrong")
    }
}

// 5. Write a JavaScript program which computes the average marks of the
// following students Then, this average is used to determine the corresponding
// grade.
// The grades are computed as follows :
// Range Grade
// <60 F
// <70 D
// <80 C
// <90 B
// <100 A

let marks = [80, 65, 92, 45, 75];

// Compute the average marks
let sum = 0;
for (let i = 0; i < marks.length; i++) {
    sum += marks[i];
}
let average = sum / marks.length;

// Determine the corresponding grade
let grade;
if (average < 60) {
    grade = "F";
} else if (average < 70) {
    grade = "D";
} else if (average < 80) {
    grade = "C";
} else if (average < 90) {
    grade = "B";
} else {
    grade = "A";
}

// Display the results
console.log("The average marks are " + average.toFixed(2) + " and the corresponding grade is " + grade + ".");


// 6. Write a JavaScript program which iterates the integers from 1 to 100. But for
// multiples of three print "Fizz" instead of the number and for the multiples of five
// print "Buzz". For numbers which are multiples of both three and five print
// "FizzBuzz".

for (let num = 0; num <= 100; num++) {

    if (num % 3 !== 0 && num % 5 !== 0) {

        console.log(num)
        // console.log("Fizz")
    }

    else if (num % 3 == 0 || num % 5 == 0) {
        if (num % 3 == 0 && num % 5 == 0) {
            console.log("fizz Buzz")
        }
        else if (num % 3 == 0 && num % 5 !== 0) {
            console.log("fizz")
        }
        else if (num % 5 == 0 && num % 3 !== 0) {
            console.log("buzz")
        }

    }
    else {
        console.log("Not a Number")
    }

}

// 7. Write a JavaScript program to construct the following pattern, using a nested
// for loop.
// *
// * *
// * * *
// * * * *
// * * * * *

for( let i = 1 ; i <= 5 ; i++){
    let row = "";
    for(let j = 1 ; j <= i ; j++ ){
        row += "* "
    }
    console.log(row)
}

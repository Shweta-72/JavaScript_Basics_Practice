console.log("Hello");
// Data Types ---------------------------

// variables, constants, comments

// VAR--------
var score = 34;
var score = 56;
console.log(score);

// LET--------
let points = 23;
// let points = 43; // throws error
points = 43;
console.log(points);

// CONST-----
const value = 33;
// const value = 43; // throws error
// value = 44;  // throws error
console.log(value);

// let score = null;
// score = 33;
// console.log(score);

// undefined-----------
let undefinedCheck;
console.log(undefinedCheck);

// String -------------
console.log("--------------------------");
console.log("Hello Coders");
let firstName = "wow";
let lastName = "programmers";
console.log(firstName, lastName);

// String Concatination

// Method 1 using + Operator
// let fullName = firstName + " " + lastName;
// console.log(fullName);

// Method 2 Using Template Literals
let fullName = `I want to become ${firstName} ${lastName}`;
console.log(fullName);

// Getting String Character
console.log(firstName[0]);

// String Methods
console.log(firstName.toLocaleUpperCase());
console.log(firstName.toLowerCase());
console.log(lastName.indexOf("o"));

// common String methods
let hobbies = "     coding reading running gfg running"; // this creates unwanted space
console.log(hobbies); // console.log(hobbies.trim());
let result = hobbies.trim();
console.log(result);

// indexOf
console.log(result.indexOf("coding"));
console.log(hobbies.indexOf("coding"));

// case-sensitive
// shows when last time used
console.log(hobbies.lastIndexOf("running"));

// string 'Include' method
// if only to check word exist or not then use "includes"
console.log(result.includes("Running"));
console.log(result.includes("running"));

// string 'Slice' method
// shows only sliced numbers
//  exlcude last one
let fullNameSlice = "wowprogrammer";
console.log(fullNameSlice.slice(0, 5));

// string 'Split' method
let favColors = "Brown,Blue, Yellow, Green";
let arrColors = favColors.split(",");
console.log(arrColors);

// JavaScript Strings are Immutable
// original string 'str' still exist in memory, but the variable name now refers to the new string "ffff"
// it does not modify string it just refers to new string
let str = "Hello";
str = "ffff";
str = str + "ygyy";
console.log(str);

// Numbers -----------------------
let scoreNumber = 50;
console.log(scoreNumber, typeof scoreNumber);

// Mathematical Opeartion * / % ** + -
// let resultnew = scoreNumber/2  // Gives Quotient
// let resultnew = scoreNumber % 2; // Gives Remainder

// Mathematical Expression
let resultnew = scoreNumber * 2 + 4 * 3 - ((8 / 2) % 4);

// Using Priority and Precedence
// 1 () Brackets
// 2 ** Power Operator
// 3 * / % (From Left to Right)
// 4 + - (From Left to Right)
console.log(resultnew);

// Strict Equality Operator
// Loose Equality (==) Vs Strict Quality Operator (===)
// Concatination of Numbers
let age = 22;
console.log(age);
console.log(age == "22"); // focus on 'Value' not 'Type'

console.log(age === "22"); //focus on both 'Value' and 'Type'

console.log(age !== "22");

// Type Conversion
let stringType = "22";
// let stringType = "dfd";  // NAN result
console.log(stringType, typeof stringType);

// Number Method
let numberType = Number(stringType); // all strings cannot be converted into number
console.log(numberType);
console.log(numberType, typeof numberType);

// String Method
let numberType2 = 54;
console.log(numberType2);
console.log(numberType2, typeof numberType2);
console.log("--------------------------");

let stringTypeNumber = String(numberType2); //number can be converted into string
console.log(stringTypeNumber, typeof stringTypeNumber);

// Boolean Method T/F
let age2 = 32; // empty string will be 'false' & 0 value
let booleanValueofAge = Boolean(age2);
console.log("Boolean Value of age is ", booleanValueofAge);

// Arrays -------------------------------

// let dish1 = "Biryani";
// let dish2 = "Chat";
// instead of creating seperate variable we can store in array

let dishes = ["Biryani", "Chat", "Parathay"];
// Access
console.log(dishes[0]); // first element

// Modify Array
dishes[0] = "dummyText"; // value gets override permanentaly
console.log(dishes);

// Array Methods

// 1. join method
console.log(dishes.join()); // default seperator it takes ',' comma
console.log(dishes.join("-"));

// 2. indexOf method
console.log(dishes.indexOf("chat")); // not found because it is case-sensitive
console.log(dishes.indexOf("Chat"));

// 3. concact method
let newDishes = ["sweet-dish", "pani-puri"];
console.log(dishes.concat(newDishes));
console.log(newDishes);

// 4. length method
console.log(dishes.length);
console.log(newDishes.length);

// find length on concated array
let updatedDish = dishes.concat(newDishes);
console.log(updatedDish.length);

// push method
console.log(updatedDish.push("bhullay")); // - add new element in array to last

// pop method
console.log(updatedDish.pop()); // - remove element in array to last
console.log(updatedDish);

// Boolean Values and Comparison operator
let booleanType = true;
let stringType1 = "true";

console.log(typeof booleanType, typeof stringType1);
console.log(booleanType);

// Methods return boolean values
let email = "wowcoder@gmail.com";

let booleanValue = email.includes("@");
console.log(booleanValue);

// Comparison Operator Always Return Boolean Value
// == , === , !==, !=
// > , >=
// < , <=
let statuses = "low";
console.log(statuses == "low");

let point = 23;
console.log(point === "23"); // strict equality false
console.log(point == "23"); // loose equality true
console.log(point != 234); // loose equality true
console.log(point !== "23"); // strict equality true
console.log(point < 30); // true

// let words = "Hello";
// console.log(words.slice(1,3));
// console.log(words.slice(1));
// console.log(words.slice(-1));

// CONTROL FLOW -----------------------------
// For loop

// Run the specific task 5 times
for (i = 1; i <= 5; i++) {
  console.log("Run the task ", i);
}

// Usecase of for loop ----------------
let array = ["Biryani", "Channa-chat", "Bhallay", "Pani-puri"];

// Access the Array values
for (i = 0; i < array.length; i++) {
  console.log(array[i]);
}
console.log(array.length);

// iteration and value of i
// 0, 1, 2, 3

// While loop -----------------
for (let i = 1; i <= 5; i++) {
  // infinite loop if we miss the conditional statement
  console.log("For loop", i);
}

let j = 1;
while (j <= 5) {
  //Get Error ->conditional statement is mandatory
  console.log("While loop", j);
  j++;
}

let dish = ["Biryani", "Channa-Chat", "bhallay", "karahai"];

let k = 0;
while (k < dish.length) {
  console.log("Favourite dish - ", dish[k]);
  k++; // without this statement it goes to infinite loop
}

// Do while loop --------------
let p = 1;
do {
  console.log("At Least Run Time =", p);
  p++;
} while (p <= 1);

// IF, ELSE, ELSE IF Statements ----------------
let budget = 500;
// let budget = 5000;
// let budget = 6000;

if (budget > 6000) {
  console.log("Will do dinner in hotel");
} else if (budget > 4500) {
  console.log("Will do dinner in 3 star hotel");
} else {
  console.log("Run if " + "All" + " condition are false ");
}
console.log("I am outside the block ");

// nested if statement --------------
let num = 22;
// let num = 26;

if (num > 22) {
  console.log("Run if 1st condition true");
  if (num > 25) {
    console.log("Run if Both conditions true");
  }
}

// Break and Continue Statement -----------------

// Continue ex:--------
for (i = 1; i <= 10; i++) {
  if (i == 2) {
    console.log("Value of i - ", i);
    continue; // Move towards next iteration
  }
}

// Break ex:----------
for (let i = 1; i <= 10; i++) {
  if (i == 5) {
    console.log("Our desired value is :-", i);
    break;
  }
  console.log("value of i = ", i);
}
console.log("Now I am Outside of the loop scope");

// Logical Operators -------------------------

// AND &&, OR ||, NOT !

let password = "querty@";

// AND Operator ---(&&)
if (password.length > 5 && password.includes("@")) {
  // if both condition 'True' then 'True' or 'false'

  console.log("Password Strength is Strong");
} else {
  // if condition doesn't satisfy
  console.log("Change Your Password");
}

// OR Operator ---(||)
if (password.length > 9 || password.includes("`")) {
  // if any 1 condition is 'True' then 'True' or 'false'

  console.log("Password length is Strong");
} else {
  console.log("Change Your Password");
}

// NOT example ---(!)

let Status = false;
if (!Status) {
  // change into true

  console.log("Your status is = ", Status);
}

// Priorities
// NOT
// AND, OR from left to right

// Example
let resultOperatorExample = (true && true) || (false && !false);
// resultOperatorExample = true && true || false && true --(first not operator will execute)
// resultOperatorExample = true || false && true --(then && and || operator execute from left-to-right)
// resultOperatorExample = true && true --(if both condition true then true)
// resultOperatorExample = true

console.log(resultOperatorExample);

// Variable and Block Scope -----------------------------

// scope >>- Area Where variable is defined or accessible

let scopeExample = 60; // Global scope

if (true) {
  let scopeExample = 50; // Block Scope

  console.log("scope example -", scopeExample); // Nearest value
}
console.log("global example -", scopeExample); // Nearest value

// Ternary Operator -------------------------------------

let ageTernaryOperatorExample = 17;

// for IF, ELSE condition

if (ageTernaryOperatorExample > 18) {
  console.log("Qualify");
} else {
  console.log("fail");
}

// let ternaryResult = ageTernaryOperatorExample > 18 ? "Qualify" : "fail";
// console.log("Ternary Operator result: ", ternaryResult);
// O/P - fail

let ternaryResult = ageTernaryOperatorExample > 8 ? "Qualify" : "fail";
console.log("Ternary Operator result: ", ternaryResult);
// O/P- Qualify

// ex-2- Single line solution

let ageTernaryOperatorExample2 = 19;
let weight = 60;

let ternaryResult2 =
  ageTernaryOperatorExample2 > 8
    ? weight > 70
      ? "Qualify"
      : "weightIssue"
    : "ageIssue";
console.log(ternaryResult2);

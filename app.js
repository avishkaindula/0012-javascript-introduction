// alert(20);
// alert('Hi, I\'m Indula!');
// alert("Hi, I'm Indula!");
// to use a ' mark inside a string, we need to add \ mark before ' mark.
// we can also use double quotes at the beginning and single quotes in the middle.

// ----------------------------------------------------------------------------------------------------------------------

// let greetingText;
// greetingText = "Hi, I'm a self taught developer!";
// "let" is the keyword to create variables.
// variable should be a "one word" without any - marks or any other special character.
// we should start with a lower case character, and then use upper case characters in the beginning of other sub-names.
// this is known as "camel case".
// alert(greetingText);

// we can also assign a value to a variable in the "same line" where the "let" keyword stands.
// let nextText = "I like programming!";
// alert(nextText);
// alert(nextText);

// nextText = "I like to produce music to!";
// we can also "overwrite" the value of the nextText variable like shown above.
// The new value is assigned to the nextText variable "after" the first value is assigned and executed to it.
// alert(nextText);

// let myAge;
// myAge = 20;
// alert(myAge);

// let newVar = "Avishka" + " Indula";
// alert(newVar);
// this is how we split string and add them together

// ---------------------------------------------------------------------------------------------------------------------

// let hobbies = ["Sports", "Cooking", "Reading", 1, 2];
// this is a JavaScript array.
// these are variables that holds more than one value.
// we can use a combination of strings and numbers as values of a JS array.
// alert(hobbies);

// alert(hobbies[0]);
// this is how we select a single item from the array
// we assign an index number to each item on tha array.
// that index number starts at 0
// so sports=0 cooking=1 reading=2

// -----------------------------------------------------------------------------------------------------------------------

// let job = { title: "Developer", place: "Sri Lanka", salary: 50000 };
// this is a object
// object contains different properties
// property is a combination of a label and a value
// for example, "just" a job title doesn't represent the big picture of a person's job roll.
// As a solution for that, first we can create a object called "job".
// Then we can give it some properties that describe the person's job.
// These properties all together defines the overall nature of the person's job.

// objects simplifies the code that could be written like shown below otherwise.
// let jobTitle = "developer";
// let jobPlace = "Sri Lanka";
// let jobSalary = 50000;

// alert(job.title);
// this is how we access a property of an object

// ----------------------------------------------------------------------------------------------------------------------

// let age = 35;
// let userName = "Avishka Indula";
// let hobbies = ["Sports", "Cooking", "Reading"];
// let job = { title: "Developer", place: "Sri Lanka", salary: 50000 };

// let adultYears = age - 18;
// this is how we perform operations in JavaScript
// alert(adultYears);

// let adultYears;
// before creating a function, we should first create a variable that holds the calculated result of the function.
// function calculateAdultYears() {
// let exampleAddition = 10 + 8;
// the variables created "inside" functions can "only" be used "inside" the functions.
// adultYears = age - exampleAddition;
// }
// this is how we create a function

// calculateAdultYears();
// we should "call" the function like this before outputting it's result.
// the calculation inside that function gets executed only when calling that function like this.
// alert(adultYears);

// age = 45;
// calculateAdultYears();
// alert(adultYears);

// --------------------------------------------------------------------------------------------------------------------

// We can also create a function without creating a variable that hold the calculated result of the function
// For that, we need to use the "return" keyword inside the function.
// function againCalculateAdultYears() {
// return age - 18;
// }

// let totalAdultYears;

// age = 55;
// totalAdultYears = againCalculateAdultYears();
// alert(totalAdultYears);

// age = 65;
// totalAdultYears = againCalculateAdultYears();
// We should call the function again like this and assign it's value to totalAdultYears when we assign a new value to age.
// If not, the below alert will output the result for age value of 55 again.
// alert(totalAdultYears);

// ---------------------------------------------------------------------------------------------------------------------

// let userYears;

// function userAdultYears(userAge) {
// return userAge - 18;
// }
// The userAge variable defined inside parenthesis is a variable that we use "inside" the function
// These variables are known as Parameters.

// age = 75;
// userYears = userAdultYears(age);
// When we call the function, we need to assign values to the parameters we defined in the function like this.
// That value can be assigned to the parameter as a "variable" which holds a value.
// This "age" is such a variable that holds a value.
// alert(userYears);

// userYears = userAdultYears(85);
// We can also assign a value "directly" to the parameters like this.
// alert(userYears);

// --------------------------------------------------------------------------------------------------------------------

// let anotherVariable;

// function anotherFunction(firstParameter, secondParameter) {
// We can create multiple parameters inside functions like this.
// We should separate those parameters using a coma.
// return firstParameter + secondParameter;
// }

// anotherVariable = anotherFunction(21, 23);
// When we call a function which holds two parameters, we also need to pass "two values" for those parameters like this.
// alert(anotherVariable);

// ----------------------------------------------------------------------------------------------------------------------

let person = {
  personName: "Max",
  greet() {
    alert("Hello!");
  },
};

// This is a function inside an object
// Functions inside objects are called "methods"

person.greet();

// This is how we execute a function inside an object.

// -------------------------------------------------------------------------------------------------------------

console.log("Hi mom!");
console.log("Hello World!");
// This is a built in object and a method.
// console is a built in object
// log is a built in method
// we can use console.log(); instead of alert();
// It makes our developer life easier.

let secondPerson = {
  personName: "Indula",
  secondGreet() {
    console.log("Lone Wolf");
  },
};
secondPerson.secondGreet();

let secondUserYears;
function secondUserAdultYears(secondUserAge) {
  return secondUserAge - 18;
}
secondUserYears = secondUserAdultYears(85);
console.log(secondUserYears);

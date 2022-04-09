// alert(20);
// alert('Hi, I\'m Indula!');
// alert("Hi, I'm Indula!");
// to use a ' mark inside a string, we need to add \ mark before ' mark.
// we can also use double quotes at the beginning and single quotes in the middle.

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

// we can also "overwrite" the value of the nextText variable.
// The new value is assigned to the nextText variable "after" the first value is assigned and executed to it.
// nextText = "I like to produce music to!";
// alert(nextText);

// let myAge;
// myAge = 20;
// alert(myAge);

let hobbies = ["Sports", "Cooking", "Reading", 1, 2];
// this is a JavaScript array.
// these are variables that holds more than one value.
// we can use a combination of strings and numbers as values of a JS array.
alert(hobbies);

alert(hobbies[0]);
// this is how we select a single item from the array
// we assign an index number to each item on tha array.
// that index number starts at 0
// so sports=0 cooking=1 reading=2

let newVar = "Avishka" + " Indula";
alert(newVar);
// this is how we split string and add them together

let job = { title: "Developer", place: "New York", salary: 50000 };
// this is a object
// object contains different properties
// property is a combination of a label and a value
// for example, "just" a job title doesn't represent the big picture of a person's job roll.
// As a solution for that, first we can create a object called "job".
// Then we can give it some properties that describe the person's job.
// These properties all together defines the overall nature of the person's job.

// objects simplifies the code that could be written like shown below otherwise.
// let jobTitle = "developer";
// let jobPlace = "New York";
// let jobSalary = 50000;

alert(job.title);
// this is how we access a property of an object

var nameofUser = "leo";

console.log(`${nameofUser}`);

/* Comentarios */

// Ask for the user's name
let userName = window.prompt("What's your name, bro?");

// Ask for the user's age
let age = window.prompt("What's your age?");

// Convert the age to a number
age = parseInt(age);

// Check if the age is less than or equal to 18
if (age <= 18) {
  // Display a message if the user is under 18
  window.alert("Sorry, you don't have 18 years.");
} else {
  // Display a welcome message if the user is 18 or older
  window.alert("Hello, welcome to the site!");
}

const Soma = (n1, n2) => {
  // Functions with parmetres from JavaScript
  let numbers = n1 + n2;
  return console.log("A soma deu " + numbers);
};

Soma(1, 1);

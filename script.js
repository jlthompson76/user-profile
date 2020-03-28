// Write a script that will ask the user questions about themselves and store the information into an object.

let fullName, birthYear, favFoods, hasPet;

// 1. Ask the user for their full name (first and last).

fullName = prompt(`Hello, what is your first and last name?`);
console.log(fullName);

// 2. Ask the user for their birth year.

birthYear = Number(prompt(`What year were you born? (Please enter as a four-digit number.)`));
console.log(birthYear);

// 3. Ask the user for their top 3 favorite foods (comma separated).

favFoods = prompt(`What are your top three favorite foods? Please enter them separated by commas. Example: pizza, tacos, chocolate`);
console.log(favFoods);

// 4. Ask the user if they have a pet (yes/no).

hasPet = prompt('Do you have a pet (or pets)? Please enter yes or no');
hasPet = hasPet.toLowerCase;
console.log(hasPet);

if (hasPet = "yes") {
    hasPet = true;
} else {
    hasPet = false;
} console.log(hasPet);

// Using these pieces of information:

// 1. Create an object using the object literal notation.

let user = {};

// 2. Extract the user's first name using two String methods and store it in the object.

let spaceIndex = fullName.indexOf(" ");
user.firstName = fullName.substring(`0`, spaceIndex);

// 3. Log the first name to the console.

console.log(user.firstName);

// 4. Do the same with the user's last name and log it to the console.

user.lastName = fullName.substring(spaceIndex + 1, fullName.length);
console.log(user.lastName);

// 5. Calculate the user's age and log it to the console.

user.age = 2020 - birthYear;
console.log(user.age);

// 6. Extract the comma separated list of favorite foods and store it into an array in the object.


console.log(user.favoriteFoods);

// 7. Loop through the array to log the messages "I love [food]" for each item in the array.



// 8. If the user has a pet, log a positive message, otherwise tell them they should get one.

user.hasPet = hasPet;
console.log(hasPet);
if (hasPet = true) {
    console.log(`That's great, ${user.firstName}! Pets bring a lot of joy to people's lives, as I'm sure you know.`);
} else {
    console.log(`${user.firstName}, I'm sorry to hear that you don't have any pets. I strongly encourage you to consider adopting a pet, you won't regret it!`);
}

// 9. Log the object to the console. Note to not include anything else when logging: `console.log(object);`

console.log(user);

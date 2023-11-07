// Qno#2
let personName: string = "Eric";

let message: string = `Hello ${personName}, would you like to learn some Python today?`;

console.log(message);

// Qno#3

let personName2: string = "John Doe";
let lowercaseName: string = personName.toLowerCase();
let uppercaseName: string = personName.toUpperCase();
let titlecaseName: string = personName.charAt(0).toUpperCase() + personName.slice(1).toLowerCase();

console.log("Lowercase Name: ", lowercaseName);
console.log("Uppercase Name: ", uppercaseName);
console.log("Titlecase Name: ", titlecaseName);

// Qno#4

let famousQuote = 'Albert Einstein once said, "A person who never made a mistake never tried anything new."';
console.log(famousQuote);

// Qno#5

let famous_person = 'Albert Einstein';
let message2 = `${famous_person} once said, "A person who never made a mistake never tried anything new."`;
console.log(message2);

// Qno#6

let personName1 = "\t   John Doe\n  ";
console.log(personName1);
console.log(personName1.trim());

// Qno#7

console.log(5 + 3);
console.log(10 - 2);
console.log(4 * 2);
console.log(16 / 2);

// Qno#8

console.log(5+3);
console.log(5+3);
console.log(5+3);
console.log(5+3);

// Qno#9

const favoriteNumber = 5;
console.log(`My favorite number is ${favoriteNumber}.`);

// Qno#10


let personName3 = "Eric";
console.log(`Hello ${personName3}, would you like to learn some TypeScript today?`);

let personName5 = "John Doe";
console.log(personName5.toLowerCase());
console.log(personName5.toUpperCase());
console.log(personName5.replace(/\w\S*/g, (txt) => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase()));


// Qno#11

let names: string[] = ["Nabeel", "Kashan", "Sameer"];
for (const name of names) {
  console.log(name);
}

// Qno#12

let names2: string[] = ["Alice", "Bob", "Charlie"];
let greeting = "Hello, ";
for (const name of names) {
  console.log(greeting + name + "!");
}

// Qno#13

let transportation = ["car", "motorcycle", "bicycle"];
for (const item of transportation) {
  console.log(`I would like to own a ${item}.`);
}

// Qno#14

let guestList: string[] = ["Nabeel", "Sameer", "Zaroon"];
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Qno#15

let guestList2: string[] = ["Nabeel", "Sameer", "Zaroon"];
let guestUnableToAttend = "Sameer";

console.log(`Unfortunately, ${guestUnableToAttend} can't make it to the dinner.`);

// Replace the guest who can't attend with a new person
let newGuest = "kashan";
guestList[guestList.indexOf(guestUnableToAttend)] = newGuest;

// Print a second set of invitation messages
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}


// Qno#16

console.log("Good news! We found a bigger dinner table.");

// Add new guests to the guest list

guestList.unshift("Zain"); 
guestList.splice(2, 0, "Abdullah");
guestList.push("Zaid");

// Print a new set of invitation messages
for (const guest of guestList) {
  console.log(`Dear ${guest}, you are invited to dinner.`);
}

// Qno#17

console.log("Oops! The new dinner table won't arrive in time, and we can only invite two people.");

while (guestList.length > 2) {
  const removedGuest = guestList.pop();
  console.log(`Sorry, ${removedGuest}, we can't invite you this time.`);
}


for (const guest of guestList) {
  console.log(`Dear ${guest}, you are still invited to dinner.`);
}


guestList.length = 0;
console.log(guestList); 

// Qno#18

const placesToVisit: string[] = ["Paris", "Tokyo", "New York", "Rome", "Sydney"];

console.log("Original Order:");
console.log(placesToVisit.join(', '));

console.log("\nAlphabetical Order:");
console.log(placesToVisit.slice().sort().join(', '));

console.log("\nReverse Alphabetical Order:");
console.log(placesToVisit.slice().sort().reverse().join(', '));

console.log("\nOriginal Order (still):");
console.log(placesToVisit.join(', '));


// Qno#19

const dinnerGuests: string[] = ["Nabeel", "Sameer", "Zaroon"];
const numberOfGuests = dinnerGuests.length;
console.log(`Number of people invited to dinner: ${numberOfGuests}`);


// Qno#20

const mountains: string[] = ["Everest", "K2", "Matterhorn", "Denali", "Mont Blanc"];
console.log(mountains);

// Qno#21

const favoriteThings: { item: string }[] = [
    { item: "mountains" },
    { item: "beaches" },
    { item: "books" },
    { item: "music" },
    { item: "travel" }
  ];
  console.log(favoriteThings);

//   Qno#22

const arr: number[] = [1, 2, 3];
console.log(arr[10]); // Accessing an out-of-bounds element


// Qno#23

let car = 'subaru';

console.log("Is car == 'subaru'? I predict True.");
console.log(car == 'subaru');

console.log("Is car != 'honda'? I predict True.");
console.log(car != 'honda');

console.log("Is car === 'subaru'? I predict True.");
console.log(car === 'subaru');

console.log("Is car !== 'subaru'? I predict True.");
console.log(car !== 'subaru');

console.log("Is car === 'honda'? I predict False.");
console.log(car === 'honda');

console.log("Is car !== 'honda'? I predict False.");
console.log(car !== 'honda');

console.log("Is car == 'Subaru'? I predict False.");
console.log(car == 'Subaru');

console.log("Is car != 'Subaru'? I predict False.");
console.log(car != 'Subaru');



// Qno#24

let fruit1 = "apple";
let fruit2 = "banana";
let color1 = "orange";
let color2 = "blue";

console.log("Equality Tests:");
console.log(fruit1 == fruit2); 
console.log(fruit1 == color1);
console.log(fruit1 == "apple");
console.log(fruit1 == color2);

console.log("Inequality Tests:");
console.log(fruit1 != fruit2);
console.log(fruit1 != color1);
console.log(fruit1 != "apple"); 
console.log(fruit1 != color2);

console.log("Lowercase Tests:");
console.log(fruit1.toLowerCase() == "apple");
console.log(fruit2.toLowerCase() == "Banana".toLowerCase());
console.log(color1.toLowerCase() == "OrAnGe".toLowerCase());

console.log("Numerical Tests:");
const num1 = 10;
const num2 = 5
console.log(num1 > num2);
console.log(num1 < num2); 
console.log(num1 >= num2);
console.log(num1 <= num2); 

console.log("Logical Tests:");
console.log(true && true);
console.log(true && false); 
console.log(true || false);
console.log(false || false); 


// Qno#25

let alienColor = "green";

if (alienColor === "green") {
  console.log("The player just earned 5 points.");
}

// Qno#26

let alienColor2 = "red";

if (alienColor2 === "green") {
  console.log("The player just earned 5 points for shooting the alien.");
} else {
  console.log("The player just earned 10 points.");
}

// Qno#27

let alienColor3 = "yellow";

if (alienColor3 === "green") {
  console.log("The player earned 5 points.");
} else if (alienColor3 === "yellow") {
  console.log("The player earned 10 points.");
} else if (alienColor3 === "red") {
  console.log("The player earned 15 points.");
}

// Qno#28

const age = 18;

if (age < 2) {
  console.log("The person is a baby.");
} else if (age >= 2 && age < 4) {
  console.log("The person is a toddler.");
} else if (age >= 4 && age < 13) {
  console.log("The person is a kid.");
} else if (age >= 13 && age < 20) {
  console.log("The person is a teenager.");
} else if (age >= 20 && age < 65) {
  console.log("The person is an adult.");
} else {
  console.log("The person is an elder.");
}

// Qno#29

let favoriteFruits: string[] = ["banana", "apple", "kiwi", "cherry"];

if (favoriteFruits.indexOf("banana")) {
  console.log("You really like bananas!");
}
if (favoriteFruits.indexOf("apple")) {
  console.log("You really like apples!");
}
if (favoriteFruits.indexOf("strawberry")) {
  console.log("You really like strawberries!");


}

// Qno#30

let usernames: string[] = ["user1", "user2", "admin", "user3", "user4"];

for (const username of usernames) {
  if (username === "admin") {
    console.log("Hello admin, would you like to see a status report?");
  } else {
    console.log(`Hello ${username}, thank you for logging in again.`);
  }
}

// Qno#31

let usernames2: string[] = [];
if (usernames.length === 0) {
  console.log("We need to find some users!");
}

usernames.length = 0;

// Qno#32

let currentUsers: string[] = ["John", "Alice", "Bob", "Charlie"];
let newUsers: string[] = ["David", "Bob", "Eve", "Frank"];

for (const newUser of newUsers) {
  if (currentUsers.some((user) => user.toLowerCase() === newUser.toLowerCase())) {
    console.log(`Username '${newUser}' is not available.`);
  } else {
    console.log(`Username '${newUser}' is available.`);
  }
}

// Qno#33

let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];

for (const number of numbers) {
  let ordinal = "";
  if (number === 1) {
    ordinal = "1st";
  } else if (number === 2) {
    ordinal = "2nd";
  } else if (number === 3) {
    ordinal = "3rd";
  } else {
    ordinal = number + "th";
  }
  console.log(ordinal);
}

// Qno#34

let favoritePizzas: string[] = ["Pepperoni", "Margherita", "Supreme"];

for (const pizza of favoritePizzas) {
  console.log(`I like ${pizza} pizza.`);
}
console.log("I really love pizza!");

// Qno#35

let animals: string[] = ["dog", "cat", "rabbit"];

for (const animal of animals) {
  console.log(`A ${animal} would make a great pet.`);
}
console.log("Any of these animals would make a great pet!");

// Qno#36

function make_shirt(size: string, message: string = "I love TypeScript") {
  console.log(`Shirt size: ${size}`);
}


make_shirt("Medium");

// Qno#37


function make_shirt2(size: string, message: string = "I love TypeScript") {
  console.log(`Shirt size: ${size}, Message: ${message}`);
}

make_shirt("Medium");
make_shirt("Large", "Hello World");

// Qno#38

function describe_city(city: string, country: string = "unknown") {
  console.log(`${city} is in ${country}.`);
}

describe_city("Karachi", "Pakistan");
describe_city("Paris"); 
describe_city("New York", "USA");


// Qno#39

function city_country(city: string, country: string): string {
  return `${city}, ${country}`;
}

console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Berlin", "Germany"));
console.log(city_country("Tokyo", "Japan"));


// Qno#40

function make_album(artist: string, title: string, tracks?: number): { artist: string; title: string; tracks?: number } {
  let album = { artist, title };
  if (tracks) {
    album.artist= artist;
  }
  return album;
}

const album1 = make_album("Artist1", "Album 1");
const album2 = make_album("Artist2", "Album 2", 12);
const album3 = make_album("Artist3", "Album 3", 10);

console.log(album1);
console.log(album2);
console.log(album3);


// Qno#41

function show_magicians(magicians: string[]) {
  for (const magician of magicians) {
    console.log(magician);
  }
}
let magiciansList: string[] = ["Magician1", "Magician2", "Magician3"];

show_magicians(magiciansList);

// Qno#42

function make_great(magicians: string[]): string[] {
  const greatMagicians: string[] = magicians.map((magician) => `the Great ${magician}`);
  return greatMagicians;
}

let magiciansList2: string[] = ["Magician1", "Magician2", "Magician3"];
let greatMagiciansList: string[] = make_great(magiciansList2);

show_magicians(greatMagiciansList);

// Qno#43

const originalMagiciansList: string[] = ["Magician1", "Magician2", "Magician3"];
const greatMagiciansList3: string[] = make_great([...originalMagiciansList]);

show_magicians(originalMagiciansList);
show_magicians(greatMagiciansList3);

// Qno#44

function make_sandwich(...items: string[]) {
  console.log("Sandwich with:");
  for (const item of items) {
    console.log(`- ${item}`);
  }
}

make_sandwich("Bread", "Cheese", "Lettuce");
make_sandwich("Bread", "Turkey", "Tomato", "Mustard", "Cheese");
make_sandwich("Bread", "Peanut Butter", "Banana");

// Qno#45

function carInfo(manufacturer: string, model: string, options: { color?: string; feature?: string } = {}): object {
  const car: { [key: string]: string | undefined } = {
    manufacturer,
    model,
    color: options.color,
    feature: options.feature,
  };
  return car;
}

const car1 = carInfo("Toyota", "Camry");
const car2 = carInfo("Tesla", "Model 3", { color: "blue", feature: "Autopilot" });
const car3 = carInfo("Honda", "Civic", { color: "red" });

console.log(car1);
console.log(car2);
console.log(car3); 
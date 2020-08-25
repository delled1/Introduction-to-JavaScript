/************************************************************** Task 1: Warm-up! **************************************************************/
//Task a: declare a variable called votingAge, console log true if age > 18 (no function required)

const votingAge = 18;

if (votingAge > 18) {
  console.log(true);
} else {
  console.log(false);
}

//Task b: declare a variable and then use a conditional to change the value of that variable based on the value assigned to a second variable (no function required)

let dinner = "soup";
let temperature = 89;

if (temperature >= 90) {
  dinner = "Not soup";
} else {
  dinner = "Soup";
}
console.log(dinner);

//Task c: Convert string ("1999") to integer (1999)  (no function required) // hint look up the Number method

Number("1999");

//Task d: Write a function to multiply a*b

const multiply = (a, b) => console.log(a * b);

multiply(2, 5);
/************************************************************** Task 2 **************************************************************/
//Age in Dog years
//write a function that takes your age and returns it to you in dog years - they say that 1 human year is equal to seven dog years

function ageInDogYears(age) {
  let dogYearsAge = 7 * age;
  console.log(dogYearsAge);
}

ageInDogYears(1);

/************************************************************** Task 3 **************************************************************/
//Dog feeder
//takes weight in pounds and age in years (note if the dog is a puppy the age will be a decimal) and returns the number of pounds of raw food to feed in a day.

//feeding requirements
// adult dogs at least 1 year
// up to 5 lbs - 5% of their body weight
// 6 - 10 lbs - 4% of their body weight
// 11 - 15 lbs - 3% of their body weight
// > 15lbs - 2% of their body weight

// Puppies less than 1 year
// 2 - 4 months 10% of their body weight
// 4 - 7 months 5% of their body weight
// 7 - 12 months 4% of their body weight

function dogFeeder(age, bodyWeight) {
  if (age >= 1 && bodyWeight <= 5) {
    console.log(bodyWeight * 0.05);
  } else if (age >= 1 && bodyWeight <= 10) {
    console.log(bodyWeight * 0.04);
  } else if (age >= 1 && bodyWeight <= 15) {
    console.log(bodyWeight * 0.03);
  } else if (age >= 1 && bodyWeight > 15) {
    console.log(bodyWeight * 0.02);
  } else if (age >= 7 / 12) {
    console.log(bodyWeight * 0.04);
  } else if (age >= 4 / 12) {
    console.log(bodyWeight * 0.05);
  } else if (age >= 2 / 12) {
    console.log(bodyWeight * 0.1);
  }
}
dogFeeder(0.5, 15);

// when you are finished invoke your function with the weight of 15 lbs and the age of 1 year - if your calculations are correct your result should be 0.44999999999999996

/************************************************************** Task 4 **************************************************************/
// Rock, Paper, Sissors
// Your function should take a string (either rock paper or sissors)
// it should return you won or you lost based on the rules of the game (you may need to look up the rules if you have not played before)
// use math.random to determine the computers choice
// hint while you can complete this with only conditionals based on strings it may help to equate choice to a number

let computer1 = Math.random();
if (computer1 <= 1 / 3) {
  computer1 = "rock";
} else if (computer1 <= 2 / 3) {
  computer1 = "scissors";
} else {
  computer1 = "paper";
}
let computer2 = Math.random();
if (computer2 <= 1 / 3) {
  computer2 = "rock";
} else if (computer2 <= 2 / 3) {
  computer2 = "scissors";
} else {
  computer2 = "paper";
}
console.log("Computer 1 " + computer1);
console.log("Computer 2 " + computer2);

let RPS = function (computerChoice1, computerChoice2) {
  if (computerChoice1 === computerChoice2) {
    console.log("TIE GAME!");
  } else if (computerChoice1 === "rock") {
    if (computerChoice2 === "scissors") {
      console.log("Rock wins!");
    } else {
      console.log(computerChoice2 + " wins!");
    }
  } else if (computerChoice1 === "paper") {
    if (computerChoice2 === "rock") {
      console.log("Paper wins!");
    } else {
      console.log(computerChoice2 + " wins!");
    }
  } else if (computerChoice1 === "scissors") {
    if (computerChoice2 === "paper") {
      console.log("Scissors wins!");
    } else {
      console.log(computerChoice2 + " wins!");
    }
  }
};

RPS(computer1, computer2);

/************************************************************** Task 5 **************************************************************/
//Metric Converter
//a. KM to Miles - should take the number of kilometers and convert it to the equal number of miles

function kilometersToMiles(km) {
  let miles = km * 0.621371;
  console.log(miles + " miles");
}

kilometersToMiles(100);

//b. Feet to CM - should take the number of feet and convert it to the equal number of centimeters

function feetToCentimeteres(f) {
  let cm = f * 30.48;
  console.log(cm + " cm");
}

feetToCentimeteres(10);
/************************************************************** Task 6 **************************************************************/
// 99 bottles of soda on the wall
// create a function called annoyingSong
// the function should take a starting number as an argument and count down - at each iteration it should log (number) bottles of soda on the wall, (number) bottles of soda, take one down pass it around (number left over) bottles of soda on the wall`

for (let i = 99; i >= 0; i--) {
  if (i >= 1) {
    console.log(
      i +
        " bottles of soda on the wall, " +
        i +
        " bottles of soda, take one down pass it around " +
        (i - 1) +
        " bottles of soda on the wall"
    );
  } else {
    console.log("No more bottles of soda on the wall");
  }
}
/************************************************************** Task 7 **************************************************************/
//Grade Calculator
//write a javaScript program that takes a mark out of 100 and returns a corisponding letter grade
//90s should be A
//80s should be B
//70s should be Cs
//60s should be D
//and anything below 60 should be F

function grade(score) {
  if (score < 60) {
    console.log("F");
  } else if (score <= 69) {
    console.log("D");
  } else if (score <= 79) {
    console.log("C");
  } else if (score <= 89) {
    console.log("B");
  } else if (score <= 99) {
    console.log("A");
  } else if (score > 100) {
    console.log("Your grade is out of this world!");
  }
}
grade(59);

/************************************************************** Stretch **************************************************************/
//Create a function that counts the number of vowels within a string. It should handle both capitalized and uncapitalized vowels.
// Hint - you may need to study tomorrow's traning kit on arrays
// try looking up the .includes() method

/************************************************************** Stretch **************************************************************/
//Take Rock, Paper, Sissors further
//update your rock papers sissors code below to take a prompt from a user using the window object

let user = prompt("Rock, paper, or scissors?");
let computer = Math.random();
if (computer <= 1 / 3) {
  computer = "rock";
} else if (computer <= 2 / 3) {
  computer = "scissors";
} else {
  computer = "paper";
}

console.log("Your choice: " + user);
console.log("Computer's choice: " + computer);

let RPS2 = function (userChoice, computerChoice) {
  if (userChoice === computerChoice) {
    console.log("TIE GAME!");
  } else if (userChoice === "rock") {
    if (computerChoice === "scissors") {
      console.log("Rock wins!");
    } else {
      console.log(computerChoice + " wins!");
    }
  } else if (userChoice === "paper") {
    if (computerChoice === "rock") {
      console.log("Paper wins!");
    } else {
      console.log(computerChoice + " wins!");
    }
  } else if (userChoice === "scissors") {
    if (computerChoice === "paper") {
      console.log("Scissors wins!");
    } else {
      console.log(computerChoice + " wins!");
    }
  }
};

RPS2(user, computer);

// /* Les fonctions */
const isPalindrome = (word) => {
  let word2 = word.toUpperCase().split("").reverse().join("");
  return word === word2;
};

console.info(isPalindrome("kayak"));
console.info(isPalindrome("hello"));
console.info(isPalindrome("SOS"));
console.info(isPalindrome("radar"));

const students = [
  { name: "Jonh", age: 20, notes: [1, 2, 18, 19, 12] },
  { name: "Jane", age: 22, notes: [12, 2, 12, 9, 20] },
  { name: "Jack", age: 21, notes: [10, 11, 8, 9, 12, 2] },
  { name: "Jill", age: 20, notes: [10, 19, 10.5, 7, 11, 11] },
  { name: "fab", age: 12, notes: [20, 9, 14.5, 17, 11.5, 11.25] },
];

for (const student of students) {
  const average = student.notes.reduce((prev, current) => prev + current, 0);
  student["avg"] = average / student.notes.length;
  //console.log(student);
}

students.sort((a, b) => b.avg - a.avg);

students.forEach((student) => console.info(student));
console.info("Top 3 students:");
students
  .slice(0, 3)
  .forEach((student) =>
    console.info(
      "Name: " + student.name + " \nNote: " + student.avg.toPrecision(5)
    )
  );

//Next
const message =
  "Le chat noir regarde le chien! Le chat blanc observe le jardin; le chat gris surveille le chien pendant que le jardin fleurit, car le jardin est magnifique quand le soleil brille sur le chat noir.";

const words = message
  .toLowerCase()
  .trim()
  .replaceAll(".", " ")
  .replaceAll(",", " ")
  .replaceAll(";", " ")
  .replaceAll("?", " ")
  .replaceAll("!", " ")
  .replaceAll(":", " ")
  .replaceAll('"', " ")
  .replaceAll("'", " ")
  .split(" ");
const frequency = {};
const frequenciesArray = [];
for (const word of words) {
  if (word !== "") {
    if (frequency[word])
      frequency[word]++; //lors du premier passage il est false car undefined
    else frequency[word] = 1;
  }
}
for (const key in frequency) {
  frequenciesArray.push({ word: key, frequency: frequency[key] });
}
frequenciesArray.forEach((word) => console.info(word));
//console.info(words);

// console.info(canDrive(15, "France"));
// console.info(canDrive(19, "France"));
// function canDrive(age, country) {
//   // portée globale
//   if ((age >= 18 && country == "France") || (age >= 16 && country == "US")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// //console.info(canDrive2(15,"France"));  impossible car la fonction est définie après son appel

// // Les functions avec noms comme variables ==portée a partir de la declaration
// const canDrive2 = function (age, country) {
//   if ((age >= 18 && country == "France") || (age >= 16 && country == "US")) {
//     return true;
//   } else {
//     return false;
//   }
// };
// console.info(canDrive2(15, "France"));

// const gretting = function (name) {
//   console.info(`Bonjour ${name}`);
// };
// gretting("Jean"); // 1er parametre de la fonction
// gretting("Pierre"); // 2eme parametre de la fonction

// const test = {
//   firstName: "Fabrice",
//   lastName: "Dupont",
//   myFunction: function () {
//     console.info(this);
//   },
// };

// test.myFunction(); // this = test

// const addNumbers = (a, b) => {
//   return a + b;
// };

// console.info(addNumbers(5, 7)); // 12

// //Callback function
// const isPair = (a, cb) => {
//   if (a % 2 == 0) {
//     () => cb(a);
//   }
// };
// const fn = (a) => {
//   console.info(`${a} est pair`);
// };
// isPair(10, fn(10));

// // const person = {
// //   firstName: "Fabrice",
// //   lastName: "Kouonang",
// //   age: 25,
// //   address: {
// //     street: "123 main st",
// //     city: "New York",
// //     state: "NY",
// //   },
// //   notes: [10, 9, 8],
// //   hobbies: ["reading", "swimming", "coding"],
// //   isMarried: false,
// //   job: {
// //     title: "Software Engineer",
// //     hours: 30,
// //     salary: 50000,
// //     company: "Google",
// //   },
// // };

// // console.info(person);
// // console.info(person.notes);
// // console.info(person.hobbies);
// // console.info(person.address);
// // console.info(person.job);
// // person.job.company = "Facebbok";
// // console.info(person.job);
// // const keys = "firstName";
// // console.info(person[keys]); //Pour un acces dynamique
// // console.info(person["lastName"]); //Pour un acces dynamique
// // console.info(person["notes"][0]);
// // console.info(2 + "2"); //4
// // console.info(2 * "3"); //6
// // console.info(2 * "a"); //NAN
// // let notes = [23, 34, 44];
// // let notes2 = notes;
// // notes2.push(45);
// // console.info("notes: " + notes);
// // notes2[2] = 22; //Modifie la valeur de notes array =object donc passage pas reference
// // console.info(notes);
// // console.info("notes2: " + notes2);

// // const age = 12;
// // const pays = "US";
// // if ((pays === "FR" && age >= 18) || (pays === "US" && age >= 21)) {
// //   console.info("Vous pouvez conduire");
// // } else {
// //   console.info("Vous ne pouvez pas conduire");
// // }

// // const names = "Fabrice";
// // for (const key in names) {
// //   //console.info(key)
// //   console.info(names[key]);
// // }

// // const persons = {
// //   firstName: "Fabrice",
// //   lastName: "Dupont",
// //   age: 30,
// //   address: {
// //     street: "123 rue de la paix",
// //     city: "Paris",
// //     country: "France",
// //   },
// // };
// // for (const key in persons) {
// //   console.info(key + " : " + persons[key]);
// // }

// // for (const note of notes) {
// //   console.info(note);
// // }

// // // const numberOfUser = prompt("Enter number between 0 and 100");
// // // if (numberOfUser > 100 || numberOfUser < 0) {
// // //   console.info("Number is not in 0  and 100");
// // // } else {
// // //   for (let i = numberOfUser; i >= 0; i--) {
// // //     console.info(i);
// // //   }
// // // }

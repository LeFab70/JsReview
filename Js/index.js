const person = {
  firstName: "Fabrice",
  lastName: "Kouonang",
  age: 25,
  address: {
    street: "123 main st",
    city: "New York",
    state: "NY",
  },
  notes: [10, 9, 8],
  hobbies: ["reading", "swimming", "coding"],
  isMarried: false,
  job: {
    title: "Software Engineer",
    hours: 30,
    salary: 50000,
    company: "Google",
  },
};

console.info(person);
console.info(person.notes);
console.info(person.hobbies);
console.info(person.address);
console.info(person.job);
person.job.company = "Facebbok";
console.info(person.job);
const keys = "firstName";
console.info(person[keys]); //Pour un acces dynamique
console.info(person["lastName"]); //Pour un acces dynamique
console.info(person["notes"][0]);
console.info(2 + "2"); //4
console.info(2 * "3"); //6
console.info(2 * "a"); //NAN
let notes = [23, 34, 44];
let notes2 = notes;
notes2.push(45);
console.info("notes: "+notes);
notes2[2] = 22;//Modifie la valeur de notes array =object donc passage pas reference
console.info(notes);
console.info("notes2: " + notes2);

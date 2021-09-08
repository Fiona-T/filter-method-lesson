  
/**
 * To run this file in Gitpod, use the 
 * command node filter.js in the terminal
 */


// Simple Filtering
const people = [
  {
    name: 'Michael',
    age: 23,
  },
  {
    name: 'Lianna',
    age: 16,
  },
  {
    name: 'Paul',
    age: 18,
  },
];

// filter new array with people 21 or older
const oldEnough = people.filter(person => person.age >= 21);
console.log(oldEnough); //[ { name: 'Michael', age: 23 } ]

// filter new array containing objects with name equal to Paul

// const namePaul = people.filter(person => person.name === 'Paul');
// console.log(namePaul); // [ { name: 'Paul', age: 18 } ]

// add [0] to get just the object from the array
const namePaul = people.filter(person => person.name === 'Paul')[0];
console.log(namePaul); //{ name: 'Paul', age: 18 }

// Complex Filtering
const students = [
  {
    id: 1,
    name: 'Mark',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 5 },
      { name: 'css', yrsExperience: 3 },
    ]
  },
  {
    id: 2,
    name: 'Ariel',
    profession: 'Developer',
    skills: [
      { name: 'javascript', yrsExperience: 0 },
      { name: 'html', yrsExperience: 4 },
      { name: 'css', yrsExperience: 2 },
    ]
  },
  {
    id: 3,
    name: 'Jason',
    profession: 'Designer',
    skills: [
      { name: 'javascript', yrsExperience: 1 },
      { name: 'html', yrsExperience: 1 },
      { name: 'css', yrsExperience: 5 },
    ]
  },
];

// const candidates = students.filter(student => {
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >=5);
//   return strongSkills.length > 0;
// })

// console.log(candidates);

// refactor to define function outside and pass function name to filter
// const hasStrongSkills = student => {
//   // filter the skills array for each student, to skills with at least 5 yrs
//   let strongSkills = student.skills.filter(skill => skill.yrsExperience >=5);
//   // return only the arrays with lenght longer than zero (Ariel will have empty array)
//   return strongSkills.length > 0;
// }

// const candidates = students.filter(hasStrongSkills);
// console.log(candidates);

// refactor to define the function from inner filter outside, and pass name to inner filter
const has5yearsExp = skill => skill.yrsExperience >=5;
const hasStrongSkills = student => student.skills.filter(has5yearsExp).length > 0;

const candidates = students.filter(hasStrongSkills);
console.log(candidates);
// [
//   {
//     id: 1,
//     name: 'Mark',
//     profession: 'Developer',
//     skills: [ [Object], [Object], [Object] ]
//   },
//   {
//     id: 3,
//     name: 'Jason',
//     profession: 'Designer',
//     skills: [ [Object], [Object], [Object] ]
//   }
// ]

// get just the names
const names = candidates.map(candidate => candidate.name);
console.log(names); //[ 'Mark', 'Jason' ]
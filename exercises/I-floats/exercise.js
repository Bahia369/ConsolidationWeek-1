let numberOfStudents = 15;
let numberOfMentors = 8;
const total = numberOfStudents + numberOfMentors;
let percentageOfStudents = (numberOfStudents / total) * 100;
let percentageOfMentors = (numberOfMentors / total) * 100;
let roundedPercentageOfStudents = Math.floor(percentageOfStudents);
let roundedPercentageOfMentors = Math.floor(percentageOfMentors);
console.log(`PercentageOfStudents: ${roundedPercentageOfStudents}%`);
console.log(`PercentageOfMentors: ${roundedPercentageOfMentors}%`)
// TODO: Include packages needed for this application

const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your app's name?",
  },

  {
    type: "input",
    name: "motivation",
    message: "What motivated you to build this app?",
  },
  {
    type: "input",
    name: "app's function",
    message: "What does your app do?",
  },
  {
    type: "input",
    name: "installation directions",
    message: "How do you install your app?",
  },
  {
    type: "input",
    name: "directions for use",
    message: "How would you explain how to use your app to a new user?",
  },
  // 1.) What is your motivation behind building this app?
  // 2.) What does your app do?
  // 3.) How would you explain how to use your app to a new user?
  // 4.) What steps does the user need to take to install your app?
];
inquirer.prompt(questions).then((answers) => {
  console.log(answers);
});
// inquirer
//   .prompt([
//     {
//       type: "input",
//       name: "app's function",
//       message: "What does your app do?",
//     },
//   ])
//   .then((answers) => {
//     console.log(answers);
//   });

// inquirer
//   .prompt([
//     ,
//   ])
//   .then((answers) => {
//     console.log(answers);
//   }),

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your app's name?",
  },

  //   {
  //     type: "input",
  //     name: "motivation",
  //     message: "What motivated you to build this app?",
  //   },
  //   {
  //     type: "input",
  //     name: "function",
  //     message: "What does your app do?",
  //   },
  //   {
  //     type: "input",
  //     name: "installation",
  //     message: "How do you install your app?",
  //   },
  //   {
  //     type: "input",
  //     name: "directions",
  //     message: "Explain how to use your app to a new user:",
  //   },
  //   {
  //     type: "input",
  //     name: "contribution-guidelin",
  //     message: "What are the contribution guidelines for your app?",
  //   },
  //   {
  //     type: "input",
  //     name: "test",
  //     message:
  //       "Submit a test of your application, include instructions on how to run the test.",
  //   },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(questions).then((data) => {
    console.log(data.title);
    fileName = `${data.title.toLowerCase().split(" ").join("")}README.md`;
    console.log(fileName);

    const readMeTitle = `#${data.title}"`;

    fs.writeFile(
      fileName,
      JSON.stringify(readMeTitle, data, null, "\t"),
      (err) => (err ? console.log(err) : console.log("Success!"))
    );
  });
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();

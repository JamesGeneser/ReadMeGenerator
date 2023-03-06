// TODO: Include packages needed for this application

const fs = require("fs");
const inquirer = require("inquirer");
const { listenerCount } = require("process");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "title",
    message: "What is your app's name?",
  },

  {
    type: "input",
    name: "description",
    message: "What does your app do?",
  },
  {
    type: "input",
    name: "installation",
    message: "How do you install your app?",
  },
  {
    type: "input",
    name: "usage",
    message: "Explain how to use your app to a new user:",
  },
  {
    type: "input",
    name: "contribution",
    message: "What are the contribution guidelines for your app?",
  },
  {
    type: "input",
    name: "test",
    message:
      "Submit a test of your application, include instructions on how to run the test.",
  },
  {
    type: "list",
    name: "license",
    message: "Which license are you using?",
    choices: ["MIT", "Apache2.0", "GPL", "BSD"],
  },
  {
    type: "input",
    name: "github",
    message: "What is your gitHub username:",
  },
  {
    type: "input",
    name: "email",
    message: "What is your email address:",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  inquirer.prompt(questions).then((data) => {
    console.log(data.title);
    fileName = `${data.title.toLowerCase().split(" ").join("")}README.md`;

    const generateMarkdown = require("./utils/generateMarkdown.js");
    const license = data.license;
    console.log("this is the license on index" + license);

    const readMeTemplate = `# ${data.title}
${data.description}
<br>


<br>

### Table of Contents
- [Installation](#installation-instructions)
- [Usage](#how-to-use)
- [License](#license)
- [Contributing](#how-to-contribute)
- [Tests](#tests)

<br>

<br>

## Installation Instructions
${data.installation}
<br>

## How to Use
${data.usage}
<br>

![screen shot example of app page](./photos/app.png "example application")

## License
${generateMarkdown(data)}
<br>

## How to Contribute
${data.contribution}
<br>

## Tests
${data.test}

## Questions
[Link to GitHub](https://github.com/${data.github})
    
Contact me via email:
    ${data.email} 

     `;

    fs.writeFile(fileName, readMeTemplate, (err) =>
      err ? console.log(err) : console.log("Success!")
    );
  });
}

// TODO: Create a function to initialize app
function init() {
  writeToFile();
}

// Function call to initialize app
init();

//Title: My Application
//Desc: This is a short description of what my app does

//Install: Follow the download instructions on our webpage

//How to use: Follow the 'getting started' directions to use My Application

//contrubute: Interested contributers can contact me at the email provided
//tests: Placeholder for a test
//gitHub: gitUserName
//email: mymail@gmail.com

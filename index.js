// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// linked to README
const generatePage = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
// Questions
const questions = [
  {
    type: "input",
    name: "userName",
    message: "Please enter your GitHub username",
  },
  {
    type: "input",
    name: "userEmail",
    message: "Please enter your email address",
  },
  {
    type: "input",
    name: "applicationName",
    message: "Please enter the name of the application",
  },
  {
    type: "input",
    name: "applicationDescription",
    message: "Please provide a description of your application",
  },
  {
    type: "list",
    name: "applicationLicense",
    message: "What kind of license should your project have?",
    choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
  },
  {
    type: "input",
    name: "applicationInstallation",
    message: "Please enter any dependencies that need to be installed",
  },
  {
    type: "input",
    name: "applicationTest",
    message: "Please enter the command used for testing the application",
  },
  {
    type: "input",
    name: "applicationUsage",
    message: "Please describe how the user would use your application",
  },
  {
    type: "input",
    name: "applicationContributors",
    message: "Please enter the names of any other contributors",
  },
];

// TODO: Create a function to write README file
const writeFile = (data) => {
  fs.writeFile("README.md", data, (err) => {
    // Fail
    if (err) {
      console.log(err);
      return;
      // Success
    } else {
      console.log(
        "Congrats! You have succesfully created a README.md for your application!"
      );
    }
  });
};

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();

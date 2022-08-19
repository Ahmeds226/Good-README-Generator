// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");

// linked to README
const generatePage = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = () => {
  // Promting the user with questions via Inquirer
  return inquirer.prompt([
    {
      type: "input",
      name: "applicationName",
      message: "Please enter the name of the application",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a valid project name");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "applicationDescription",
      message: "Please provide a description of your application",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a description of your applciation");

          return false;
        }
      },
    },
    {
      type: "input",
      name: "applicationInstallation",
      message: "Please enter any dependencies that need to be installed",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log(
            "Please enter any dependencies that need to be installed!"
          );
          return false;
        }
      },
    },
    {
      type: "input",
      name: "applicationUsage",
      message: "Please describe how the user would use your application",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a usage description");
          return false;
        }
      },
    },
    {
      type: "list",
      name: "applicationLicense",
      message: "What kind of license should your project have?",
      choices: ["MIT", "APACHE 2.0", "GPL 3.0", "BSD 3", "None"],
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please choose a license");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "applicationContributors",
      message: "Please enter the names of any other contributors",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the names of any other contributors");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "applicationTest",
      message: "Please enter the command used for testing the application",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter the command used to test the application");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "userName",
      message: "Please enter your GitHub username",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a valid GitHub username");
          return false;
        }
      },
    },
    {
      type: "input",
      name: "userEmail",
      message: "Please enter your email address",
      validate: (nameInput) => {
        if (nameInput) {
          return true;
        } else {
          console.log("Please enter a valid email address");
          return false;
        }
      },
    },
  ]);
};

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
questions()
  // Gathers the users answers
  .then((answers) => {
    return generatePage(answers);
  })
  // Displays the users answers onto the page
  .then((data) => {
    return writeFile(data);
  })
  // Catch any errors
  .catch((err) => {
    console.log(err);
  });

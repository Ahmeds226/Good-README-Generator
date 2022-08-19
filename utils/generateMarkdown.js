// function to generate markdown for README
const generateMarkdown = (data) => {
  return `# ${data.applicationName}
  ![GitHub licence](http://img.shields.io/badge/license-${data.license}-blue.svg)
  
  ## Description 
  ${data.applicationDescription}
  ## Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [License](#license)
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## Installation 
  ${data.applicationInstallation}
  ## Usage 
  ${data.applicationUsage}
  ## License 
  This project is license under ${data.applicationLicense}
  ## Contributing 
  ${data.applicationContributors}
  ## Tests
  ${data.applicationTest}
  ## Questions

  Please feel free to message me any questions via my GitHub https://github.com/${data.userName} or send me an email at ${data.userEmail}.
`;
};

// use for importing Markdown in index
module.exports = generateMarkdown;

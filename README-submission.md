# Good-README-Generator

I have developed a README generator that allows developers to create a professional README.md file through their terminal via the Inquirer package.

## User Story

```md
AS A developer
I WANT a README generator
SO THAT I can quickly create a professional README for a new project
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for information about my application repository
THEN a high-quality, professional README.md is generated with the title of my project and sections entitled Description, Table of Contents, Installation, Usage, License, Contributing, Tests, and Questions
WHEN I enter my project title
THEN this is displayed as the title of the README
WHEN I enter a description, installation instructions, usage information, contribution guidelines, and test instructions
THEN this information is added to the sections of the README entitled Description, Installation, Usage, Contributing, and Tests
WHEN I choose a license for my application from a list of options
THEN a badge for that license is added near the top of the README and a notice is added to the section of the README entitled License that explains which license the application is covered under
WHEN I enter my GitHub username
THEN this is added to the section of the README entitled Questions, with a link to my GitHub profile
WHEN I enter my email address
THEN this is added to the section of the README entitled Questions, with instructions on how to reach me with additional questions
WHEN I click on the links in the Table of Contents
THEN I am taken to the corresponding section of the README
```

## Instructions

The application will be invoked by using the following command:

```bash
node index.js
```

## Sample README File / Preview:

<img src="./assets/images/preview.png" alt="" />

## Walkthrough Video

In the walkthrough video below you can see that in the console I have tested the validation via not entering anything for the description of the application. This then prompt me to enter a description of my application and would not let me advance on with the questions.

https://drive.google.com/file/d/1CocjcO2arm2s_8f60rmjKeeoStRCJuBz/view?usp=sharing

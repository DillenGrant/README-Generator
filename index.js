// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is your project title?'
      },
      {
        type: 'input',
        name: 'description',
        message: 'Provide a brief description of your project:'
      },
      {
        type: 'input',
        name: 'Table of Contents',
        message: 'Provide a brief description of your project:'
      },
      {
        type: 'input',
        name: 'installation',
        message: 'Provide a brief description of your project:'
      },
      {
        type: 'input',
        name: 'usage',
        message: 'Provide a brief description of your project:'
      },
      {
        type: 'list',
        name: 'license',
        message: 'Provide a brief description of your project:'
      },
      {
        type: 'input',
        name: 'Contributing',
        message: 'Provide a brief description of your project:'
      },
      {
        type: 'input',
        name: 'Tests',
        message: 'Provide a brief description of your project:'
      },
      {
        type: 'input',
        name: 'Questions',
        message: 'Provide a brief description of your project:'
      },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFileSync(fileName, data, (err) => {
        if (err) {
          console.error(err);
        } else {
          console.log('README.md file has been created.');
        }
      });
}

// TODO: Create a function to initialize app
function init() {
    inquirer
    .prompt(questions)
    .then((userResponses) => {
      // Generate the README content using userResponses
      const readmeContent = generateREADME(userResponses);

      // Write the generated README content to a file
      writeToFile('README.md', readmeContent);
    })
    .catch((error) => {
      console.error(error);
    });
}

// Function call to initialize app
init();

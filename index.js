// // TODO: Include packages needed for this application

// // TODO: Create an array of questions for user input
// const questions = [];

// // TODO: Create a function to write README file
// function writeToFile(fileName, data) {}

// // TODO: Create a function to initialize app
// function init() {}

// // Function call to initialize app
// init();

// Use writeFileSync method to use promises instead of a callback function


const inquirer = require('inquirer');
const fs = require('fs');




//mini project for 9 that generates HTML doc



const promptUser = () => {
  return inquirer.prompt([
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Please provide a short description of your project answering questions like what, why, and how.',
    },
    {
      type: 'input',
      name: 'ToC',
      message: 'Will you need a table of contents?',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide a step-by-step descriptoin on how to install your project and prepare the development environment.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use, including screenshots as needed.',
    },
    {
      type: 'input',
      name: 'credits',
      message: 'Enter your github username.',
    },
    {
      type: 'checkbox',
      name: 'license',
      message: 'Please select the license needed for your project.',
    },
    {
      type: 'input',
      name: 'badges',
      message: 'Please list any badges associated with your project.',
    },
    {
      type: 'input',
      name: 'features',
      message: 'Please provide a list of features your project employs.',
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Please provide ways other users can contribute.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide examples of tests for your applicatoin and how to run them.',
    },
  ]);
};

const generateREADME = ({ title, description, ToC, installation, usage, credits, license, badges, features, contribute, tests }) =>

// insert template for new readme doc

;

// Bonus using writeFileSync as a promise
const init = () => {
  promptUser()
    // Use writeFileSync method to use promises instead of a callback function
    .then((answers) => fs.writeFileSync('README1.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README1.md'))
    .catch((err) => console.error(err));
};

init();
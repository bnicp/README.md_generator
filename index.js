// packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const licenseInfo = require("./utils/generateMarkdown.js");

//questions for user input

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
      message: 'Please provide a short description of your project.',
    },
    {
      type: 'input',
      name: 'installation',
      message: 'Please provide a step-by-step description on how to install your project and prepare the development environment.',
    },
    {
      type: 'input',
      name: 'usage',
      message: 'Provide instructions and examples for use.',
    },
    {
      type: 'list',
      name: 'license',
      message: 'Please select the license needed for your project.',
      choices: ['None', 'MIT', 'GNU GPL v3', 'ISC', 'Mozilla'],
    },
    {
      type: 'input',
      name: 'contribute',
      message: 'Please provide ways other users can contribute.',
    },
    {
      type: 'input',
      name: 'tests',
      message: 'Provide examples of tests for your application and how to run them.',
    },
    {
      type: 'input',
      name: 'email',
      message: 'Enter your email for user questions.',
    },
    {
      type: 'input',
      name: 'github',
      message: 'Enter your github username.',
    },
  ]);
};


// function to write README file
const generateREADME = ({title, description, installation, usage, license, contribute, tests, email, github}) =>

// insert template for new readme doc
`## ${title}

${licenseInfo.renderLicenseBadge(license)}

## Description

${description}

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [License](#license)
- [Credits](#credits)
- [Contributing](#contributing)
- [Tests](#tests)
- [Questions](#questions)

## Installation

${installation}

## Usage

${usage}

## License

${licenseInfo.renderLicenseLink(license)}

## Contributing

${contribute}

## Tests

${tests}

## Questions
Email: ${email}
Github: https://github.com/${github}`;

// Use writeFileSync method to use promises instead of a callback function
const init = () => {
   promptUser()
    .then((answers) => fs.writeFileSync('README-test.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README-test.md'))
    .catch((err) => console.error(err));
};

// function init() {}
init();

// open terminal and initialize app using 'node index.js' as a command
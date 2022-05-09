// packages needed for this application

const inquirer = require('inquirer');
const fs = require('fs');

// questions for user input

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
      choices: ['MIT', 'GNUPv3', 'ISC'],
      filter(val) {
        return val.toLowerCase
      }
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


// function to render license badges and links
function licenseBadge(license) {
  if (license == 'None') {
    licenseBadge = ''
  } else if (license == 'MIT'){
    licenseBadge = '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)'
  } else if (license == 'GNUPv3'){
    licenseBadge = '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)'
  } else if (license == 'ISC'){
    licenseBadge = '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)'
}
}

function licenseLink(license) {
    if (license == 'None') {
    licenseLink = ''
  } else if (license == 'MIT'){
    licenseLink = 'https://opensource.org/licenses/MIT'
  } else if (license == 'GNUPv3'){
    licenseLink = 'https://www.gnu.org/licenses/gpl-3.0.en.html'
  } else if (license == 'ISC'){
    licenseLink = 'https://opensource.org/licenses/ISC'
  }
}

// function to write README file

const generateREADME = ({ title, description, installation, usage, license, contribute, tests, email, github }) =>

// insert template for new readme doc

`${licenseBadge}

## ${title}

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

${license}: ${licenseLink}

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
    .then((answers) => fs.writeFileSync('README1.md', generateREADME(answers)))
    .then(() => console.log('Successfully wrote to README1.md'))
    .catch((err) => console.error(err));
};

// function init() {}
init();

// open terminal and initialize app using 'node index.js' as a command
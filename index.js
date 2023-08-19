const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('../Develop/utils/generateMarkdown');

const questions = [
    {
      type: 'input',
      name: 'title',
      message: 'What is the title of your project?',
    },
    {
      type: 'input',
      name: 'description',
      message: 'Provide a description of your project:',
    },
    {
      type: 'input',
      name: 'problem',
      message: 'What problem does it solve?',
    },
    {
      type: 'input',
      name: 'motivation',
      message: 'What was your motivation for building this project?',
    },
    {
      type: 'input',
      name: 'standOut',
      message: 'What makes your project stand out?',
    },
    // Add more questions for other information you want to gather
  ];
  
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log('README file created successfully!');
    }
  });
}

function init() {
  inquirer.prompt(questions).then((userResponses) => {
    const markdownContent = generateMarkdown(userResponses);
    writeToFile('README.md', markdownContent);
  });
}

init();

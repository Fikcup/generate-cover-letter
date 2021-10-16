const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generator = require('./utils/generateCL');

const questions = [
    {
        type: 'input',
        name: 'yourname',
        message: 'What is your full name?',
    },
    {
        type: 'input',
        name: 'yourzipcode',
        message: 'What is your zipcode?',
    },
    {
        type: 'input',
        name: 'yournumber',
        message: 'What is your phone number?',
    },
    {
        type: 'input',
        name: 'youremail',
        message: 'What is your email?',
    },
    {
        type: 'input',
        name: 'jobtitle',
        message: 'What is the job title?',
    },
    {
        type: 'input',
        name: 'companyname',
        message: 'What is the company\'s\ name?',
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), 'dist', fileName), data);
}

function init() {
    inquirer.prompt(questions)
        .then((responseData) => {
            writeToFile('CoverLetter.txt', generator({ ...responseData }));
        })
        .catch((err) => {
            console.log(err);
        });
}

init();
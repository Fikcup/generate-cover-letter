const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generator = require('./utils/generateCL');

const questions = [
    {
        type: 'input',
        name: 'yourname',
        message: 'What is your full name?',
        validate: (input) => {
            if (input === '') {
                return('Please include your name.');
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'yourzipcode',
        message: 'What is your zipcode?',
        validate: (input) => {
            if (input === '') {
                return('Please include your zipcode.');
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'yournumber',
        message: 'What is your phone number?',
        validate: (input) => {
            if (input === '') {
                return('Please include your phone number.');
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'youremail',
        message: 'What is your email?',
        validate: (input) => {
            if (input === '') {
                return('Please include your email.');
            }

            return true;
        }
    },
    {
        type: 'input',
        name: 'jobtitle',
        message: 'What is the job title?',
        validate: (input) => {
            if (input === '') {
                return('Please include the job title.');
            }

            return true;
        }
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
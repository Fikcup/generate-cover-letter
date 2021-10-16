const fs = require('fs');
const path = require('path');
const inquirer = require('inquirer');
const generator = require('./utils/generateCL');

const questions = [
    {
        type: 'input',
        name: 'jobtitle',
        message: 'What is the job title?',
    },
];

function writeToFile(fileName, data) {
    return fs.writeFileSync(path.join(process.cwd(), fileName), data);
}

function init() {
    inquirer.prompt(questions)
        .then((responseData) => {
            writeToFile('', generator({ ...responseData }));
        })
        .catch((err) => {
            console.log(err);
        });
}

init();